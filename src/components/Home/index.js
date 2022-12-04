import { Link } from 'react-router-dom';
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['A', 'k', 's', 'h', 'a', 't'];
    const jobArray = ['F', 'u', 'l', 'l',' ','S' ,'t' ,'a' ,'c' ,'k' ,' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m </span>
                    <span className={`${letterClass} _15`}> </span>

                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={16} /><br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={16} /><br /></h1>
                <h2>
                    Frontend Developer / JavaScript Expert</h2>
                <Link to='/contact' className='flat-button'>Contact Me</Link>

            </div>
        </div>
         <Loader type="pacman" />
         </>
    );
}

export default Home;