import Menu from "@/components/Menu";

const Page = async ({ params }) => {
  const data = await fetch("https://api.sampleapis.com/coffee/hot").then(
    (response) => response.json()
  );
  const { id } = params;
  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Menu img={data[id].image} menuname={data[id].title} />
    </div>
  );
};

export default Page;
