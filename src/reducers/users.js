const defaultState = [];

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'USERS_LIST':
            state = action.users;
            return [...state]
        default:
            return state;
    }
}