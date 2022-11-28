import styled, { css } from "styled-components";
import { color } from "../common/colorPalette";

export const CardSection = styled.section`
    position: relative;

    width: 70%;
    max-width: 800;
    margin: 2rem auto;
    padding: 1.5rem 2rem;

    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 4px 0 ${color.gray};
`;

export const Post = styled.article<{ isOpen: boolean; tag: string }>`
    display: flex;

    .tag {
        flex: 0.8;

        max-width: 120px;
        height: 40px;
        margin-right: 1.5rem;

        background: ${({ tag }) =>
            tag === "신남"
                ? color.yellow
                : tag === "자신감"
                ? color.pink
                : tag === "만족감"
                ? color.orange
                : tag === "편안함"
                ? color.skyBlue
                : tag === "슬픔"
                ? color.lightBlue
                : tag === "불안"
                ? color.green
                : tag === "상처"
                ? color.darkBlue
                : color.red};

        color: white;
        line-height: 40px;
        text-align: center;
    }

    .body {
        flex: 2;
        overflow: hidden;

        height: 40px;
        margin-top: 8px;
        margin-right: 1.5rem;

        white-space: nowrap;
        text-overflow: ellipsis;

        ${({ isOpen }) =>
            isOpen &&
            css`
                height: 100%;
                white-space: normal;
            `}
    }

    .time {
        font-size: 0.8rem;
        line-height: 40px;

        .arrow {
            margin-left: 10px;

            color: gray;
        }
    }
`;

export const PostDetail = styled.article`
    display: flex;
    position: relative;

    margin-top: 2rem;

    input {
        width: 100%;
        height: 35px;
        padding-left: 1.5rem;

        border: 1px solid gray;
        border-radius: 8px;
        outline: none;
    }

    button {
        position: absolute;
        right: 0;

        width: 70px;
        height: 100%;

        border: 1px solid ${color.lightBlue};
        border-radius: 0 8px 8px 0;
        background: ${color.lightBlue};

        color: white;
    }
`;
