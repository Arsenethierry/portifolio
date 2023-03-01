import React from 'react';
import HeaderSmall from '../header-small';
import SkillsIcons from './skills-icons';

function SkillsExplore() {
    return (
        <>
            <div className="relative py-10 lg:py-20" id="skills">
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
            <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
                <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
                    <div className='sm:w-4/5 relative'>
                        <HeaderSmall text="Who I am" />
                        <h1 className="sm:w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-5xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                        He creates elegant, logical web and mobile app solutions. In his hobby time, he
                        designs.
                        </h1>
                        <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                            Think. <span className="text-pink">Code.</span> Debug.
                        </h1>
                    </div>
                </div>
                <div className='col-span-12 md:col-span-5 lg:col-span-6 flex flex-col justify-center items-center my-10 sm:my-0'>
                    <SkillsIcons />
                </div>
            </div>
        </>
    );
}

export default SkillsExplore;