import WelcomeUser from "../components/welcomeuser";
import TransactionsBtn from "../components/transactionsBtn";
import AccountContent from "../components/accountcontent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../store/userSliceDeux";
import { userProfile } from "../api/userApi";

export default function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("userToken");
    if (!token) {
      navigate("/signin");
    }
    const userProfil = async () => {
      const result = await userProfile(token);
      if (result.success) {
        dispatch(loginSuccess(result.data));
      }
    };
    userProfil();
  }, [dispatch, navigate]);
  return (
    <main className="main bg-dark">
      <WelcomeUser
        FirstName={user?.user?.firstName}
        LastName={user?.user?.lastName}
      />
      <section className="account">
        <AccountContent />
        <TransactionsBtn />
      </section>
      <section className="account">
        <AccountContent />
        <TransactionsBtn />
      </section>
      <section className="account">
        <AccountContent />
        <TransactionsBtn />
      </section>
    </main>
  );
}
