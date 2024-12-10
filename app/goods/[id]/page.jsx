import Goodscard from "@/components/Goodscard";

const Page = async ({ params }) => {
  const { id } = await params;
  const data = await fetch(`https://dummyjson.com/products/${id}`).then((res) =>
    res.json()
  );

  return (
    <div>
      <Goodscard title={data.title} img={data.thumbnail} price={data.price} />
    </div>
  );
};

export default Page;
