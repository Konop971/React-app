import { NavLink, Link, useLocation } from "react-router";
import "./Nav.css";
function Nav() {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const navLinks = [
    {
      path: "/posts",
      name: "POSTY",
    },
    {
      path: "/DashBoard",
      name: "DASHBOARD",
    },
    {
      path: "/login",
      name: "LOGIN",
    },
  ];

  return isLogin ? null : (
    <nav>
      <span>LOGO</span>
      <div className="links">
        <NavLink
          to="/posts"
          className={({ isActive }) =>
            isActive ? "text-yellow font-bold" : "text-gray"
          }
        >
          POSTY
        </NavLink>
        <NavLink
          to="/DashBoard"
          className={({ isActive }) =>
            isActive ? "text-yellow font-bold" : "text-gray"
          }
        >
          DashBoard
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-yellow font-bold" : "text-gray"
          }
        >
          Login
        </NavLink>
        <a href="https://wp.pl">WP.PL</a>
      </div>
    </nav>
  );
}
export default Nav;
