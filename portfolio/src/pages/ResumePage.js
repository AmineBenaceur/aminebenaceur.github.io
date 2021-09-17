import React from 'react';
import Skills from '../components/Skills';
import { MainLayout} from '../styles/Layouts';
import Resume from '../components/Resume';

function ResumePage() {

    return (
        <MainLayout>
            <Resume />
            <Skills />
        </MainLayout>
    )
}

export default ResumePage
