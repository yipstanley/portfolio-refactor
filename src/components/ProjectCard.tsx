import * as React from "react";
import {Project} from "../projects"
import "../css/stylesheets/ProjectCard.css"

interface ProjectCardProps {
    project: Project,
    openProject: (projectName: string) => void;
}

export default class ProjectCard extends React.Component<ProjectCardProps, {}> {
    render() {
        return(
			<div className="project-card-cont">
				<div className="project-img-cont">
					<img className="project-img" src={this.props.project.img}
						height="100%" onClick={() => this.props.openProject(this.props.project.name)} />
				</div>
				<div className="project-name">
					{this.props.project.name}
				</div>
				<div className="project-desc">
					{this.props.project.desc}
				</div>
			</div>
        )
    }
}