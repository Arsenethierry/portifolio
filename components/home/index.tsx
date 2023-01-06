import React from 'react';
import LandingPage from './landing-page';
import SkillsExplore from './skills';

function HomePage() {
    return (
        <div className='bg-blue pt-28'>
            <div className="overflow-x-hidden">
               <LandingPage />
               <SkillsExplore />
            </div> 
        </div>
    );
}

export default HomePage;