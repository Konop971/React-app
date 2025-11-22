import { useDispatch, useSelector } from "react-redux";
import LikeCounter from "../../components/LikeCounter/LikeCounter";
import "./Posts.css";
import { useEffect } from "react";
import { fetchPosts } from "../../Store/postsSlice";

function Posts() {
  const dispatch = useDispatch();
  const { posts, error, status } = useSelector((state) => state.posts);
  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);
  return (
    <>
      <article>
        <h1>Latest Posts</h1>
        <div className="posts">
          {status == "loading" && <p>Ładowanie...</p>}
          {status == "failed" && <p>Błąd: {error}</p>}
          {status == "succeeded" &&
            posts.map((post) => (
              <LikeCounter
                title={post.title}
                description={post.body}
                count="5"
                bgcolor=""
                key={post.id}
              ></LikeCounter>
            ))}
        </div>
      </article>
      <div className="duuzy"></div>
    </>
  );
}

export default Posts;
