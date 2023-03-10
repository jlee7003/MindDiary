import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import useEmotion from "@/hooks/useEmotion";
import { useRequestGetDiary, useRequestGetMonthDiaries } from "@/api/diary";
import { TodaySection, CalendarDetail } from "@/styles/diary/todayDiary-style";
import DiaryTodayPost from "./DiaryTodayPost";
import { currentUser } from "@/temp/userAtom";
import { useRecoilValue } from "recoil";
import DiaryCreatePost from "./DiaryCreatePost";
import { postLoading } from "@/assets/images";

interface MonthData {
    createdAt: Date;
    emotion: string;
    id: number;
}

interface FetchedData {
    data: MonthData[];
}

export function DiaryCalendar() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    const user = useRecoilValue(currentUser);

    const [dateToReq, setDateToReq] = useState<{ year: number; month: number | string }>({
        year: currentYear,
        month: currentMonth,
    });

    const [clickedDate, setClickedDate] = useState<Date | null>(currentDate);
    const [id, setID] = useState<number | null>(null);

    const setCurrentDiaryID = (fetchedData: FetchedData | undefined, dateArg: Date | null) => {
        if (!fetchedData || !dateArg) {
            return;
        }

        const { data: diaries } = fetchedData;

        const currentDiary = diaries.find(
            (diary: MonthData) =>
                new Date(diary.createdAt).getDate() === new Date(dateArg).getDate()
        );

        if (currentDiary) {
            setID(currentDiary.id);
            return;
        }

        setID(null);
    };

    const setCurrentDay = (event: Date) => {
        const postDate = new Date(event);

        setClickedDate(postDate);
    };

    const setCalendarYearMonth = (event: { activeStartDate: Date }) => {
        const currentCalendarYear = event.activeStartDate.getFullYear();
        const currentCalendarMonth = (event.activeStartDate.getMonth() + 1)
            .toString()
            .padStart(2, "0");

        setDateToReq({
            year: currentCalendarYear,
            month: currentCalendarMonth,
        });

        setID(null);
        setClickedDate(null);
    };

    const setEmotionClassName = (dateArg: Date) => {
        const calendarDate = new Date(dateArg);
        const calendarDay = calendarDate.getDate();
        const calendarMonth = calendarDate.getMonth();

        if (monthDiaries) {
            const matchedDiary = monthDiaries?.data.find(
                (diary: MonthData) =>
                    new Date(diary.createdAt).getDate() === calendarDay &&
                    new Date(diary.createdAt).getMonth() === calendarMonth
            );

            if (matchedDiary) {
                return `${matchedDiary.emotion}`;
            }
        }

        return null;
    };

    const { isLoading: diaryLoading, data: userDiary } = useRequestGetDiary(id, {
        enabled: !!id,

        onSuccess: () => {},

        onError: () => {},
    });

    const { data: monthDiaries } = useRequestGetMonthDiaries(
        dateToReq.year,
        dateToReq.month,
        "calendar-diaries",
        {
            onSuccess: (res: FetchedData) => {
                setCurrentDiaryID(res, clickedDate);
            },

            onError: () => {},
        }
    );

    const diary = userDiary?.data;

    const { emotionState } = useEmotion(diary?.emotion, user?.nickname);

    useEffect(() => {
        setCurrentDiaryID(monthDiaries, clickedDate);
    }, [clickedDate]);

    return (
        <TodaySection>
            <Calendar
                locale="en-EN"
                onChange={setCurrentDay}
                onActiveStartDateChange={setCalendarYearMonth}
                tileClassName={({ date }) => setEmotionClassName(date)}
                defaultValue={currentDate}
            />
            {diaryLoading ? (
                <div className="img">
                    <img src={postLoading} alt="loading" />
                </div>
            ) : (
                clickedDate && (
                    <CalendarDetail>
                        {emotionState()}
                        {diary ? (
                            <DiaryTodayPost post={diary} />
                        ) : (
                            <DiaryCreatePost clickedDate={clickedDate} />
                        )}
                    </CalendarDetail>
                )
            )}
        </TodaySection>
    );
}
