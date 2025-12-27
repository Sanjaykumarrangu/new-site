





"use client";

import { useState } from "react";
import { use } from "react";
import Image from "next/image";

interface ProjectImages {
  [key: string]: string[];
}

const projectImages: ProjectImages = {
  karimnagar: ["/pvp/VENKATADRI.png", "/pvp/SATHAIAH.png","/pvp/SHASHIKALA.png","/pvp/Sathish.png"],
  chennur: ["/pvp/SAMBAIAH.png", "/pvp/MAHENDER.png"],
  bellampalli: ["/pvp/Sampath.png", "/pvp/sadanandam.png","/pvp/PRABHAKAR.png","/pvp/MALLAIAH.png"],
  nizamabad: ["/pvp/ANURADHA.png"],
  hyderabad: ["/pvp/DHANUNJAYA.png" ,"/pvp/oraju.png"],
  metpalli: ["/pvp/HIMAVARSHA.png"],
  mandamarri: ["/pvp/SWAPNARANI.png"],
  mancherial: ["/pvp/CHANDRASHEKAR.png", "/pvp/LAXMINARAYANA.png","/pvp/RajKumar.png","/pvp/SWAPNARAMULA.png","/pvp/SURESH.png","/pvp/SRINIVASb1.png","/pvp/SRINIVASb2.png","/pvp/SHANKAR.png","/pvp/SHANKARM.png","/pvp/VENKATARAMANA.png","/pvp/RAVINDERBANDI.png","/pvp/RAJENDERALISETTI.png","/pvp/RAJABABU.png","/pvp/MALLESHTHOTA.png","/pvp/RAJAIAH.png",],
};

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const images = projectImages[slug.toLowerCase()] || [];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
<div className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory scroll-pt-20">
      
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 bg-black/60 text-white px-4 py-2 rounded">
        {slug.toUpperCase()} PROJECT
      </div>

      {images.length === 0 ? (
        <div className="h-screen flex items-center justify-center">
          <p>No images found for this project.</p>
        </div>
      ) : (
        images.map((src, index) => (
          <section
  key={index}
  className="relative h-screen w-screen snap-start flex items-center justify-center bg-black"
  onClick={() => setSelectedImage(src)}
>
  {/* FIXED FRAME */}
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-full h-full md:w-[900px] md:h-[520px]">
      <Image
        src={src}
        alt={`${slug} project image ${index + 1}`}
        fill
        className="object-contain"
        priority={index === 0}
      />
    </div>
  </div>
</section>

        ))
      )}

      
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="Full image"
            fill
            className="object-contain "
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl bg-black/60 px-3 py-1 rounded"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
