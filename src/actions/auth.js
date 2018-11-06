import dateformat from 'dateformat'

export const login = (uid, name, photo) => ({
  type: 'LOGIN',
  uid,
  name,
  photo
});

export const startLogin = () =>
  (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    return firebase.login({ provider: 'google', type: 'popup' }).then((result) => {
      // The signed-in user info.
      const user = result.user;
      firebase.database().ref(`users/${user.uid}/uid`).set(user.uid)
    });
  };

export const startOnline = () =>
  (dispatch, getState, getFirebase) => {
    getFirebase().database().ref(`users/${getState().auth.uid}`).update({ active: true })
    getFirebase().database().ref(`users/${getState().auth.uid}`).onDisconnect().update({
      active: false,
      lastTime: dateformat(Date(), "yyyy/dd/mm HH:MM"),
    })
  }

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () =>
  (dispatch, getState, getFirebase) => {
    const auth = getState().auth;
    const database = getFirebase().database();

    database.ref(`users/${auth.uid}`).update({
      active: false,
      lastTime: dateformat(Date(), "yyyy/dd/mm HH:MM"),
    })
    return getFirebase().auth().signOut();
  };
