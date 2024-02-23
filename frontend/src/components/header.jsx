import { NavLink } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.png";
import { useSelector, useDispatch } from "react-redux";
function Header() {
  const isLogin = useSelector((state) => state.user.isLogin);
  const user = useSelector((state) => state.user);
  const logout = () => {
    dispatch(logout());
  };
  return (
    <header>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          {isLogin ? (
            <>
              <NavLink to="/user" className="blabla">
                <i className="fa fa-user-circle"></i>
                {user?.user?.firstName}
              </NavLink>
              <NavLink to="/" className="main-nav-item" onClick={logout}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </NavLink>
            </>
          ) : (
            <NavLink to="/signin" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
