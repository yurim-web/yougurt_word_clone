import Link from "next/link";

const Header = () => {
  const boxcss = {
    backgroundColor: "#f3f8fe",
    width: "100vw",
  };
  const navcss = {
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1040px",
    margin: "0 auto",
  };

  const btncss = {
    backgroundColor: "#0064de",
    border: "none",
    borderRadius: "50px",
    color: "white",
    padding: "5px 15px",
    marginRight: "5px",
  };
  return (
    <header style={boxcss}>
      <nav style={navcss}>
        <Link href="/">
          <img
            style={{ width: "150px" }}
            src="https://www.yogurtworld.co.kr/images/header_logo.png"
            alt=""
          />
        </Link>
        <div
          style={{
            display: "flex",
            gap: "30px",
            fontWeight: 500,
          }}
        >
          <Link href="/menu">
            <span>MENU</span>
          </Link>
          <Link href="/brand">
            <span>BRAND</span>
          </Link>
          <Link href="/franchise">
            <span>FRANCHISE</span>
          </Link>
          <Link href="/store">
            <span>STORE</span>
          </Link>
          <Link href="/news">
            <span>NEWS</span>
          </Link>
          <Link href="/goods">
            <span>Goods</span>
          </Link>
        </div>
        <div>
          <button style={btncss}>점주님 공간</button>
          <button style={btncss}>가맹 문의</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
