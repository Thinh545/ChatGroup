import database from '../firebase/firebase';

export const usersList = (list) => ({
    type: 'USERS_LIST',
    users: list,
})

export const startUsersList = () => {
    return (dispatch, getState) => {
        let list = [];
        return database.ref('users').once("value", function (snapshot) {
            snapshot.forEach((childSnapshot) => {
                list.push(childSnapshot.toJSON())    
            });
            return dispatch(usersList(list));
        })
    }
}