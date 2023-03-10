import { useState, forwardRef, useMemo, ForwardedRef, useCallback, useRef } from "react";
import { dateTime } from "@/util/time";
import { CardSection, Post, PostDetail, MessageBlock } from "@/styles/home/postList-style";
import { socket } from "@/components/chat/Chat";
import { currentUser } from "@/temp/userAtom";

import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

interface Items {
    id: number;
    title: string;
    description: string;
    emotion: string;
    createdAt: Date;
    user_model_id: number;
}

interface Props {
    post: Items;
}

interface CreateRoomResponse {
    success: boolean;
    payload: string;
}

function PostItem({ post }: Props, ref: ForwardedRef<HTMLElement>) {
    const [isOpen, setIsOpen] = useState(false);
    const { emotion, title, description, createdAt, user_model_id } = post;
    const messegeRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const user = useRecoilValue(currentUser);

    const onCreateRoom = useCallback(() => {
        const messege = messegeRef.current?.value;
        let inviter = String(user?.id);
        let invitee = String(user_model_id);
        const roomName = inviter + "," + invitee;
        console.log(user_model_id, user?.id, user);
        if (user_model_id === Number(user?.id)) {
            alert("자신이 작성한 일기입니다.");
            // navigate("/diary", {
            //     state: { room: roomName },
            // });
            return;
        }

        socket.emit("create-room", inviter, invitee, messege, (response: CreateRoomResponse) => {
            if (response.success) {
                return alert(response.payload);
            }
        });
        //  socket.emit("message", { roomName, messege, inviter }, (chat: ChatData) => {
        //      setChats((prevChats) => [...prevChats, chat]);
        //  });

        navigate("/diary", {
            state: { room: roomName },
        });
    }, [navigate]);

    const onClick = () => {
        setIsOpen((prev) => !prev);
    };

    const itemBody = useMemo(() => {
        return (
            <>
                <Post onClick={onClick} isOpen={isOpen} emotion={emotion}>
                    <span className="emotion">{emotion}</span>
                    <span className="title">{title}</span>
                    <div className="time">
                        <span>{dateTime(new Date(createdAt))}</span>
                        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
                    </div>
                </Post>
                {isOpen && (
                    <PostDetail>
                        <p className="description">{description}</p>
                        <div>
                            <MessageBlock>
                                <input
                                    type="text"
                                    placeholder="메시지는 익명으로 전송됩니다. 속마음을 나눠보세요!"
                                    autoFocus
                                    ref={messegeRef}
                                />
                                <button onClick={onCreateRoom} className="submitButton">
                                    전송
                                </button>
                            </MessageBlock>
                        </div>
                    </PostDetail>
                )}
            </>
        );
    }, [isOpen, post]);

    return ref ? (
        <CardSection ref={ref}>{itemBody}</CardSection>
    ) : (
        <CardSection>{itemBody}</CardSection>
    );
}

export default forwardRef(PostItem);
