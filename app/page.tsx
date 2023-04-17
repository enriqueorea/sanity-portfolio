import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="font-extrabold text-7xl">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-700 bg-clip-text text-transparent">
          Enrique
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Hi! everyone welcome to my projects!
      </p>
      <h2 className="mt-24 px-4 lg:px-0 font-bold text-gray-700 text-3xl">
        My Projects
      </h2>
      <div className="mt-5 px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition ease-in-out">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            className="border border-gray-500 rounded-lg p-1 flex flex-col gap-4"
            key={project._id}
          >
            {project.image && (
              <Image
                width={750}
                height={100}
                className="object-cover rounded-lg border border-gray-500"
                src={project.image}
                alt={project.alt}
              />
            )}
            <div>
              <h3 className="font-extrabold text-xl bg-gradient-to-r from-orange-400 via-red-500 to-purple-700 bg-clip-text text-transparent">
                {project.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
