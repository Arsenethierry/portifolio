import React from 'react';

function SkillsExplore() {
    return (
        <div className="relative h-auto py-10 lg:py-20" id="skills">
            <img
                src="/images/vectors/cylinder.svg"
                alt='Cylinder Vector'
                className="absolute right-0 top-16 sm:top-7 md:top-28 lg:top-7 md:w-50p lg:w-35p"
            />
            <img
                src="/images/vectors/l-vector.svg"
                alt='L vector'
                className='absolute left-0 md:left-35 bottom-0 block md:hidden lg:block w-75p opacity-50 md:opacity-100 sm:w-1/3 md:1/4 lg:w-1/3 pointer-events-none'
                />
        </div>
    );
}

export default SkillsExplore;