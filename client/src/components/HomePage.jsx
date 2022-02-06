import React from 'react';

function HomePage() {
    return(
        <>

        <div>
        <h1 class="searchInput" style={{ textAlign: "center" }}>About Us</h1>;

        <div class="aboutus">

        <p>During this long pandemic period, our lifestyles have met 
            massive disruptions. Fitness centers, sports programs, and 
            many physical activities were shut down. We were forced 
            to stay at home. With limited physical activities, our 
            mental and physical health were greatly impacted by this 
            change. Heath problems such as obesity, depression, and 
            anxiety dramatically increased during this time.</p>
        <br></br> 

        <p>In order to restore life before the pandemic, we created  
            <strong> Fit.Me</strong>, an app that allows you to find activity centers 
            and programs near you that satisfy your health goals. We 
            incorporated an extremely fine search system that gives 
            you information about the different sports and fitness 
            facilities that are covid-safe and open for you! Just 
            specify your preferences, find an activity, and become 
            one step closer to maintaining a health lifestyle.</p>

        </div>
        </div>
        </>
    );
}

export default HomePage;