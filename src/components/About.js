import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';


export const About = () => {
    const { ref: textRef, inView: textInView } = useInView({
        triggerOnce: false,
        threshold: 0.8, // Trigger when 80% is in view
      });
    
      const { ref: imageRef, inView: imageInView } = useInView({
        triggerOnce: false,
        threshold: 0.8,
      });

    return(
        <>
            <div className="About">
                <div className='aboutTop'>
                </div>

                <div className="aboutContent">
                    <div ref={textRef} className={`aboutText ${textInView ? 'fadeIn' : 'fadeOut'}`}>

                        <div className='greeting'>Hello I'm</div>
                        <div className='myName'>Mahati Desai</div>

                        <div className="designation"><Typewriter
                            key={textInView}
                            words={['Developer']}
                            loop={2}
                            cursor 
                            cursorStyle="|"
                            typeSpeed={200}
                            delaySpeed={10000} />
                        </div>

                        <p className='desiDesc'>Passionate and focused on building real-world solutions through clean, efficient, and impactful code.</p>
                        <p className='desiDesc'>Whether it's developing responsive web interfaces, integrating APIs, or exploring AI-powered tools, I'm always eager to learn, innovate, and turn ideas into reality.</p>


                        <div className='contact'>
                            <a href='https://github.com/mahatidesai'><img src="/images/GitHub.png" alt='' className='icon'/></a>
                            <a href='https://www.linkedin.com/in/mahati-desai-b2853a24b/'><img src="/images/LinkedIn.png" alt=''  className='icon'/></a>
                            <a href='mailto:desaimahati@gmail.com'><img src="/images/CircledEnvelope.png" alt='' className='icon'/></a>
                        </div>
                            
                        <div className='badges'>
                            <div className='box'>
                                <img src="/images/Code.png" className='boximage' alt=' '/>
                                <div className='total'>Total <br/> Projects</div>
                                <div className='number'>4</div>
                        </div>
                                
                        <div className='box'>
                            <img src="/images/Certificate.png" className='boximage' alt=' '/>
                                <div className='total'>Total <br/>Certificates</div>
                                <div className='number'>1</div>
                            </div>
                        </div>
                    </div>

                    <div ref={imageRef} className={`aboutImage ${imageInView ? 'fadeIn' : 'fadeOut'}`}>
                        <div className='langButton Up'>JavaScript</div>
                        <div className="cmdButton">
                            <img src="/images/cmd.png" className='cmdImage' alt=''/>
                            <div className='langButton Mid'>CSS</div>
                        </div>
                        <div className='langButton Down'>HTML</div>
                    </div>
                </div>
        </div>
        </>
    )
}