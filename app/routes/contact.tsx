// app/routes/contact.tsx
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - Your Portfolio" },
    { name: "description", content: "Get in touch with me." },
  ];
}

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <p className="text-lg text-muted-foreground">
        Contact form coming soon!
      </p>
    </div>
  );
}