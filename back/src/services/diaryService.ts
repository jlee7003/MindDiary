import { PrismaClient, User } from "@prisma/client";
import { empty } from "@prisma/client/runtime";
import AppError from "lib/AppError";
import accountService from "./accountService";

class DiaryService {
    prisma = new PrismaClient();

    async writeDiary(userID: string, title: string, description: string, privateDiary: boolean) {
        try {
            const result = await accountService.getUserByUserID_login(userID);
            result?.User.id;
            if (result === null) {
                throw new AppError("NotFindError");
            }

            await this.prisma.diary.create({
                data: {
                    title,
                    description,
                    user: {
                        connect: {
                            id: result?.User.id,
                        },
                    },
                    private: privateDiary == true ? true : false,
                },
            });
        } catch (error) {
            throw new AppError("NotFindError");
        }

        await this.prisma.$disconnect();
        return { result: true };
    }

    async addViewCount(diaryID: number) {
        try {
            await this.prisma.diary.update({
                where: {
                    id: Number(diaryID),
                },
                data: {
                    view: {
                        increment: 1,
                    },
                },
            });
        } catch (error) {
            throw new AppError("NotFindError");
        }

        await this.prisma.$disconnect();
        return { result: true };
    }

    async deleteDiary(id: string) {
        try {
            await this.prisma.diary.delete({
                where: { id: Number(id) },
            });
        } catch (error) {
            throw new AppError("NotFindError");
        }

        await this.prisma.$disconnect();
        return { result: true };
    }

    async updateDiary(id: string, title: string, description: string) {
        const postUpdate = await this.prisma.diary.update({
            where: { id: Number(id) },
            data: { title, description },
        });
        if (postUpdate === null) {
            throw new AppError("NotFindError");
        }
        await this.prisma.$disconnect();
        return postUpdate;
    }

    async changeEmotion(id: string, emotion: string) {
        const postUpdate = await this.prisma.diary.update({
            where: { id: Number(id) },
            data: { emotion },
        });
        if (postUpdate === null) {
            throw new AppError("NotFindError");
        }
        await this.prisma.$disconnect();
        return postUpdate;
    }

    async getDiary(id: string) {
        const postData = await this.prisma.diary.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (postData === null) {
            throw new AppError("NotFindError");
        }
        await this.prisma.$disconnect();
        return postData;
    }

    async getDiaryByDate(datetime: Date, datetime2: Date) {
        const postData = await this.prisma.diary.findMany({
            where: {
                createdAt: {
                    gte: datetime,
                    lte: datetime2,
                },
            },
            select: {
                id: true,
                createdAt: true,
                emotion: true,
            },
        });
        if (postData === null) {
            throw new AppError("NotFindError");
        }
        await this.prisma.$disconnect();
        return postData;
    }
    //테스트 해보기
    async getDiaryList(
        userID: string,
        count: number,
        page: number,
        privatediary: boolean,
        emotion: string
    ) {
        console.log(typeof privatediary, privatediary);
        const postDatas = await this.prisma.diary.findMany({
            take: Number(count),
            skip: (Number(page) - 1) * Number(count),
            where: {
                emotion: emotion != "전체" ? emotion : undefined,
                private: privatediary === true ? true : false,
            },
            select: {
                id: true,
                title: true,
                description: true,
                emotion: true,
                view: true,
                user_model_id: true,
                private: true,
                createdAt: true,
                updatedAt: true,
            },
            orderBy: [{ createdAt: "desc" }],
        });

        if (postDatas === null) {
            throw new AppError("NotFindError");
        }
        await this.prisma.$disconnect();
        return postDatas;
    }

    async getMyDiaryList(userID: string, count: number, page: number) {
        const diarycount = await this.prisma.diary.count({
            where: {
                user: {
                    Account: {
                        userID: userID,
                    },
                },
            },
        });
        const postDatas = await this.prisma.diary.findMany({
            take: Number(count),
            skip: (Number(page) - 1) * Number(count),

            where: {
                user: {
                    Account: {
                        userID: userID,
                    },
                },
            },
            select: {
                id: true,
                title: true,
                description: true,
                emotion: true,
                view: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        if (postDatas === null) {
            throw new AppError("NotFindError");
        }
        await this.prisma.$disconnect();
        return { postDatas, diarycount };
    }
}

export default new DiaryService();
