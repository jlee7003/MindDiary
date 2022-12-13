import express from "express";
import { config } from "dotenv";
import userRouter from "./route/user";
import accountRouter from "./route/account";
import diaryRouter from "./route/diary";
import chatRouter from "./route/chat";
import certificationRouter from "./route/certification";
import tokenRouter from "route/token";
import error from "middleware/error";
import http from "http";
import { Socket } from "socket.io";
import socket from "socket.io";
import chatService from "./services/chatService";

import cors from "cors";
config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/account", accountRouter);
app.use("/api/diaries", diaryRouter);
app.use("/api/chats", chatRouter);
app.use("/api/certification", certificationRouter);
app.use("/api/token", tokenRouter);

app.use(chatRouter);
app.use(error);

interface MessagePayload {
    chatRoom: string;
    msgText: string;
    userid: string;
}

const server = http.createServer(app);
export const sc = new socket.Server(server, {
    cors: {
        // origin: "http://127.0.0.1:3001",
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
    },
});

let createdRooms: string[] = [];

if (sc !== undefined) {
    sc.on("connection", (socket: Socket) => {
        socket.on("message", async ({ chatRoom, msgText, userid }: MessagePayload) => {
            sc.emit("message", { sender: userid, msgText, chatRoom });
            await chatService.saveMessege(chatRoom, msgText, String(userid));
        });
        //foreach 사용하기 => for 대신에

        socket.on("room-list", async (usermodel: string) => {
            //socket emit 으로 받아온 userid로 방을 검색
            const result = await chatService.roomList(Number(usermodel));

            sc.emit("create-room", result, usermodel); // 대기실 방 생성
            return createdRooms;
        });

        socket.on("create-room", async (inviter: string, invitee: string, message: string) => {
            const exists = createdRooms.find(
                (createdRoom) => createdRoom === inviter + "," + invitee
            );
            const user_model_id = inviter + "," + invitee;
            sc.emit("message", { sender: inviter, msgText: message, chatRoom: user_model_id });
            await chatService.saveMessege(user_model_id, message, String(inviter));
            console.log(444);
            if (exists) {
                console.log("exist");
                return {
                    success: false,
                    payload: `${inviter + "," + invitee} 방이 이미 존재합니다.`,
                };
            }
            socket.join(inviter + "," + invitee); // 기존에 없던 room으로 join하면 room이 생성됨
            createdRooms.push(inviter + "," + invitee); // 유저가 생성한 room 목록에 추가
            sc.emit("create-room", inviter + "," + invitee); // 대기실 방 생성
            await chatService.saveChat(inviter, invitee);
            socket.join("");
            return { success: true, payload: inviter + "," + invitee };
        });

        socket.on("join-room", async (roomName: string, userid: string) => {
            const result2 = await chatService.readMessage(String(roomName), String(userid));
            sc.emit("join-room", result2);
            socket.join(roomName); // join room
            return { success: true };
        });
        socket.on("leave-room", (roomName: string) => {
            socket.leave(roomName); // leave room
            sc.emit("leave-room");
            return { success: true };
        });
    });
}

server.listen(4000, () => {
    console.log("chat server is loaded on " + 4000);
});

app.listen(process.env.PORT, () => {
    console.log("server is loaded on " + process.env.PORT);
});
