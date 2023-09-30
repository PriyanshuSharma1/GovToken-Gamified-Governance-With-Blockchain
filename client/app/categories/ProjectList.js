"use client";

import React from "react";
import { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

import PropTypes from "prop-types";

function ProjectList({ projects, onSave }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [proofFile, setProofFile] = useState(null);
  const onSubmitProof = (project, file) => {
    // Check if a file is selected
    if (file) {
      // Perform the file upload logic here, e.g., send it to a server or process it
      console.log("Submitting proof for project:", project);
      console.log("Uploading file:", file);

      // You can reset the selected file and project after successful submission
      setSelectedProject(null);
      setProofFile(null);
    } else {
      // Handle the case where no file is selected
      alert("Please select a file for proof submission.");
    }
  };

  const items = projects.map((project) => (
    <div key={project.id} className="w-1/2">
      <ProjectCard project={project} onSubmitProof={onSubmitProof} />
    </div>
  ));
  return <div className="flex flex-wrap justify-between">{items}</div>;
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(Project).isRequired),
};

export default ProjectList;
