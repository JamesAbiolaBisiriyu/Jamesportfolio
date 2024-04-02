import React from 'react'
import { FaBookReader } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className='h2 article-title'>Resume</h2>

      </header>
      {/* Education */}
      <div className='timeline'>
        <div className='title-wrapper'>
          <div className='icon-box'>
          <FaBookReader />
          </div>
          <h3 className='h3'>Education</h3>
        </div>
        <ol className='timeline-list'>
          <TimelineItem title='Tai Solarin College of Education'
          date='2000-2003'
          description='Diploma in Computer Science'
          /> 
        </ol>
        <ol className='timeline-list'>
          <TimelineItem title='Toyibat Comprehensive High School'
          date='1996-1999'
          description='Senior Secondary School Certificate Exam (SSCE)'
          /> 
        </ol>
        <ol className='timeline-list'>
          <TimelineItem title='Bright Star Comprehensive High School'
          date='1993-1996'
          description='Junior Secondary School Certificate Exam'
          /> 
        </ol>
        <ol className='timeline-list'>
          <TimelineItem title='Alice Joe Nursery and Primary School'
          date='1993-1996'
          description='Elementary School Certificate '
          /> 
        </ol>
      </div>
      {/* Certification */}
      <div className='timeline'>
        <div className='title-wrapper'>
          <div className='icon-box'>
          <FaBookReader />
          </div>
          <h3 className='h3'>Certification</h3>
        </div>
        <ol className='timeline-list'>
          <TimelineItem title='Alisson'
          date='2002'
          description='Introduction To HTML and CSS'
          /> 
        </ol>
        <ol className='timeline-list'>
          <TimelineItem title='Cousera'
          date='2023'
          description='Introduction To JavaScript'
          /> 
        </ol>
        <ol className='timeline-list'>
          <TimelineItem title='Gomycode'
          date='2023'
          description='Web Dev 1'
          /> 
        </ol>
        <ol className='timeline-list'>
          <TimelineItem title='Gomycode'
          date='2023/2024'
          description='Web Dev 2 React JS '
          /> 
        </ol>
      </div>
        {/* Work Experience */}
      <div className='timeline'>
        <div className='title-wrapper'>
          <div className='icon-box'>
          <FaBookReader />
          </div>
          <h3 className='h3'>Work Experience</h3>
        </div>
        <ol className='timeline-list'>
          <TimelineItem title='Tokun Pedro & Co.'
          date='2007-2009'
          description='Personal Assistant'
          /> 
        </ol>
        <ol className='timeline-list'>
          <TimelineItem title='TollyBis Enterprises'
          date='2009-Till Date'
          description='Sales Manager'
          /> 
        </ol>
      </div>
      {/* Skills Section */}
      <div className='skill'>
        <h3 className='h3 skills-title'>My Skills</h3>
        <ul className='skills-list content-card'>
          <SkillItem title='Web Design' value={80}/>
          <SkillItem title='React' value={80}/>
          <SkillItem title='HTML' value={80}/>
          <SkillItem title='CSS' value={60}/>

        </ul>
      </div>
    </section>
  )
}

export default Resume