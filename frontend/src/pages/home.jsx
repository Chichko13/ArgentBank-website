import Hero from "../components/hero";
import Feature from "../components/features";
import chatIcon from "../assets/img/icon-chat.png";
import Moneyicon from "../assets/img/icon-money.png";
import Securityicon from "../assets/img/icon-security.png";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature
          img={chatIcon}
          alt={"Chat Icon"}
          title={"You are our #1 priority"}
          text={
            "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          }
        />
        <Feature
          img={Moneyicon}
          alt={"Money Icon"}
          title={"More savings means higher rates"}
          text={
            "The more you save with us, the higher your interest rate will be!"
          }
        />
        <Feature
          img={Securityicon}
          alt={"Security Icon"}
          title={"Security you can trust"}
          text={
            "We use top of the line encryption to make sure your data and money is always safe."
          }
        />
      </section>
    </main>
  );
}
