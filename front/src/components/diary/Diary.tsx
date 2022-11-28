import { useState } from "react";
import { TabList } from "@/styles/common/tab-style";
import { DiarySection } from "@/styles/diary/diary-style";
import { TodayDiary } from "./TodayDiary";

const tabList = ["하루일기", "전체일기", "대화목록"];

export function Diary() {
    const [tab, setTab] = useState(0);

    return (
        <DiarySection>
            <TabList>
                {tabList?.map((item, index: number) => (
                    <li
                        key={index}
                        className={tab === index ? "active" : undefined}
                        onClick={() => setTab(index)}
                    >
                        {item}
                    </li>
                ))}
            </TabList>
            {tab === 0 && <TodayDiary />}
        </DiarySection>
    );
}
