import WelcomeUser from "../components/welcomeuser";
import TransactionsBtn from "../components/transactionsBtn";
import AccountContent from "../components/accountcontent";
import { useEffect } from "react";
import { createPath, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../store/userSliceDeux";

export default function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("userToken");
    console.log(token);
    if (!token) {
      navigate("/signin");
    }
    const profile = userProfile(token);
    console.log(profile);
  }, []);

  const userProfile = async (token) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        console.log(data);
        dispatch(loginSuccess(data.body));
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
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
