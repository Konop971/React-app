import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Posts from "./pages/posts/Posts";
import Login from "./pages/login/login";
import PostDetail from "./pages/PostDetail/PostDetail";
import Nav from "./components/Nav/Nav";
import DashBoard from "./pages/DashBoard/DashBoard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Posts />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/posts/:id" element={<PostDetail />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/DashBoard" element={<DashBoard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
