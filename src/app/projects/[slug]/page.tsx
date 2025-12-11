"use client";

import { useState } from "react";
import { use } from "react"; // 👈 import use() from React
import Image from "next/image";

interface ProjectImages {
  [key: string]: string[];
}

const projectImages: ProjectImages = {
  karimnagar: ["/pvp/VENKATADRI.png", "/pvp/SATHAIAH.png","/pvp/SATHAIAH.png","/pvp/Sathish.png"],
  chennur: ["/pvp/SAMBAIAH.png", "/pvp/MAHENDER.png"],
  bellampalli: ["/pvp/Sampath.png", "/pvp/sadanandam.png","/pvp/PRABHAKAR.png","/pvp/MALLAIAH.png"],
  nizamabad: ["/pvp/ANURADHA.png", ],
  hyderabad: ["/pvp/DHANUNJAYA.png", ],
  metpalli: ["/pvp/HIMAVARSHA.png", ],
  mandamarri: ["/pvp/SWAPNARANI.png", ],
  mancherial: ["/pvp/CHANDRASHEKAR.png", "/pvp/LAXMINARAYANA.png","/pvp/RajKumar.png","/pvp/RAJABABU.png","/pvp/RAJAIAH.png","/pvp/RAJENDERALISETTI.png","/pvp/RAVINDERBANDI.png","/pvp/SHANKARM.png","/pvp/SHANKAR.png", "/pvp/SRINIVASb2.png","/pvp/SRINIVASb1.png","/pvp/SURESH.png","/pvp/SWAPNARAMULA.png","/pvp/VENKATARAMANA.png","/pvp/MALLESHTHOTA.png"],



};

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params); // 👈 unwrap params

  const images = projectImages[slug.toLowerCase()] || [];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="p-25">
      <h1 className="text-2xl font-bold mb-4 capitalize">{slug} Project</h1>

      {images.length === 0 ? (
        <p>No images found for this project.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 " >
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-90 cursor-pointer  "
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`${slug} project image ${index + 1}`}
                fill
                className="object-fill rounded shadow "
              />
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90%] max-w-4xl h-[80%]">
            <Image
              src={selectedImage}
              alt="Full project image"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 px-3 py-1 rounded"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
