import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from 'react-icons/ai';

import './ProjectPage.css';
import { SingleProject } from '../../components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData';
import { headerData } from '../../data/headerData';

function ProjectPage() {
  const [search, setSearch] = useState('');
  const { theme } = useContext(ThemeContext);

  const filteredArticles = projectsData.filter((project) => {
    const content = project.projectName + project.projectDesc + project.tags;
    return content.toLowerCase().includes(search.toLowerCase());
  });

  const useStyles = makeStyles((t) => ({
    search: {
      color: theme.tertiary,
      width: '40%',
      height: '2.75rem',
      outline: 'none',
      border: 'none',
      borderRadius: '20px',
      padding: '1rem 1rem',
      fontFamily: "'Noto Sans TC', sans-serif",
      fontWeight: 500,
      fontSize: '0.9rem',
      backgroundColor: theme.secondary,
      boxShadow:
        theme.type === 'dark'
          ? 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060'
          : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
      '&::placeholder': {
        color: theme.tertiary80,
      },
      [t.breakpoints.down('sm')]: {
        width: '350px',
      },
    },
    home: {
      color: theme.tertiary,
      position: 'absolute',
      top: '50%',
      left: '4rem',
      padding: '7px',
      borderRadius: '50%',
      boxSizing: 'content-box',
      fontSize: '3rem',
      cursor: 'pointer',
      transform: 'translateY(-50%)',
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        color: theme.secondary,
      },
      [t.breakpoints.down('md')]: {
        fontSize: '2rem',
        padding: '0',
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="projectPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>{headerData.name} | Projects</title>
      </Helmet>
      <div
        className="projectPage-header"
        style={{ backgroundColor: theme.primary }}
      >
        <Link to="/">
          <AiOutlineHome className={classes.home} />
        </Link>
        <h1 style={{ color: theme.tertiary }}>Projects</h1>
      </div>
      <div className="projectPage-container">
        <div className="projectPage-search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className={classes.search}
          />
        </div>
        <div className="project-container">
          <Grid
            className="project-grid"
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            {filteredArticles.map((project) => (
              <SingleProject
                theme={theme}
                key={project.id}
                id={project.id}
                name={project.projectName}
                desc={project.projectDesc}
                tags={project.tags}
                code={project.code}
                demo={project.demo}
                image={project.image}
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
