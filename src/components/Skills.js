import React, {useState} from 'react'
import { DisplaySkills } from './displaySkills';
import {DisplayCert} from './DisplayCert'
import { useInView } from 'react-intersection-observer';

export const Skills = ()=> {

    const[category, setcategory ] = useState('Skills');

    const {ref: categoryRef, inView: inViewcategory } = useInView({
        triggerOnce: false,
        threshold: 0.8,
    })

  return (
    <>
        <div className='Skill'>
            <div className='aboutTop'></div>
            
            <div ref={categoryRef} className={`skillpage ${inViewcategory? 'fadeIn' : 'fadeOut'}`}>
                <div  className="skillsTop"> 
                    <div onClick={() => setcategory('Skills')}
                        style={ { textDecoration: category === 'Skills' ? 'underline' : 'none'}} className='category'>Skills</div>

                    <div onClick={() => setcategory('Certification')} style={ { textDecoration: category === 'Certification' ? 'underline' : 'none' }}className='category' >Certification</div>
                </div>
                {
                    category === 'Skills' ? <DisplaySkills /> : <DisplayCert />
                }
            </div>
        </div>
    </>
  )
}

