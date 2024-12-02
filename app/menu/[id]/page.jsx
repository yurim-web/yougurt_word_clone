const Page = ({ params }) => {
  const { id } = params;
  return <div>메뉴! {id}</div>;
};

export default Page;
