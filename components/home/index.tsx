import React from 'react';
import LandingPage from './landing-page';
import Projects from './projects';
import SkillsExplore from './skills';
import Technologies from './technologie';
import Work from './work';

function HomePage() {
    return (
        <div>
            <div className='overflow-x-clip'>
               <LandingPage />
               <Projects />               
               <Technologies />
               {/* <SkillsExplore /> */}
               {/* <Work /> */}
            </div> 
        </div>
    );
}

export default HomePage;