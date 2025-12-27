"use client";

import Link from "next/link";
import Image from "next/image";

const projects = [
  { name: "Mancherial", slug: "mancherial", thumbnail: "/projects/team.jpeg" },
  { name: "Karimnagar", slug: "karimnagar", thumbnail: "/projects/plan.jpeg" },
  { name: "Chennur", slug: "chennur", thumbnail: "/projects/bolt.png" },
  { name: "Nizamabad", slug: "nizamabad", thumbnail: "/projects/lift.jpeg" },
  { name: "Hyderabad", slug: "hyderabad", thumbnail: "/projects/finish.jpeg" },
  { name: "Bellampalli", slug: "bellampalli", thumbnail: "/projects/civil.jpeg" },
  { name: "Metpalli", slug: "metpalli", thumbnail: "/projects/inverter.jpeg" },
  { name: "Mandamarri", slug: "mandamarri", thumbnail: "/projects/earthing.jpeg" },
];

export default function ProjectsPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Our Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block rounded shadow hover:shadow-lg transition"
          >
            
            <div className="relative w-full h-48">
              <Image
                src={project.thumbnail}
                alt={project.name}
                fill
                className="object-cover rounded-t"
              />
            </div>

            
            <div className="p-2 bg-white rounded-b text-center">
              <h2 className="text-md font-semibold text-black">
                {project.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
