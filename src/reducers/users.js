const defaultState = [];

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'USERS_LIST':
            let tmp = [];
            if (action.users)
                tmp = action.users;
            return tmp;
        default:
            return state;
    }
}