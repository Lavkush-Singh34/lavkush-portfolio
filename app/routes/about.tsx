// app/routes/about.tsx
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Your Portfolio" },
    { name: "description", content: "Learn more about me and my experience." },
  ];
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <p className="text-lg text-muted-foreground">
        This is the about page. Coming soon!
      </p>
    </div>
  );
}