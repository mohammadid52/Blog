export const blogReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      console.log("Blog Added");
      return state;
    case "ADD_BLOG_ERR":
      console.log("Error while adding blog");
      return state;
    default:
      return state;
  }
};
