import { stat } from "fs";

const defaultState = {
    star: false,
    user: {
        uid: null,
        displayName: "Chat With Ghost",
        avatarUrl: "http://icons.iconarchive.com/icons/google/noto-emoji-smileys/512/10100-ghost-icon.png",
    },
    list: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'MESSAGES_CHANGE':
            return {
                star: state.star,
                user: state.user,
                list: [...state.list, action.mess]
            }

        case 'USER_CHANGE':
            if (action.list)
                return ({
                    star: state.star,
                    user: action.user,
                    list: action.list,
                })
            else
                return {
                    star: state.star,
                    user: action.user,
                    list: []
                }

        case 'STAR_CHANGE':
            return ({
                star: action.star,
                user: state.user,
                list: state.list,
            })

        default:
            return state;
    }
}