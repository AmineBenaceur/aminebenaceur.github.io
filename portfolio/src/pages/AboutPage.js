import React from 'react'
import styled from 'styled-components';
import { MainLayout } from '../styles/Layouts';
import ImageSection from '../components/ImageSection';
import Title from '../components/Title';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'}>About Page</Title>
                <ImageSection />
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`

`;

export default AboutPage

