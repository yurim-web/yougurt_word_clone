const Menu = (props) => {
  return (
    <div
      style={{ textAlign: "center", fontWeight: "bold", paddingTop: "40px" }}
    >
      <img
        style={{
          objectFit: "contain",
          border: "2px solid #dddd",
          width: "100%",
          marginBottom: "8px",
        }}
        src={props.img}
      />

      <span>{props.menuname}</span>
    </div>
  );
};

export default Menu;
