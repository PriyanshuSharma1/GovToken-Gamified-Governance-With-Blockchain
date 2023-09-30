"use client";

import React, { useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";

function ProjectsPage() {
  const [projects] = useState(MOCK_PROJECTS);

  return (
    <>
      <h1>Community Events</h1>
      <ProjectList projects={projects} />
    </>
  );
}
export default ProjectsPage;
