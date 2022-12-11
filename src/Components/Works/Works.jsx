import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import data from '../../WorksData/data'
import Skills from '../Skills/Skills'
import './Works.scss'

function Works() {
    const [tag, setTag] = useState('all');
    const [filteredImages, setFilteredImages] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(
        () => {
            tag === 'all' ? setFilteredImages(data) : setFilteredImages(data.filter(image => image.genre === tag));
            setLoading(false);
        },
        [tag]
    );

    return (
        <>
            <div className="work py-4">
                <div className="work-tabs">
                    <TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} />
                    <TagButton name="design" tagActive={tag === 'design' ? true : false} handleSetTag={setTag} />
                    <TagButton name="javascript" tagActive={tag === 'javascript' ? true : false} handleSetTag={setTag} />
                    <TagButton name="react.js" tagActive={tag === 'react.js' ? true : false} handleSetTag={setTag} />
                </div>
                <div className="container">
                    <div className="row gy-4 gx-2 d-flex justify-content-center">
                        {
                            loading === true ?
                                <div className='d-flex justify-content-center align-items-center vh-100'>
                                    <i className='fas fa-spinner fa-spin fa-4x'></i>
                                </div>
                                :
                                <>
                                    {
                                        filteredImages.map((project) =>
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: .5 }}
                                                className="col-lg-4 col-md-6" key={project.id}>
                                                <div className="work-card">
                                                    <div className="work-card-overlay">
                                                        <a href={project.demoLink} target="_b">
                                                            <i className="fas fa-laptop-code"></i>
                                                            <p>Demo</p>
                                                        </a>
                                                        <a href={project.gitHubLink} target="_b">
                                                            <i className="fab fa-github"></i>
                                                            <p>Repo</p>
                                                        </a>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-img">
                                                            <img src={project.imgSrc} alt="works" className='w-100' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )
                                    }
                                </>
                        }

                    </div>
                </div>
            </div>
            <Skills />
        </>

    );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
    return (
        <button className={`btn ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
            {name.toUpperCase()}
        </button>
    );
};

export default Works;