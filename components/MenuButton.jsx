const MenuButton = (props) => {
  const menucss = {
    padding: "14px 17px",
    border: "1px solid #dddd",
    fontSize: "15px",
    fontWeight: "bold",

    flex: "1",
    borderRadius: props.radius,
    backgroundColor: props.selected ? "#2d3e50" : "white",
    color: props.selected ? "white" : "#2d3e50",
    transition: "background-color 0.3s ease",
  };

  return (
    <button onClick={props.click} style={menucss}>
      {props.menu}
    </button>
  );
};

export default MenuButton;
