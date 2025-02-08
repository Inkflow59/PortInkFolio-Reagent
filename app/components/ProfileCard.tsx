import React from 'react';

interface ProfileCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="p-6 bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg flex flex-col justify-between">
      <div>
        <strong className="text-lg">{title}</strong>
        <p className="text-sm">{description}</p>
      </div>
      <img src={imageSrc} alt={title} className="mt-4 w-full h-auto rounded" />
    </div>
  );
};

export default ProfileCard; 