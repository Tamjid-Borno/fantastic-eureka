export async function getStaticProps() {
    const res = await fetch('http://localhost:8000/api/projects/');
    const projects = await res.json();
  
    return {
      props: { projects },
    };
  }
  
  export default function Projects({ projects }) {
    return (
      <div>
        <h1>Projects</h1>
        {projects.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    );
  }
  