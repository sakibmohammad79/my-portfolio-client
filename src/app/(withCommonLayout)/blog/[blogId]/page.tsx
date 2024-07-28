const Page = ({ params }: any) => {
  const { blogId } = params;
  console.log(blogId);
  return (
    <div>
      <h2>This is Page component</h2>
    </div>
  );
};

export default Page;
