import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";

const DEFAULT_FIRST_CATEGORY = "Applications";

const sortProjectsByCategoryPriority = (projectList, firstCategory) => {
  const first = firstCategory.toLowerCase();
  return [...projectList].sort((a, b) => {
    const aIsFirst = a.category.toLowerCase() === first;
    const bIsFirst = b.category.toLowerCase() === first;

    if (aIsFirst && !bIsFirst) return -1;
    if (!aIsFirst && bIsFirst) return 1;
    return 0;
  });
};

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectCategory, setSelectCategory] = useState("All");
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(
          sortProjectsByCategoryPriority(data, DEFAULT_FIRST_CATEGORY),
        );
      });
  }, []);

  const handleFilterClick = (category) => {
    setSelectCategory(category);
    if (category === "All") {
      setFilteredProjects(
        sortProjectsByCategoryPriority(projects, DEFAULT_FIRST_CATEGORY),
      );
    } else {
      const filtered = projects.filter(
        (project) => project.category.toLowerCase() === category.toLowerCase(),
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <ul className="filter-list">
        {["All", "Applications", "web development"].map((category) => (
          <li key={category} className="filter-item">
            <button
              onClick={() => handleFilterClick(category)}
              data-filter-btn
              className={category === selectCategory ? "active " : ""}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
      {/* show portfolio data */}
      <section className="projects">
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className="project-item active
            data-filter-item
            data-category={project.category} "
            >
              <a href={project.id} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img src={project.image} alt="" loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
