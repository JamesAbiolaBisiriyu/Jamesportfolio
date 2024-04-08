import React, { useEffect, useState } from 'react'
import { FaRegEye } from 'react-icons/fa';


const Portfolio = () => {

  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectCategory, setSelectCategory] = useState('All');
  useEffect(()=>{
    fetch('projects.json').then(res => res.json()).then(data => {
      setProjects(data);
      setFilteredProjects(data)
    });
  }, [])

  return (
    <section>
      <header>
        <h2 className='h2 article-title'>Portfolio</h2>
      </header>
    <ul className='filter-list'>
      {['All','Web Design', 'Applications', 'web development'].map(category=>(
        <li key={category} className='filter-item'>
          <button className={category === selectCategory ? 'active ' : '' }>{category}</button>
        </li>
      ))}
    </ul>
    {/* show portfolio data */}
    <section className='projects'>
      <ul className='project-list'>
        {
          filteredProjects.map(project=> (
            <li key={project.id} className='project-item active
            data-filter-item
            data-category={project.category} '>
              <a href="#">
                <figure className='project-img'>
                  <div className='project-item-icon-box'>
                    <FaRegEye/>
                  </div>
                  <img src={project.image} alt='' loading='lazy'/>
                </figure>
                <h3 className='project-title'>{project.title}</h3>
                <p className='project-category'>{project.category}</p>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
    </section>
  )
}

export default Portfolio