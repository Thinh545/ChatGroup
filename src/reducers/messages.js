import moment from 'moment'
import { stat } from 'fs';

const defaultState = {
    uid: null,
    list: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'MESSAGES_CHANGE':
            if (action.list)
                state.list = action.list
            return state;

        case 'USER_CHANGE':
            state.uid = action.uid;
            if (action.list)
                state.list = action.list;
            return state;

        default:
            return state;
    }
}