const Project = async () => {
  const res = await fetch("http://localhost:5000/api/v1/project", {
    next: {
      revalidate: 30,
    },
  });
  const { data: projects } = await res.json();
  console.log(projects);
  return (
    <div>
      <h2>This is Project component</h2>
    </div>
  );
};

export default Project;
