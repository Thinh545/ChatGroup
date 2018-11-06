export const messageChange = (mess) => ({
    type: 'MESSAGES_CHANGE',
    mess: mess,
})

export const userChange = (user, list) => ({
    type: 'USER_CHANGE',
    user: user,
    list: list,
})

export const sendMessage = (uid, text) => {
    return (dispatch, getState, getFirebase) => {
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

            return getFirebase().database().ref(`messages/${url}`).push(message);
        }
    }
}

export const startUserChange = (user) => {
    return (dispatch, getState, getFirebase) => {
        if (getState().messages.user) {
            dispatch(endListening(getState().messages.user.uid))
        }

        const firebase = getFirebase();
        const auth = getState().auth;
        let url;
        if (auth.uid > user.uid)
            url = auth.uid + user.uid;
        else
            url = user.uid + auth.uid;

        return firebase.database().ref(`messages/${url}`).once('value', (msgSnapshot) => {
            if (msgSnapshot.val()) {
                let mess = [];
                msgSnapshot.forEach((childSnapshot) => {
                    mess.push(childSnapshot.toJSON());
                })

                mess.pop();
                dispatch(userChange(user, mess));
            } else {
                dispatch(userChange(user, []))
            }

            dispatch(startListening(user.uid));
        })
    }
}

export const startListening = (uid) => {
    return (dispatch, getState, getFirebase) => {
        const auth = getState().auth;
        const firebase = getFirebase();

        let url;
        if (auth.uid > uid)
            url = auth.uid + uid;
        else
            url = uid + auth.uid;

        let messRef = firebase.database().ref(`messages/${url}`);

        messRef.limitToLast(1).on('child_added', function (msgSnapshot) {
            dispatch(messageChange(msgSnapshot.toJSON()))
        })
    }
}

export const endListening = (uid) => {
    return (dispatch, getState, getFirebase) => {
        const auth = getState().auth;
        const firebase = getFirebase();

        let url;
        if (auth.uid > uid)
            url = auth.uid + uid;
        else
            url = uid + auth.uid;

        firebase.database().ref(`messages/${url}`).off();
    }
}