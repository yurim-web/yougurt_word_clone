import Link from "next/link";

const Header = () => {
  const css = {
    fontWeight: 700,
    fontSize: "20px",
  };
  const boxcss = {
    backgroundColor: "#F7EED3",
    width: "100vw",
  };
  return (
    <header style={boxcss}>
      <nav
        style={{
          padding: "20px",
          display: "flex",
          alianItems: "center",
          justifyContent: "space-between",
          maxWidth: "1040px",
          margin: "0 auto",
        }}
      >
        <span style={css}>☕IT COFFEE☕</span>
        <div style={{ display: "flex", gap: "30px", fontWeight: 700 }}>
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
