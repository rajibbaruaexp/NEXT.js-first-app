import headerStyle from "../styles/Header.module.css";
import Head from "next/head";
const Header = () => {
  return (
    <div className={headerStyle.title}>
    <Head>
      <title>My first next project</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <h2>
        <span>scriptify</span>IN
      </h2>
      <p className={headerStyle.description}>
        This is the first next js project of mine and its pretty interesting to
        learn NEXTjs
      </p>
    </div>
  );
};

export default Header;
