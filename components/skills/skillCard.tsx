// SkillCard.tsx
import React from 'react';
import Image from 'next/image';

interface Skills {
  title: string;
  image: any; // Adjust the type if needed
}

function SkillCard({ title, image }: Skills) {
  return (
    <div className='w-full inline-flex items-center justify-center'>
      <div className='relative group overflow-hidden'>
        {/* Image with hover effect */}
        <Image
          className='transition-transform cursor-pointer transform-gpu group-hover:scale-110'
          width={100}
          height={100}
          priority={true}
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
}

export default SkillCard;
