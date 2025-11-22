import { configureStore } from "@reduxjs/toolkit";
import postRedecer from "./postsSlice";

export const store = configureStore({
  reducer: {
    posts: postRedecer,
  },
});
