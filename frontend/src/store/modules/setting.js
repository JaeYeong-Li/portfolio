const DARK = "setting/DARK";
const MODE = "setting/MODE";

export function dark (isDark) {
    return {
        type: DARK,
        dark: isDark,
    };
}

export function mode(modeNum) {
    return {
        type: MODE,
        num: modeNum
    }
}

const initState = {
    dark: false,
    mode: 1,
}

export default function setting(state = initState, action) {
    switch(action.type) {
        case DARK:
            return {
                ...state,
                dark: !action.isDark
            };
        case MODE:
            return {
                ...state,
                mode: action.modeNum
            };
        default:
            return state;
    }
}