import React from 'react'

const Projects = () => {
    const projects = [
        {
            name: 'Image Compressor',
            link: 'https://bhaskarrijal.me/tools/image-compressor',
            description: 'Web Application'
        },
    ]
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-medium">Projects</h2>
                <ul className="ist-inside">
                    {
                        projects.map((project, index) => (
                            <li key={index}>
                                <a href={project.link} target='_blank' className='italic underline text-primary'>
                                    <span>{project.name}</span>
                                </a> | <span>{project.description}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Projects