export default function ProjectCard({ project }) {
    return (
      <div className="border p-4 rounded-lg">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p>{project.description}</p>
      </div>
    );
  }
  