import React from 'react';
import LandingPage from './landing-page';
import SkillsExplore from './skills';
import Work from './work';

function HomePage() {
    return (
        <div className='bg-blue pt-28'>
            <div className='overflow-x-clip'>
               <LandingPage />
               <SkillsExplore />
               <Work />
            </div> 
        </div>
    );
}

export default HomePage;