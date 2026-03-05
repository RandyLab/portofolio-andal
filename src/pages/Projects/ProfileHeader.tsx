// src/pages/Projects/ProfileHeader.tsx
import React from "react";
import {
  Github,
  GraduationCap,
  Users,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { useInViewRepeat } from "../../utils/functions";

interface ProfileHeaderProps {
  profileData: {
    name: string;
    bio: {
      student: string;
      collaboration: string;
      learning: string;
      funFact: string;
    };
  };
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profileData,
}) => {
  const { triggerRef, visible } = useInViewRepeat();
  const avatarUrl = `https://github.com/${profileData.name}.png`;

  const bioItems = [
    {
      icon: GraduationCap,
      text: profileData.bio.student,
      color: "text-blue-500",
    },
    {
      icon: Users,
      text: profileData.bio.collaboration,
      color: "text-green-500",
    },
    {
      icon: Lightbulb,
      text: profileData.bio.learning,
      color: "text-yellow-500",
    },
    { icon: Sparkles, text: profileData.bio.funFact, color: "text-purple-500" },
  ];

  return (
    <div ref={triggerRef} className="max-w-2xl mx-auto w-full">
      <div
        className={`bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-200 shadow-md transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Avatar */}
          <div className="relative">
            <div className="absolute inset-0 bg-purple-200 rounded-full blur-xl opacity-40"></div>
            <img
              src={avatarUrl}
              alt={profileData.name}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-purple-300 shadow-lg"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/160";
              }}
            />
          </div>

          {/* Bio */}
          <div className="flex-1 space-y-3 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900">
              @{profileData.name}
            </h2>

            {bioItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 justify-center md:justify-start"
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}

            <a
              href={`https://github.com/${profileData.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-all hover:scale-105 mt-4 shadow-sm"
            >
              <Github className="w-5 h-5" />
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
