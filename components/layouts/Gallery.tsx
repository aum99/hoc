"use client"; // Needed for Next.js app router (if using /app directory)
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import { GradientFloating } from "./GradientFloating";

const videos = {
  productAnimation: [
    {
      id: 1,
      src: "dior.mp4",
      thumbnail: "/vt1.png",
    },
    {
      id: 2,
      src: "/ONEPLUS.mp4",
      thumbnail: "/vt5.png",
    },
    {
      id: 3,
      src: "blizer.mp4",
      thumbnail: "/vt3.png",
    },
  ],
  videoEditing: [
    {
      id: 1,
      src: "/BYD.mp4",
      thumbnail: "/vt6.png",
    },
    {
      id: 2,
      src: "/1.mp4",
      thumbnail: "/1.png",
    },
    {
      id: 3,
      src: "/2.mp4",
      thumbnail: "/2.png",
    },
  ],
  cgi: [
    {
      id: 1,
      src: "/WATCH.mp4",
      thumbnail: "/watch.png",
    },
    {
      id: 2,
      src: "/uber-eats.mp4",
      thumbnail: "/uber-eats.png",
    },
    {
      id: 3,
      src: "/keventers.mp4",
      thumbnail: "/keventers.png",
    },
  ],
};

interface Video {
  id: number;
  src: string;
  thumbnail: string;
}

const VideoCard = ({ video }: { video: Video }) => {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      className="relative w-full h-64 overflow-hidden rounded-xl cursor-pointer"
      whileHover={{ scale: 1.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail (Black & White) */}
      <img
        src={video.thumbnail}
        alt="Thumbnail"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
          hovered ? "opacity-0" : "opacity-100 grayscale"
        }`}
        style={{ zIndex: hovered ? 0 : 10 }} // Keep thumbnail above the video until hover
      />

      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={video.src}
        muted
        loop
        playsInline
      />
    </motion.div>
  );
};

const Gallery = () => {
  return (
    <div className="bg-black text-white p-20 h-fit">
      <Container>
        <GradientFloating>
          <h1 className="text-6xl font-bold text-center ">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-red-500 text-transparent bg-clip-text font-bold">
              work
            </span>{" "}
            in motion
          </h1>

          {/* Commercial Section */}
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">3D CGI</h2>
              <a href="#" className="text-lg font-semibold underline">
                View All
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {videos.cgi.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Product Animation</h2>
              <a href="#" className="text-lg font-semibold underline">
                View All
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {videos.productAnimation.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Video Editing</h2>
              <a href="#" className="text-lg font-semibold underline">
                View All
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {videos.videoEditing.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </GradientFloating>
      </Container>
    </div>
  );
};

export default Gallery;
