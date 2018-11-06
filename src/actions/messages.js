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
        const auth = getState().auth
        if (auth) {
            const authid = auth.uid;
            const message = {
                uid: authid,
                text,
            }

            let url;
            if (authid > uid)
                url = authid + uid;
            else
                url = uid + authid;

            return database.ref(`messages/${url}`).push(message);
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

        return database.ref(`messages/${url}`).once('value', (msgSnapshot) => {
            if (msgSnapshot.val()) {
                let mess = [];
                msgSnapshot.forEach((childSnapshot) => {
                    mess.push(childSnapshot.toJSON());
                })
                dispatch(userChange(uid, mess));
                console.log(getState().messages)
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

        let messRef = database.ref(`messages/${url}`);

        messRef.on('child_added', function (msgSnapshot) {
            let mess = [];
            msgSnapshot.forEach((childSnapshot) => {
                mess.push(childSnapshot.toJSON());
            })

            console.log(mess);
            dispatch(messageChange(mess))
        })
    }
}