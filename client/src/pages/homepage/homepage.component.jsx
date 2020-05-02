import React from 'react';

import { HomePageContainer } from './homepage.styles';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
    <HomePageContainer>
            <Directory />
    </HomePageContainer>
);

export default HomePage;

// profilier example(import from react)
/* <Profiler id="Directory" onRender={(id, phase, actualDuration)=>{
    console.log({
        id,
        phase,
        actualDuration
    })
}}>
  <Directory />
</Profiler> */

