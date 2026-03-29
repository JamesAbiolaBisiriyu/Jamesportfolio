import React from "react";
import { FaBookReader } from "react-icons/fa";
import TimelineItem from "./TimelineItem";

const Resume = () => {
  const experience = [
    {
      title: "Full Stack Developer (MERN)",
      date: "November 2025 - Present | GOMYCODE, Lagos, Lagos",
      description:
        "Managed source control repositories with Git, including branching strategies and pull requests. Developed responsive websites based on client requirements. Developed and maintained front-end web applications using HTML, CSS, JavaScript, React.js, and Redux.",
    },
    {
      title: "Procurement Manager",
      date: "April 2005 - Present | Tollybis Enterprises, Lagos, Lagos",
      description:
        "Generated reports on purchase orders, invoices, payments, returns and other relevant information. Negotiated contracts with vendors and suppliers to ensure quality products at competitive prices. Evaluated bids from suppliers and selected vendors based on price, quality, and reliability factors. Maintained relationships with existing vendors while developing new sources of supply. Conducted market research on industry trends and pricing strategies. Ensured adherence to company policies, procedures, and guidelines related to procurement activities.",
    },
    {
      title: "Security Supervisor",
      date: "March 2010 - March 2013 | Midas Security/Securiplan, London, Hillingdon",
      description:
        "Supervised a team of Security Officers in their daily duties. Monitored and maintained security systems, including alarms, CCTV cameras, access control systems and other related equipment. Maintained accurate records of all security-related incidents and activities. Conducted regular inspections of premises to identify potential security risks or weaknesses in policies, procedures and physical security measures.",
    },
    {
      title: "Protection Officer",
      date: "February 2007 - February 2009 | Morson International, London, Southwark",
      description:
        "Enforced security rules and regulations within designated sites, ensuring compliance at all times. Established effective working relationships with other law enforcement agencies to share information regarding security concerns. Leveraged interpersonal skills to build rapport with clients from diverse backgrounds during protection assignments.",
    },
    {
      title: "Assistant Manager",
      date: "November 2005 - June 2007 | Toys 'R' Us, London, Brentwood",
      description:
        "Trained new employees in product knowledge, customer service protocols, cash handling procedures, and safety regulations. Resolved customer complaints quickly and effectively while maintaining a high level of professionalism. Helped oversee the daily operations of the store, managing staff and inventory.",
    },
    {
      title: "Floor Supervisor",
      date: "July 2000 - February 2003 | Nicholas Pandelis, W3 7XR East Acton",
      description:
        "Monitored inventory levels to reduce waste and maximize cost savings. Supervised kitchen staff by training, counseling, and disciplining. Oversaw prep work to maintain food quality, plate presentation and sanitation standards. Performed opening, closing and side work duties in accordance with guidelines.",
    },
  ];

  const education = [
    {
      title: "Diploma in Full Stack Engineer",
      date: "Gomycode, Lagos",
      description:
        "Completed full stack engineering training with practical MERN development.",
    },
    {
      title: "React (Web 2) in Software Development",
      date: "Gomycode, Lagos",
      description:
        "Focused on building modern React applications and reusable UI components.",
    },
    {
      title: "Web 1 in Software Development",
      date: "Gomycode, Lagos",
      description:
        "Built foundational front-end development skills in HTML, CSS, and JavaScript.",
    },
    {
      title: "Software Development",
      date: "West London College, St Mary's Road, Ealing, London, W5 5RF",
      description:
        "Academic training in software development principles and practical implementation.",
    },
    {
      title: "Diploma in Software Development",
      date: "Newham College, Welfare Road, London E15 4HT",
      description:
        "Comprehensive diploma focused on software design and development practice.",
    },
  ];

  const skills = [
    "JavaScript programming",
    "RESTful APIs development",
    "ReactJS knowledge",
    "API integration",
    "HTML expertise",
    "Java programming",
    "Git version control",
    "Responsive web design",
    "Node.js experience",
    "Project management",
    "Web technologies: AngularJS, jQuery, Bootstrap",
    "Coding",
    "CSS expertise",
    "HTML proficiency",
  ];

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">
            Full Stack Developer (MERN) | Actively Seeking employment
          </h3>
        </div>
        <p className="timeline-text">
          Full Stack Developer (MERN) with expertise in JavaScript, ReactJS, and
          responsive web design, leveraging extensive experience in managing Git
          repositories and developing front-end applications. Skilled in API
          integration and Node.js, eager to contribute to innovative projects.
          Ready to enhance team capabilities and drive technological
          advancements.
        </p>
        <p className="timeline-text">
          0817 157 5268 | emperor2g@gmail.com | Lagos, Lagos | Nigerian
        </p>
      </div>

      {/* Experience */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          {experience.map((item) => (
            <TimelineItem
              key={`${item.title}-${item.date}`}
              title={item.title}
              date={item.date}
              description={item.description}
            />
          ))}
        </ol>
      </div>

      {/* Education */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          {education.map((item) => (
            <TimelineItem
              key={`${item.title}-${item.date}`}
              title={item.title}
              date={item.date}
              description={item.description}
            />
          ))}
        </ol>
      </div>

      {/* Skills */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Skills</h3>
        </div>
        <ol className="timeline-list">
          {skills.map((skill) => (
            <li className="timeline-item" key={skill}>
              <p className="timeline-text">{skill}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* References */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">References</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="References available upon request"
            date=""
            description="Professional references will be provided when required."
          />
        </ol>
      </div>
    </section>
  );
};

export default Resume;
