import * as React from "react";
import "../css/stylesheets/Work.css"
import { Projects } from "../projects";
import ProjectCard from "./ProjectCard";
import SortKey from "./SortKey";

interface WorkProps {
    load: (where: string) => void;
}

export default class Work extends React.Component<WorkProps, {}> {
    componentDidMount = () => {

    }
    
    render() {
        return (
            <div id="work-container">
                <div id="projects-container">
                    {Projects.map(project => <ProjectCard project={project} openProject={this.props.load} />)}
                </div>
                <div id="settings-container">
                    <SortKey />
                </div>
            </div>
        )
    }
}