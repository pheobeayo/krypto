/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { KryptoContext } from "../../context/KryptoContext.jsx";
import hero_bg from "../../assets/svg/hero_bg.svg";
import { Button, ActionIcon } from "@mantine/core";
import { Link } from "react-router-dom";
import hero_img from "../../assets/svg/hero_img.svg";
import how_img from "../../assets/svg/Figure.svg";
import { HiGift, HiShieldCheck } from "react-icons/hi2";
// import { Link } from "react-router-dom";
function Home() {
  const { address, connectMetaMask } = useContext(KryptoContext);

  return (
    <>
      <div className="top_bar">
        <a href="" className="logo">
          Krypto
        </a>
        <ul>
          <li>
            <a href="">Network</a>
          </li>
          <li>
            <a href="">Community</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
        {
          !address?<Button onClick={connectMetaMask} color="violet.5">Connect Wallet</Button>:`${address.slice(0, 5)}...${address.slice(38)}`
        }
        
      </div>

      <section className="hero">
        <img className="hero_bg" src={hero_bg} alt="" />
        <div className="content">
          <div className="text">
            <h1>Hedera Staking: Secure, Scalable, and Rewarding</h1>
            {/* <h1>Stake with Hedera: Embrace the Consensus, Reap the Rewards</h1> */}
            {/* <h1>Stake, Earn, and Grow with Hedera: Join the Staking Revolution</h1> */}
            {/* <h1>Krypto Staking, Trusted staking platform for the masses </h1> */}
            <p>Simplified and secure participation in staking</p>
            {!address ? (
              <Button size="lg" onClick={connectMetaMask}>
                Connect Wallet
              </Button>
            ) : (
              <Link className="stake-link" to={"/stake"}>
                Start Staking
              </Link>
            )}
          </div>
          <div className="img_container">
            <img src={hero_img} alt="" className="hero_img" />
          </div>
        </div>
      </section>
      <section className="how">
        <h1 className="heading">How it Works</h1>
        <div className="container">
          <div className="content">
            <div className="card">
              <div className="num">1</div>
              <p>
                Connect your wallet to Krypto Staking by clicking on Get started
                or Connect wallet
              </p>
            </div>
            <div className="card">
              <div className="num">2</div>
              <p>Stake any amount of your token and receive daily rewards</p>
            </div>
            <div className="card">
              <div className="num">3</div>
              <p>You can buy, sell abd stake your coin any time</p>
            </div>
            <div className="card">
              <h1>Get started</h1>
            </div>
          </div>
          <div className="img_container">
            <img src={how_img} alt="" />
          </div>
        </div>
      </section>
      <section className="why">
        <h1 className="heading">Why We Are The Best</h1>
        <div className="container">
          <div className="content">
            <div className="card">
              <ActionIcon
                radius={8}
                mb={10}
                size={60}
                variant="subtle"
                color="violet.5"
              >
                <HiShieldCheck size={30} />
              </ActionIcon>
              <h2>Safe and Secure</h2>
              <p>
                We understand the importance of creating a reliable and secure
                environment for you to make investments.
              </p>
            </div>
            <div className="card">
              <ActionIcon
                radius={8}
                mb={10}
                size={60}
                variant="subtle"
                color="violet.5"
              >
                <HiGift size={30} />
              </ActionIcon>
              <h2>Easy Transaction</h2>
              <p>
                We understand the importance of creating a reliable and secure
                environment for you to make investments.
              </p>
            </div>
            <div className="card">
              <ActionIcon
                radius={8}
                mb={10}
                size={60}
                variant="subtle"
                color="violet.5"
              >
                <HiGift size={30} />
              </ActionIcon>
              <h2>Reward and Bonus</h2>
              <p>
                We understand the importance of creating a reliable and secure
                environment for you to make investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="subscribe">
        <h1 className="heading">Subscribe to our mailing list</h1>
        <p>Stay up to date with Lido developments</p>
        <div className="input_container">
          <input type="text" placeholder="Email address" />
          <Button>Subscribe</Button>
        </div>
        <p className="text">
          By subscribing you accept our <Link to={"#"}>Privacy Notice</Link>
        </p>
      </section>
    </>
  );
}

export default Home;
