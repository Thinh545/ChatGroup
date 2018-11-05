export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
        name: action.name,
        photo: action.photo
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
