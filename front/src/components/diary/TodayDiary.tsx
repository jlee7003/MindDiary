import { useState, ChangeEvent } from "react";
import Calendar from "react-calendar";
import useEmotion from "@/hooks/useEmotion";
import {
    TodaySection,
    CalendarDetail,
    DiaryDetail,
    EditBlock,
} from "@/styles/diary/todayDiary-style";

const data = {
    nickname: "윤아",
    emotion: "자신감",
    body: "오늘 너무 힘들었다. 내일은 안 힘들겠지? 슬프다",
    state: "나만보기",
    date: "Fri Nov 22 2022 00:00:00 GMT+0900",
};

export function TodayDiary() {
    const [value, setValue] = useState(new Date());
    const [newText, setNewText] = useState(data.body);
    const [isEdit, setIsEdit] = useState(false);
    const { emotionState } = useEmotion(data.emotion, data.nickname);

    const dateString = value.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewText(e.target.value);
        if (newText.length > 500) alert("500자");
    };

    const onDelete = () => {
        setNewText("");
        setIsEdit(true);
    };

    return (
        <TodaySection>
            <Calendar
                locale="en-EN"
                next2Label={null}
                prev2Label={null}
                onChange={setValue}
                value={value}
            />
            <CalendarDetail>
                {emotionState()}
                <DiaryDetail isEdit={isEdit}>
                    <article className="title">
                        <span className="date">{dateString}</span>
                        <div className="icons">
                            {data.state === "나만보기" ? (
                                <span className="material-symbols-outlined">lock</span>
                            ) : (
                                <span className="material-symbols-outlined">lock_open</span>
                            )}
                            <button
                                className="material-symbols-outlined"
                                onClick={() => setIsEdit(true)}
                            >
                                edit
                            </button>
                            <button className="material-symbols-outlined" onClick={onDelete}>
                                delete
                            </button>
                        </div>
                        {data.state === "나만보기" ? (
                            <select>
                                <option value="나만보기">나만보기</option>
                                <option value="전체공개">전체공개</option>
                            </select>
                        ) : (
                            <select>
                                <option value="전체공개">전체공개</option>
                                <option value="나만보기">나만보기</option>
                            </select>
                        )}
                    </article>
                    {isEdit ? (
                        <EditBlock>
                            <textarea
                                className="body"
                                rows="10"
                                value={newText}
                                autoFocus
                                onChange={onChange}
                            />
                            <div>
                                <span className="countText">{newText.length}/500</span>
                                <button
                                    className="submitButton"
                                    onClick={() => setIsEdit(false)}
                                    disabled={newText.length === 0}
                                >
                                    저장
                                </button>
                            </div>
                        </EditBlock>
                    ) : (
                        <span className="body">{newText}</span>
                    )}
                </DiaryDetail>
            </CalendarDetail>
        </TodaySection>
    );
}
