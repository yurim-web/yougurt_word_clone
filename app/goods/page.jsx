import Menu from "@/components/Menu";
import Link from "next/link";

const Page = async () => {
  const data = await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((v) => v.products);

  return (
    <div
      style={{
        width: "100vw",
        maxWidth: "1000px",
        margin: "0 auto",
        display: "flex",
        gap: "10px",
      }}
    >
      {data.map((v, i) => (
        <Link key={i} href={`goods/${v.id}`}>
          <Menu menuname={v.title} img={v.thumbnail} />
        </Link>
      ))}
    </div>
  );
};

export default Page;
