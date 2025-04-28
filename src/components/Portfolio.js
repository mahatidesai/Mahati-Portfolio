import React from 'react'
import { useInView } from 'react-intersection-observer'

export const Portfolio = ()=> {

    const projects = [
        {
            id: 1,
            projectName: 'Real-Time Sign Language Translation',
            projectImage: 'https://i.pinimg.com/736x/0e/76/7e/0e767ed508b662b8de8f8b2391015d30.jpg',
            projectDescription: 'A real-time system that uses MediaPipe Holistic and deep learning (CNN, Conv1D, LSTM) to translate sign language gestures into English, enabling better communication for the hearing and speech impaired.',
            projectLink: 'https://github.com/mahatidesai/Sign-Language',
            techstack: [ 'Tensorflow.png', 'Python.png', 'OpenCV.png' ]
        },
        {
            id: 2,
            projectName: 'Ravel - Self-Drive Vehicle Rental App',
            projectImage: 'https://i.pinimg.com/736x/71/3a/ec/713aec8ead08c85d11933fa5b42b90b2.jpg',
            projectDescription: 'Ravel is a user-friendly platform that allows customers to easily book self-drive cars and bikes, check real-time availability, and manage their rentals—all from one place.',
            projectLink: 'https://github.com/mahatidesai/RAVEL/tree/master',
            techstack: [ 'Flutter.png', 'Dart.png', 'Nodejs.png', 'MongoDb.png', 'React.png' ]
        },
        {
            id: 3,
            projectName: 'NewSphere - News Application',
            projectImage: 'https://i.pinimg.com/736x/79/0a/b9/790ab9966756e7a77c8b2aad9fc29525.jpg',
            projectDescription: 'Newsphere is a responsive news application that curates the latest headlines across categories, providing users with a clean, organized, and engaging reading experience.',
            projectLink: 'https://github.com/mahatidesai/NewSphere',
            techstack: [ 'React.png', 'Newsapi.png']
        },
        {
            id: 4,
            projectName: 'El Clima - Weather Application',
            projectImage: 'https://i.pinimg.com/736x/17/93/69/1793692bbd1e9301f0b6bf43650cfbae.jpg',
            projectDescription: 'A real-time weather application that displays temperature, humidity, and conditions using data from OpenWeatherAPI, with a clean and user-friendly interface.',
            projectLink: 'https://github.com/mahatidesai/Weather-App',
            techstack: [ 'Flutter.png', 'Dart.png', 'OpenWeather.png' ]
        },
    ]

    const {ref: projRef, inView: projInView} = useInView({
        triggerOnce: false,
        threshold: 0.4,
    })

  return (
    <>
        <div className='Portfolio'>
            <div className='aboutTop'></div>
            <div ref={projRef} className={`projects ${projInView ? 'fadeIn' : 'fadeOut'} `}>
                {
                    projects.map((proj, i) => {
                        return(
                            <a href={proj.projectLink} ref={projRef} className={`projectItem ${projInView ? 'fadeIn' : 'fadeOut'} `}  key={proj.id}>
                            <img src={`${proj.projectImage}`} className='projImage' alt='' />
                            <div className='projTitle'>{proj.projectName}</div>
                            <div className='projDesc'>{proj.projectDescription}</div>
                            <div className='skills'>
                                {
                                    proj.techstack.map((tech,i)=> {
                                        return(
                                            <img key={i} className='techstackImg' src={`/images/${tech}`} alt={tech} />   
                                        )
                                    })
                                }
                            </div>

                            <img src='/images/ExternalLink.png' className='visit' alt='visit'/></a>

                        )
                    })
                }

    
            </div>
        </div>
    </>
  )
}
