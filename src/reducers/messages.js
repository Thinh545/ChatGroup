import moment from 'moment'
import { stat } from 'fs';

const defaultState = {
    uid: null,
    list: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'MESSAGES_CHANGE':
            if (action.messages)
                state.list = action.messages
            return state;

        case 'USER_CHANGE':
            state.uid = action.uid;
            if (action.messages)
                state.list = action.messages;
            return state;

        default:
            return state;
    }
}