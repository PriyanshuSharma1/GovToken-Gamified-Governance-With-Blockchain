"use client";

import { Project } from "./Project";
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

function formatDescription(description) {
  return description;
}

function ProjectCard(props) {
  const { project, onSubmitProof } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [showSubmitFileButton, setShowSubmitFileButton] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmit = () => {
    // Toggle the visibility of the "Submit File" button
    setShowSubmitFileButton(true);
  };
  const handleFileSubmit = () => {
    if (selectedFile) {
      onSubmitProof(project, selectedFile);
    } else {
      alert("Please select a file for proof submission.");
    }
  };

  return (
    <div className="card shadow-md">
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <button className="bordered" onClick={handleSubmit}>
          Submit Proof of Participation
        </button>
        {showSubmitFileButton && (
          <div>
            <input type="file" onChange={handleFileChange} />
            <button className="bordered" onClick={handleFileSubmit}>
              Submit File
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.instanceOf(Project).isRequired,
  onSubmitProof: PropTypes.func.isRequired,
};

export default ProjectCard;
