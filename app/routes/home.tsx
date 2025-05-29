// app/routes/home.tsx
import { Hero } from "~/components/sections/Hero";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio - Your Name" },
    { name: "description", content: "Welcome to my portfolio website!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
    </div>
  );
}