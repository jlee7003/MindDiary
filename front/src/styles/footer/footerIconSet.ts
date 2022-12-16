export type gitIconName = "gitIcon" | "gitIcon1" | "gitIcon2" | "gitIcon3" | "gitIcon4" | "gitIcon5";

type icon = {
    path: string;
    viewBox: string;
    fill: string;
    href: string;
};

// icon의 path와 viewbox
const gitIconSet: Record<gitIconName, icon> = {
    gitIcon: {
      path: "M21.3059 0.347867C10.2435 1.58569 1.34548 10.7456 0.143046 21.886C-1.05939 33.5216 5.43376 43.9193 15.2937 47.8804C16.0152 48.128 16.7367 47.6328 16.7367 46.6426V42.6815C16.7367 42.6815 15.7747 42.9291 14.5723 42.9291C11.2055 42.9291 9.76253 39.9583 9.52205 38.2253C9.28156 37.2351 8.80058 36.4924 8.07912 35.7497C7.35766 35.5021 7.11717 35.5021 7.11717 35.2546C7.11717 34.7594 7.83864 34.7594 8.07912 34.7594C9.52205 34.7594 10.7245 36.4924 11.2055 37.2351C12.4079 39.2156 13.8508 39.7107 14.5723 39.7107C15.5342 39.7107 16.2557 39.4632 16.7367 39.2156C16.9771 37.4827 17.6986 35.7497 19.1415 34.7594C13.6103 33.5216 9.52205 30.3033 9.52205 24.8568C9.52205 22.1336 10.7245 19.4104 12.4079 17.4299C12.1674 16.9347 11.9269 15.6969 11.9269 13.964C11.9269 12.9737 11.9269 11.4883 12.6484 10.0029C12.6484 10.0029 16.0152 10.0029 19.382 13.2213C20.5845 12.7261 22.2679 12.4786 23.9513 12.4786C25.6347 12.4786 27.3181 12.7261 28.761 13.2213C31.8874 10.0029 35.4947 10.0029 35.4947 10.0029C35.9756 11.4883 35.9756 12.9737 35.9756 13.964C35.9756 15.9445 35.7351 16.9347 35.4947 17.4299C37.1781 19.4104 38.3805 21.886 38.3805 24.8568C38.3805 30.3033 34.2922 33.5216 28.761 34.7594C30.2039 35.9973 31.1659 38.2253 31.1659 40.4534V46.8901C31.1659 47.6328 31.8874 48.3755 32.8493 48.128C41.7473 44.4145 48 35.5021 48 25.1044C48 10.2505 35.7352 -1.38509 21.3059 0.347867Z",
      viewBox: "0 0 100 100",
      fill: "black",
      href: "https://kdt-gitlab.elice.io/ai_track/class05/ai_project/team02/ai_project"
  },

    gitIcon1: {
        path: "M21.3059 0.171353C10.2435 1.40918 1.34548 10.5691 0.143046 21.7095C-1.05939 33.3451 5.43376 43.7428 15.2937 47.7039C16.0152 47.9514 16.7367 47.4563 16.7367 46.466V42.505C16.7367 42.505 15.7747 42.7526 14.5723 42.7526C11.2055 42.7526 9.76253 39.7818 9.52205 38.0488C9.28156 37.0586 8.80058 36.3159 8.07912 35.5732C7.35766 35.3256 7.11717 35.3256 7.11717 35.0781C7.11717 34.5829 7.83864 34.5829 8.07912 34.5829C9.52205 34.5829 10.7245 36.3159 11.2055 37.0586C12.4079 39.0391 13.8508 39.5342 14.5723 39.5342C15.5342 39.5342 16.2557 39.2867 16.7367 39.0391C16.9771 37.3061 17.6986 35.5732 19.1415 34.5829C13.6103 33.3451 9.52205 30.1267 9.52205 24.6803C9.52205 21.9571 10.7245 19.2339 12.4079 17.2534C12.1674 16.7582 11.9269 15.5204 11.9269 13.7874C11.9269 12.7972 11.9269 11.3118 12.6484 9.8264C12.6484 9.8264 16.0152 9.8264 19.382 13.0447C20.5845 12.5496 22.2679 12.302 23.9513 12.302C25.6347 12.302 27.3181 12.5496 28.761 13.0447C31.8874 9.8264 35.4947 9.8264 35.4947 9.8264C35.9756 11.3118 35.9756 12.7972 35.9756 13.7874C35.9756 15.768 35.7351 16.7582 35.4947 17.2534C37.1781 19.2339 38.3805 21.7095 38.3805 24.6803C38.3805 30.1267 34.2922 33.3451 28.761 34.5829C30.2039 35.8207 31.1659 38.0488 31.1659 40.2769V46.7136C31.1659 47.4563 31.8874 48.199 32.8493 47.9514C41.7473 44.238 48 35.3256 48 24.9279C48 10.074 35.7352 -1.5616 21.3059 0.171353Z",
        viewBox: "0 0 100 100",
        fill: "#F87474",
        href: "https://github.com/jlee7003"
    },

    gitIcon2: {
        path: "M21.3059 0.171353C10.2435 1.40918 1.34548 10.5691 0.143046 21.7095C-1.05939 33.3451 5.43376 43.7428 15.2937 47.7039C16.0152 47.9514 16.7367 47.4563 16.7367 46.466V42.505C16.7367 42.505 15.7747 42.7526 14.5723 42.7526C11.2055 42.7526 9.76253 39.7818 9.52205 38.0488C9.28156 37.0586 8.80058 36.3159 8.07912 35.5732C7.35766 35.3256 7.11717 35.3256 7.11717 35.0781C7.11717 34.5829 7.83864 34.5829 8.07912 34.5829C9.52205 34.5829 10.7245 36.3159 11.2055 37.0586C12.4079 39.0391 13.8508 39.5342 14.5723 39.5342C15.5342 39.5342 16.2557 39.2867 16.7367 39.0391C16.9771 37.3061 17.6986 35.5732 19.1415 34.5829C13.6103 33.3451 9.52205 30.1267 9.52205 24.6803C9.52205 21.9571 10.7245 19.2339 12.4079 17.2534C12.1674 16.7582 11.9269 15.5204 11.9269 13.7874C11.9269 12.7972 11.9269 11.3118 12.6484 9.8264C12.6484 9.8264 16.0152 9.8264 19.382 13.0447C20.5845 12.5496 22.2679 12.302 23.9513 12.302C25.6347 12.302 27.3181 12.5496 28.761 13.0447C31.8874 9.8264 35.4947 9.8264 35.4947 9.8264C35.9756 11.3118 35.9756 12.7972 35.9756 13.7874C35.9756 15.768 35.7351 16.7582 35.4947 17.2534C37.1781 19.2339 38.3805 21.7095 38.3805 24.6803C38.3805 30.1267 34.2922 33.3451 28.761 34.5829C30.2039 35.8207 31.1659 38.0488 31.1659 40.2769V46.7136C31.1659 47.4563 31.8874 48.199 32.8493 47.9514C41.7473 44.238 48 35.3256 48 24.9279C48 10.074 35.7352 -1.5616 21.3059 0.171353Z",
        viewBox: "0 0 100 100",
        fill: "#47B5FF",
        href: "https://github.com/DL-Berkey"
    },

    gitIcon3: {
        path: "M21.3059 0.171353C10.2435 1.40918 1.34548 10.5691 0.143046 21.7095C-1.05939 33.3451 5.43376 43.7428 15.2937 47.7039C16.0152 47.9514 16.7367 47.4563 16.7367 46.466V42.505C16.7367 42.505 15.7747 42.7526 14.5723 42.7526C11.2055 42.7526 9.76253 39.7818 9.52205 38.0488C9.28156 37.0586 8.80058 36.3159 8.07912 35.5732C7.35766 35.3256 7.11717 35.3256 7.11717 35.0781C7.11717 34.5829 7.83864 34.5829 8.07912 34.5829C9.52205 34.5829 10.7245 36.3159 11.2055 37.0586C12.4079 39.0391 13.8508 39.5342 14.5723 39.5342C15.5342 39.5342 16.2557 39.2867 16.7367 39.0391C16.9771 37.3061 17.6986 35.5732 19.1415 34.5829C13.6103 33.3451 9.52205 30.1267 9.52205 24.6803C9.52205 21.9571 10.7245 19.2339 12.4079 17.2534C12.1674 16.7582 11.9269 15.5204 11.9269 13.7874C11.9269 12.7972 11.9269 11.3118 12.6484 9.8264C12.6484 9.8264 16.0152 9.8264 19.382 13.0447C20.5845 12.5496 22.2679 12.302 23.9513 12.302C25.6347 12.302 27.3181 12.5496 28.761 13.0447C31.8874 9.8264 35.4947 9.8264 35.4947 9.8264C35.9756 11.3118 35.9756 12.7972 35.9756 13.7874C35.9756 15.768 35.7351 16.7582 35.4947 17.2534C37.1781 19.2339 38.3805 21.7095 38.3805 24.6803C38.3805 30.1267 34.2922 33.3451 28.761 34.5829C30.2039 35.8207 31.1659 38.0488 31.1659 40.2769V46.7136C31.1659 47.4563 31.8874 48.199 32.8493 47.9514C41.7473 44.238 48 35.3256 48 24.9279C48 10.074 35.7352 -1.5616 21.3059 0.171353Z",
        viewBox: "0 0 100 100",
        fill: "#FFDE00",
        href: "https://github.com/ohyoonah"
    },

    gitIcon4: {
        path: "M21.3059 0.171353C10.2435 1.40918 1.34548 10.5691 0.143046 21.7095C-1.05939 33.3451 5.43376 43.7428 15.2937 47.7039C16.0152 47.9514 16.7367 47.4563 16.7367 46.466V42.505C16.7367 42.505 15.7747 42.7526 14.5723 42.7526C11.2055 42.7526 9.76253 39.7818 9.52205 38.0488C9.28156 37.0586 8.80058 36.3159 8.07912 35.5732C7.35766 35.3256 7.11717 35.3256 7.11717 35.0781C7.11717 34.5829 7.83864 34.5829 8.07912 34.5829C9.52205 34.5829 10.7245 36.3159 11.2055 37.0586C12.4079 39.0391 13.8508 39.5342 14.5723 39.5342C15.5342 39.5342 16.2557 39.2867 16.7367 39.0391C16.9771 37.3061 17.6986 35.5732 19.1415 34.5829C13.6103 33.3451 9.52205 30.1267 9.52205 24.6803C9.52205 21.9571 10.7245 19.2339 12.4079 17.2534C12.1674 16.7582 11.9269 15.5204 11.9269 13.7874C11.9269 12.7972 11.9269 11.3118 12.6484 9.8264C12.6484 9.8264 16.0152 9.8264 19.382 13.0447C20.5845 12.5496 22.2679 12.302 23.9513 12.302C25.6347 12.302 27.3181 12.5496 28.761 13.0447C31.8874 9.8264 35.4947 9.8264 35.4947 9.8264C35.9756 11.3118 35.9756 12.7972 35.9756 13.7874C35.9756 15.768 35.7351 16.7582 35.4947 17.2534C37.1781 19.2339 38.3805 21.7095 38.3805 24.6803C38.3805 30.1267 34.2922 33.3451 28.761 34.5829C30.2039 35.8207 31.1659 38.0488 31.1659 40.2769V46.7136C31.1659 47.4563 31.8874 48.199 32.8493 47.9514C41.7473 44.238 48 35.3256 48 24.9279C48 10.074 35.7352 -1.5616 21.3059 0.171353Z",
        viewBox: "0 0 100 100",
        fill: "#3785A6",
        href: "https://github.com/hyeonKii"
    },

    gitIcon5: {
        path: "M21.3059 0.171353C10.2435 1.40918 1.34548 10.5691 0.143046 21.7095C-1.05939 33.3451 5.43376 43.7428 15.2937 47.7039C16.0152 47.9514 16.7367 47.4563 16.7367 46.466V42.505C16.7367 42.505 15.7747 42.7526 14.5723 42.7526C11.2055 42.7526 9.76253 39.7818 9.52205 38.0488C9.28156 37.0586 8.80058 36.3159 8.07912 35.5732C7.35766 35.3256 7.11717 35.3256 7.11717 35.0781C7.11717 34.5829 7.83864 34.5829 8.07912 34.5829C9.52205 34.5829 10.7245 36.3159 11.2055 37.0586C12.4079 39.0391 13.8508 39.5342 14.5723 39.5342C15.5342 39.5342 16.2557 39.2867 16.7367 39.0391C16.9771 37.3061 17.6986 35.5732 19.1415 34.5829C13.6103 33.3451 9.52205 30.1267 9.52205 24.6803C9.52205 21.9571 10.7245 19.2339 12.4079 17.2534C12.1674 16.7582 11.9269 15.5204 11.9269 13.7874C11.9269 12.7972 11.9269 11.3118 12.6484 9.8264C12.6484 9.8264 16.0152 9.8264 19.382 13.0447C20.5845 12.5496 22.2679 12.302 23.9513 12.302C25.6347 12.302 27.3181 12.5496 28.761 13.0447C31.8874 9.8264 35.4947 9.8264 35.4947 9.8264C35.9756 11.3118 35.9756 12.7972 35.9756 13.7874C35.9756 15.768 35.7351 16.7582 35.4947 17.2534C37.1781 19.2339 38.3805 21.7095 38.3805 24.6803C38.3805 30.1267 34.2922 33.3451 28.761 34.5829C30.2039 35.8207 31.1659 38.0488 31.1659 40.2769V46.7136C31.1659 47.4563 31.8874 48.199 32.8493 47.9514C41.7473 44.238 48 35.3256 48 24.9279C48 10.074 35.7352 -1.5616 21.3059 0.171353Z",
        viewBox: "0 0 100 100",
        fill: "#FFB169",
        href: ""
    },
};

export { gitIconSet };
