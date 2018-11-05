import database, { firebase } from '../firebase/firebase';
import moment from 'moment'

export const messageChange = (list) => ({
    type: 'MESSAGES_CHANGE',
    list: list,
})

export const userChange = (uid, list) => ({
    type: 'USER_CHANGE',
    uid: uid,
    list: list,
})

export const sendMessage = (uid, text) => {
    return (dispatch, getState) => {
        console.log(text);
        const auth = firebase.auth().currentUser;
        if (auth) {
            const authid = auth.uid;
            const displayName = auth.displayName;
            const message = {
                sender: { authid, displayName },
                text,
                time: Date.now(),
            }

            let url;
            if (authid > uid)
                url = authid + uid;
            else
                url = uid + authid;

            database.ref(`messages/${url}`).push(message);
        }
    }
}

export const startUserChange = (uid) => {
    return (dispatch, getState) => {
        const auth = firebase.auth().currentUser;
        let url;
        if (auth.uid > uid)
            url = auth.uid + uid;
        else
            url = uid + auth.uid;

        database.ref(`messages/${url}`).once('value', (msgSnapshot) => {
            if (msgSnapshot.val()) {
                let mess = [];
                msgSnapshot.forEach((childSnapshot) => {
                    mess.push(childSnapshot.toJSON());
                })

                dispatch(userChange(uid, mess));
            } else {
                dispatch(userChange(uid, []))
            }
        })
    }
}

export const startListening = (uid) => {
    return (dispatch, getState) => {
        const auth = getState().auth;

        let url;
        if (auth.uid > uid)
            url = auth.uid + uid;
        else
            url = uid + auth.uid;

        return database.ref(`messages/${url}`).on('child_added', (msgSnapshot) => {
            if (getState().message.uid === uid) {
                let mess = [];
                msgSnapshot.forEach((childSnapshot) => {
                    mess.push(childSnapshot.toJSON());
                })

                dispatch(messageChange(mess))
            }
        })
    }
}