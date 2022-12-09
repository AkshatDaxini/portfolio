import Loader from 'react-loaders';
import './index.scss';
import projects from './projects.json';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="heading">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']} index={15} />
                </h1>
            </div>
            <div className="container-project-page">

                {projects.map(element => {
                    return (
                        <div className='project-card'>
                            <div className='text-zone'>
                                <span className='project-date'>{element.year}</span><br />
                                <span className='project-name'><a href={element.git}>{element.name}</a></span><br />
                                <span className='lang-used'>{element.lang}</span>
                                <div className='project-description'> {element.desc}</div><br />
                            </div>
                            <div className="btn">

                                <center>
                                    {element.git !== null && <a target="_blank" rel="noreferrer" href={element.git}>
                                        <button><FontAwesomeIcon icon={faGithub} color="#4d4d4e" /> Soruce</button>
                                    </a>}

                                    {element.demo !== null && <a target="_blank" rel="noreferrer" href={element.demo}>
                                        <button><FontAwesomeIcon icon={faDesktop} color="#4d4d4e" /> Demo</button>
                                    </a>}
                                </center>

                            </div>
                        </div>
                    )
                })}
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default Project;