import { Dribbble, Figma, Instagram, Linkedin } from "lucide-react";
import Container from "./Container";
import { CrewCard } from "./CrewCard";

const teamMembers = [
  {
    defaultImage: "/arya.png",
    funkyImage: "/arya1.png",
    alt: "Arya",
    color: "cyan-300",
  },
  {
    defaultImage: "/chirag.png",
    funkyImage: "/chirag1.png",
    alt: "Chirag",
    color: "rose-700",
  },
];

export const TeamSection = () => {
  return (
    <div className="bg-white text-black py-5">
      <div className="text-center py-10">
        <h1 className="text-6xl font-bold ">
          People who{" "}
          <span className="bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent">
            make it happen
          </span>
        </h1>
      </div>
      <Container>
        <div className="h-full w-full flex flex-col p-2">
          <div className="flex w-full items-center justify-between">
            <CrewCard
              defaultImage={teamMembers[0].defaultImage}
              funkyImage={teamMembers[0].funkyImage}
              name={teamMembers[0].alt}
              color={teamMembers[0].color}
            />
            <div className="w-full flex flex-col pl-10 gap-8">
              <h1 className="text-5xl font-bold">ARYA TANAWADE</h1>
              <p className="text-3xl font-bold">FOUNDER | CGI ARTIST</p>
              <p className="text-2xl font-sm">
                I'm a CGI artist who breathes life into digital worlds with
                stunning visuals and limitless imagination. From photorealistic
                renders to fantastical scenes, I craft stories one pixel at a
                time.
              </p>
              <div className="flex w-full gap-4 items-center">
                <Instagram size={50} />
                <Linkedin size={50} />
                <Dribbble size={50} />
                <Figma size={50} />
              </div>
            </div>
          </div>
          <span className="w-full border border-3 border-black my-6"></span>
          <div className="flex w-full items-center justify-between text-right">
            <div className="w-full flex flex-col pr-10 gap-8">
              <h1 className="text-5xl font-bold">CHIRAG BARDIA</h1>
              <p className="text-3xl font-bold">CO-FOUNDER | CINEMATOGRAPHER</p>
              <p className="text-2xl font-sm">
                I’m a passionate cinematographer who masterfully weaves emotion,
                light, and movement into every shot, capturing the beauty of
                fleeting moments with artistry and precision for a powerful,
                lasting impact.
              </p>
              <div className="flex w-full gap-4 justify-end">
                <Instagram size={50} />
                <Linkedin size={50} />
                <Dribbble size={50} />
                <Figma size={50} />
              </div>
            </div>
            <CrewCard
              defaultImage={teamMembers[1].defaultImage}
              funkyImage={teamMembers[1].funkyImage}
              name={teamMembers[1].alt}
              color={teamMembers[1].color}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
