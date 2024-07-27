const Blog = async () => {
  const res = await fetch("http://localhost:5000/api/v1/blog", {
    next: {
      revalidate: 30,
    },
  });
  const { data: blogs } = await res.json();
  console.log(blogs);
  return (
    <div>
      <h2>This is Blog component</h2>
    </div>
  );
};

export default Blog;
