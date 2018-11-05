import database, { firebase, authProvider as provider } from '../firebase/firebase';
import dateformat from 'dateformat'

export const login = (uid, name, photo) => ({
  type: 'LOGIN',
  uid,
  name,
  photo
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(provider).then((result) => {
      var token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const name = user.displayName ? user.displayName : user.email;
      database.ref(`users/${user.uid}`).once("value", function (data) {
        if (!data.val()) {
          database.ref(`users/${user.uid}`).set({
            uid: user.uid,
            name: name,
            photo: user.photoURL,
            active: true
          })
        } else {
          database.ref(`users/${user.uid}/active`).set(true)
        }
      })
    });
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    database.ref(`users/${firebase.auth().currentUser.uid}/active`).set(false)
    database.ref(`users/${firebase.auth().currentUser.uid}/lastTime`).set(dateformat(Date(), "yyyy/dd/mm HH:MM"))
    return firebase.auth().signOut();
  };
};
