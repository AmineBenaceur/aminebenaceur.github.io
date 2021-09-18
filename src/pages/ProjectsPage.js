import React, {useState} from 'react'
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../components/Title';
import projects_info from '../data/ProjectInfo.js'
import Button from '../components/Button';
import ProjectGrid from '../components/ProjectGrid';

const allButtons = ['All', ...new Set(projects_info.map(item => item.category))]

function ProjectsPage() {
    const[button,setButton] = useState(allButtons);
    const[projects,setProjects] = useState(projects_info)

    const filter = (button) => {
        if (button === 'All'){
            setProjects(projects_info);
            return;
        }
        else{
            console.log(button)
            const filteredData = projects_info.filter(item => item.category === button);
            console.log(filteredData)
            setProjects(filteredData);
        }
 
    }

    return (
        <MainLayout>
            <Title title={'Projects'} span={'Projects'} />
            <InnerLayout>
                <Button filter={filter} button={button} />
                <ProjectGrid projects={projects} />
            </InnerLayout>
        </MainLayout>
    )
}

export default ProjectsPage
