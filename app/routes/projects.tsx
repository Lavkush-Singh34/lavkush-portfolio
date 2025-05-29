// app/routes/projects.tsx
import type { Route } from "./+types/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects - Your Portfolio" },
    { name: "description", content: "Check out my latest projects and work." },
  ];
}

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <p className="text-lg text-muted-foreground">
        Projects showcase coming soon!
      </p>
    </div>
  );
}