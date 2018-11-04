import database from '../firebase/firebase';

export const usersList = (list) => ({
    type: 'USERS_LIST',
    users: list,
})

export const startUsersList = () => {
    return (dispatch, getState) => {
        let list = [];
        database.ref('users').once("value", function (snapshot) {
            snapshot.forEach((childSnapshot) => {
                list.push(childSnapshot.toJSON())    
            });
            dispatch(usersList(list));
        })
    }
}