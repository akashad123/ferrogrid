import React from 'react';
import { ProjectCardItem } from '@/data/projectsData';

interface ProjectCardProps {
  project: ProjectCardItem;
  delayIndex?: number;
}

/**
 * Reusable Project Card component matching original ferrogrid project card markup.
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({ project, delayIndex = 0 }) => {
  const delay = ((delayIndex % 3) + 1) * 0.1;

  return (
    <div
      className="project-card reveal-scale"
      data-category={project.category}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="project-card-img">
        {project.ribbon && <div className="card-ribbon">{project.ribbon}</div>}
        <img
          src={project.src}
          srcSet={project.srcset}
          sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
          width={project.width}
          height={project.height}
          alt={project.alt}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="project-card-body">
        <div className="project-card-category">{project.categoryLabel}</div>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>
        <div className="project-card-meta">
          {project.location && (
            <div className="project-meta-item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {project.location}
            </div>
          )}
          {project.status && (
            <div className="project-meta-item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              {project.status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
