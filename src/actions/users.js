export const usersList = (list) => ({
    type: 'USERS_LIST',
    users: list,
})

export const startUsersList = () => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        const auth = getState().auth;

        return firebase.database().ref('users').on("value", function (snapshot) {
            let list = [];
            snapshot.forEach((childSnapshot) => {
                list.push(childSnapshot.toJSON())
            });

            const authStat = list.find(obj => obj.uid === auth.uid);
            list = list.sort((b, a) => {
                if (authStat && authStat.stat) {
                    const astat = authStat.stat[`${a.uid}`]
                    const bstat = authStat.stat[`${b.uid}`]

                    if ((b.active !== true && a.active === true) ||
                        (b.active === true && a.active !== true)) {
                        return (b.active !== true) ? 1 : -1
                    } else if (astat && bstat) {
                        if (astat.lastTime && bstat.lastTime) {
                            return ((astat.star === true ? 6 : 1) * (astat.lastTime) -
                                (bstat.star === true ? 6 : 1) * (bstat.lastTime))
                        }
                        else if (!astat.lastTime && bstat.lastTime) {
                            return -1
                        }
                        else if (astat.lastTime && !bstat.lastTime) {
                            return 1
                        }
                        else {
                            return (astat.star === true ? 6 : 1) - (bstat.star === true ? 6 : 1)
                        }
                    } else if (!astat || !bstat) {
                        return !bstat ? 1 : -1
                    } else {
                        return 1
                    }
                } else {
                    if ((b.active !== true && a.active === true) ||
                        (b.active === true && a.active !== true)) {
                        return (b.active !== true) ? 1 : -1
                    }
                }
            })

            return dispatch(usersList(list));
        })
    }
}

export const onStarClick = (uid, status) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        const auth = getState().auth;
        firebase.database().ref(`users/${auth.uid}/stat/${uid}/star`).set(status);
    }
}