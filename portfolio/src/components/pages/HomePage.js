import React from 'react'
import styled from 'styled-components';
import Particle from '../Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
        </HomePageStyled>
    );
}





const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;


`;

export default HomePage;