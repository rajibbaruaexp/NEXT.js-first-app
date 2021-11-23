import headerStyle from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={headerStyle.title}>
      <h1>
        <span>scriptify</span>IN
      </h1>
      <p className={headerStyle.description}>
        This is the first next js project of mine and its pretty interesting to
        learn NEXTjs
      </p>
    </div>
  );
};

export default Header;
