import { useRequestGetMyAllDiaries } from "@/api/diary";
import React, { useState } from "react";
import DiaryPageButton from "./DiaryPageButton";
import DiaryPost from "./DiaryPost";

interface Error {
    message: string;
}

interface Post {
    id: number;
    title: string;
    description: string;
    emotion: string;
    time: string;
    body: string;
    private: boolean;
}

interface Response {
    data: { diarycount: number; postDatas: Post };
}

export default function DiaryUserPostList() {
    const [count, setCount] = useState(10);
    const [page, setPage] = useState(1);
    const [diaryCount, setDiaryCount] = useState(0);

    const {
        isLoading,
        data: diaryData,
        refetch,
    } = useRequestGetMyAllDiaries(count, page, {
        onSuccess: (res: Response) => {
            console.log("일기 전부 GET 요청 성공");
            console.log(res);
            setDiaryCount(res.data.diarycount);
        },
        onError: (error: Error) => {
            console.log(error.message);
        },
    });

    const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = Number(event.target.value);

        setCount(value);
    };

    return (
        <>
            {!isLoading && (
                <>
                    {diaryData && (
                        <section>
                            {diaryData.data.postDatas.map((post: Post) => (
                                <DiaryPost key={post.id + "포스트"} post={post} refetch={refetch} />
                            ))}
                        </section>
                    )}
                    <span>
                        <DiaryPageButton
                            page={page}
                            setPage={setPage}
                            diaryCount={diaryCount}
                            count={count}
                        />
                    </span>
                    <select onChange={selectChangeHandler} defaultValue={count}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                    ;
                </>
            )}
        </>
    );
}