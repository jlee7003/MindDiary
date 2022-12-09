import { iconName, IconSet } from "./iconSet";

interface IconProps {
    icon: iconName;
}

export default function Icon({ icon }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
                position: "absolute",
                width: "2.5rem",
                height: "2.5rem",
                top: "10px",
                left: "9px",
                color: "gray",
            }}
            viewBox={IconSet[icon].viewBox}
        >
            <path d={IconSet[icon].path} />
        </svg>
    );
}
