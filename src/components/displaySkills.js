import React from 'react';


export const DisplaySkills =({isVisible}) => {
    const skills = [
        {
            id:1,
            skillName: 'Python',
            skillUrl: 'Python.png'
        },
        {
            id:2,
            skillName: 'Java',
            skillUrl: 'Java.png'
        },
        {
            id:3,
            skillName: 'C',
            skillUrl: 'C Programming.png'
        },
        {
            id:4,
            skillName: 'Dart',
            skillUrl: 'Dart.png'
        },
        {
            id:5,
            skillName: 'SQL',
            skillUrl: 'SQL.png'
        },
        {
            id:6,
            skillName: 'HTML',
            skillUrl: 'html.png'
        },
        {
            id:7,
            skillName: 'Css',
            skillUrl: 'CSS3.png'
        },
        {
            id:8,
            skillName: 'React',
            skillUrl: 'React.png'
        },
        {
            id:9,
            skillName: 'Tailwind CSs',
            skillUrl: 'Tailwind CSS.png'
        },
        {
            id:10,
            skillName: 'Js',
            skillUrl: 'javascript.png'
        },
        {
            id:11,
            skillName: 'Flutter',
            skillUrl: 'Flutter.png'
            
        },
        {
            id:12,
            skillName: 'MongoDb',
            skillUrl: 'MongoDb.png'
        },
        {
            id:14,
            skillName: 'Nodejs',
            skillUrl: 'Nodejs.png'
        },
        {
            id:15,
            skillName: 'Express',
            skillUrl: 'express.png'
        },
        {
            id:17,
            skillName: 'Figma',
            skillUrl: 'Figma.png'
        },
        {
            id:18,
            skillName: 'WordPress',
            skillUrl: 'WordPress.png'
        },
    ]


  return (
    <>
        <div className="skillsComponent" >
                {
                    skills.map((skill, i)=> {
                        return(
                            <div key={skill.id} className='skillItem'>
                            <img src={`/images/${skill.skillUrl}`} className='skillImage' alt={skill.skillName} />
                            </div>
                        )
                    })
                }
            </div>
    </>
  )
}

