import React from 'react';
import SKILLS from '../../shared/utils/skills';
import { Skills } from '../../shared/utils/types';

function SkillsIcons() {
    return (
        <>
         <div className="flex items-center justify-center lg:mt-16 flex-wrap w-5/6 md:w-full xl:w-5/6">
            {SKILLS.map(({ src, name }: Skills) => {
                return <img src={src} alt={name} key={src} className='p-2 sm:p-6 h-16 sm:h-24' />
            })}
        </div>  
        </>
    );
}

export default SkillsIcons;