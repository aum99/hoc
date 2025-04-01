"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface CrewCardProps {
  defaultImage: string;
  funkyImage: string;
  name: string;
  color: string;
}

export const CrewCard = ({
  defaultImage,
  funkyImage,
  name,
  color,
}: CrewCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Optional: Map Tailwind color classes to ensure they work dynamically
  const borderColorClass = `border-${color}`;

  return (
    <div
      className={cn(
        "relative my-3 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 border-20 bg-white",
        isHovered ? borderColorClass : "border-gray-300"
      )}
      style={{ width: "380px", height: "400px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full h-full overflow-hidden">
        {/* Default Image */}
        <Image
          src={defaultImage}
          alt={`${name} default`}
          layout="fill"
          objectFit="cover"
          className={cn(
            "transition-opacity duration-300 ease-in-out",
            isHovered ? "opacity-0" : "opacity-100"
          )}
        />
        {/* Funky Image */}
        <Image
          src={funkyImage}
          alt={`${name} funky`}
          layout="fill"
          objectFit="cover"
          className={cn(
            "transition-opacity duration-300 ease-in-out",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
      {/* Name Label - Shown only on hover */}
      {isHovered && (
        <div className="absolute top-85 left-1/2 transform -translate-x-1/2">
          <div className={cn(`px-6 py-3 rounded-full bg-${color}`)}>
            <span className="text-white text-2xl font-semibold">{name}</span>
          </div>
        </div>
      )}
    </div>
  );
};
