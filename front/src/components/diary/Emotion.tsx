import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import {
    EmotionSection,
    EmotionChartSection,
    EmotionDataSection,
} from "@/styles/diary/emotion-style";

const data = {
    nickname: "윤아",
    emotion: "슬픔",
    body: "오늘 너무 힘들었다. 내일은 안 힘들겠지? 슬프다",
    state: "나만보기",
    date: "Fri Nov 22 2022 00:00:00 GMT+0900",
};

const chart = [
    {
        emotion: "😊",
        A: 120,
    },
    {
        emotion: "😂",
        A: 98,
    },
    {
        emotion: "😙",
        A: 86,
    },
    {
        emotion: "😓",
        A: 99,
    },
    {
        emotion: "😀",
        A: 85,
    },
    {
        emotion: "😁",
        A: 65,
    },
    {
        emotion: "🥱",
        A: 65,
    },
    {
        emotion: "😟",
        A: 65,
    },
];

export function Emotion() {
    return (
        <EmotionSection>
            <h1>
                <span>{data.nickname}</span>님의 지난달 감정들
            </h1>
            <EmotionChartSection>
                <RadarChart width={450} height={450} data={chart}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="emotion" />
                    <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
                <span>
                    지난 한 달 간의 감정들 입니다.
                    <br />
                    가장 많이 자치한 감정은 <strong>행복</strong>이군요! <br />
                    자신의 감정을 돌아보는 건 <br />
                    정서적 건강을 관리하는 데 도움이 됩니다. <br />
                    꾸준히 기록하며 마음을 되돌아 보세요!
                </span>
            </EmotionChartSection>
            <EmotionDataSection>
                <article>
                    <h3>일주일 전 오늘</h3>
                    <span className="emotionIcon">😶</span>
                    <span>2022년 11월 25일</span>
                    <span className="body">기록이 없습니다!</span>
                </article>
                <article>
                    <h3>한 달 전 오늘</h3>
                    <span className="emotionIcon">😥</span>
                    <span>2022년 10월 25일</span>
                    <span className="body">{data.body}</span>
                </article>
                <article>
                    <h3>일 년 전 오늘</h3>
                    <span className="emotionIcon">😶</span>
                    <span>2021년 11월 25일</span>
                    <span className="body">기록이 없습니다!</span>
                </article>
            </EmotionDataSection>
        </EmotionSection>
    );
}
