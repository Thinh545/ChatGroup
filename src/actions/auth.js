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
      firebase.database().ref(`users/${user.uid}/active`).set(true)
    });
  };

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () =>
  (dispatch, getState, getFirebase) => {
    const auth = getState().auth;
    const database = getFirebase().database();

    database.ref(`users/${auth.uid}/active`).set(false)
    database.ref(`users/${auth.uid}/lastTime`).set(dateformat(Date(), "yyyy/dd/mm HH:MM"))
    return getFirebase().auth().signOut();
  };
