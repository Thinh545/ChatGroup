export const usersList = (list) => ({
    type: 'USERS_LIST',
    users: list,
})

export const startUsersList = () => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        let list = [];
        return firebase.database().ref('users').on("value", function (snapshot) {
            let list = [];
            snapshot.forEach((childSnapshot) => {
                list.push(childSnapshot.toJSON())
            });
            return dispatch(usersList(list));
        })
    }
}