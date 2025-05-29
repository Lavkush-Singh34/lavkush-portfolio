// app/components/sections/Hero.tsx
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { personalInfo, skills } from "~/data/portfolio";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="container px-4 py-20 mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground"
            >
              {personalInfo.title}
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-lg"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {skills.slice(0, 6).map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4"
          >
            <Button size="lg" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full h-96 rounded-lg bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
            <img
              src={personalInfo.avatar}
              alt="Developer avatar"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
