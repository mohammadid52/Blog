export const addBlog = (blog) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("blogs")
      .add({
        ...blog,
        postedon: new Date(),
      })
      .then(() => {
        dispatch({ type: "ADD_BLOG", blog });
      })
      .catch((err) => {
        dispatch({ type: "ADD_BLOG_ERR", err });
      });
  };
};
