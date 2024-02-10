import WelcomeUser from "../components/welcomeuser";
import TransactionsBtn from "../components/transactionsBtn";
import AccountContent from "../components/accountcontent";
export default function User() {
  return (
    <main className="main bg-dark">
      <WelcomeUser FirstName="jim" LastName="bo" />
      <h2 className="sr-only">Accounts</h2>
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
