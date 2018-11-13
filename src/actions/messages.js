export const messageChange = (mess) => ({
    type: 'MESSAGES_CHANGE',
    mess: mess,
})

export const userChange = (user, list) => ({
    type: 'USER_CHANGE',
    user: user,
    list: list,
})

export const changeStar = (star) => ({
    type: 'STAR_CHANGE',
    star: star,
})

export const sendMessage = (uid, text, img) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        const storageRef = firebase.storage().ref();
        const auth = getState().auth

        let message = {
            uid: auth.uid,
            text,
            media: [],
        }

        if (auth) {
            let url;
            if (auth.uid > uid)
                url = auth.uid + uid;
            else
                url = uid + auth.uid;

            if (img.length > 0) {
                let metadata = {
                    contentType: 'image/jpeg'
                };
                let arrPromiseLink = img.map((img) => {
                    let now = new Date()
                    return (new Promise(function (resolve, reject) {
                        storageRef.child(`images/${now.getTime()}${img.name}`).put(img, metadata)
                            .then((snapshot) => {
                                snapshot.ref.getDownloadURL().then((downloadURL) => {
                                    resolve(downloadURL)
                                });
                            })
                    })
                    )
                })
                Promise.all(arrPromiseLink).then((res) => {
                    res.forEach((downloadURL) => {
                        message.media = [...message.media, downloadURL]
                    })
                    Promise.all(message.media).then((res) => {
                        let ref = firebase.database().ref(`messages/${url}`).push(message)
                    })
                })
            }
            else {
                firebase.database().ref(`messages/${url}`).push(message)
            }
        }

        firebase.database().ref(`users/${auth.uid}/stat/${uid}/lastTime`).set(Date.now());
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

            dispatch(getStar(user.uid));
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

export const getStar = (uid) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        const auth = getState().auth

        return  firebase.database().ref(`users/${auth.uid}/stat/${uid}/star`).once('value', (snapshot) => {
                if(snapshot.val())
                    dispatch(changeStar(snapshot.val()))
        })
    }
}