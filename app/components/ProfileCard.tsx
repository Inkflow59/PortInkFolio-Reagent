import React from 'react';

interface ProfileCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="p-4 md:p-6 bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg flex flex-col md:flex-row md:items-center gap-4 hover:shadow-xl transition-shadow duration-300">
      <div className="flex-1 min-w-0">
        <strong className="text-base md:text-lg font-semibold block mb-2">{title}</strong>
        <p className="text-sm md:text-base line-clamp-3 md:line-clamp-none">{description}</p>
      </div>
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full md:w-1/3 h-auto rounded object-cover" 
      />
    </div>
  );
};

export default ProfileCard;