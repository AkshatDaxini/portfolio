import { Link } from 'react-router-dom';
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pythonlogo from '../../assets/images/python-logo.png';
import { faAndroid, faCss3, faHtml5, faJava, faReact } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['A', 'k', 's', 'h', 'a', 't'];
    const jobArray = ['F', 'u', 'l', 'l', ' ', 'S', 't', 'a', 'c', 'k', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

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
                        <span className={`${letterClass} _11`}>i</span>
                        <br />
                        <span className={`${letterClass} _12`}>I</span>
                        <span className={`${letterClass} _13`}>'m </span>
                        <span className={`${letterClass} _14`}> </span>

                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} /><br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={16} /><br /></h1>
                    <h2>
                        Frontend Developer / JavaScript Expert</h2>
                    <Link to='/contact' className='flat-button'>Contact Me</Link>
                    

                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <img src={pythonlogo} alt="python" height="150px" width="150px" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJava} color="red" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faAndroid} color="green" />
                        </div>
                    </div>
                </div>
            </div>


            <Loader type="pacman" />
        </>
    );
}

export default Home;