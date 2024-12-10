const Goodscard = (props) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "400px",
        height: "300px",
        padding: "20px",
      }}
    >
      <img style={{ width: "200px", height: "200px" }} src={props.img} alt="" />
      <h1 style={{ fontWeight: 700, fontSize: "20px" }}>{props.title}</h1>
      <p>{props.price}$</p>
    </div>
  );
};

export default Goodscard;
