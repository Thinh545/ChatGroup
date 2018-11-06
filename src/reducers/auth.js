export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
        displayName: action.name,
        avatarUrl: action.photo
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
