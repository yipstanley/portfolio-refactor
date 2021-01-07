import * as React from "react";
import "../css/stylesheets/Work.css"
import { Projects } from "../projects";
import Filterer from "./Filterer";
import ProjectCard from "./ProjectCard";
import Sorter from "./SortKey";

interface WorkProps {
    load: (where: string) => void;
}

export declare type StackLevelState = {
    Frontend: boolean,
    Middleware: boolean,
    Backend: boolean,
    "Non-coding": boolean};

export declare type ProjectTypeState = {
    School: boolean,
    Work: boolean,
    Personal: boolean};

interface WorkState {
    currentSortKey: string,
    stackLevel: StackLevelState,
    projectType: ProjectTypeState
}

export default class Work extends React.Component<WorkProps, WorkState> {
    constructor(props: WorkProps) {
        super(props);

        this.state = {
            currentSortKey: "Favorite",
            stackLevel: {
                Frontend: true,
                Middleware: true,
                Backend: true,
                "Non-coding": true,
            },
            projectType: {
                School: true,
                Work: true,
                Personal: true
            }
        }
    }

    componentDidMount = () => {

    }

    getProjects = () => {
        return Projects.sort((p1, p2) => {
            switch (this.state.currentSortKey) {
                case "Favorite":
                default:
                    return p1.defaultOrder - p2.defaultOrder;
                case "Difficulty":
                    return p2.difficulty - p1.difficulty;
                case "Latest":
                    return p2.date - p1.date;
                case "Earliest":
                    return p1.date - p2.date;
            }
        }).filter(project => {
            switch (project.purpose) {
                case "School Project":
                case "Research Project":
                    return this.state.projectType.School
                case "Professional Project":
                    return this.state.projectType.Work;
                case "Personal Project":
                    return this.state.projectType.Personal;
            }
        }).filter(project => {
            if (project.stackLevel === "Full") {
                return this.state.stackLevel.Frontend || this.state.stackLevel.Middleware || this.state.stackLevel.Backend;
            }
            else {
                return this.state.stackLevel[project.stackLevel];
            }
        });
    }

    filterItemClicked = (filterItem: string) => {
        if (Object.keys(this.state.projectType).includes(filterItem)) {
            const projectType = this.state.projectType;
            //@ts-ignore
            projectType[filterItem] = !projectType[filterItem];
            this.setState({projectType: projectType});
        }
        else if (Object.keys(this.state.stackLevel).includes(filterItem)) {
            const stackLevel = this.state.stackLevel;
            //@ts-ignore
            stackLevel[filterItem] = !stackLevel[filterItem];
            this.setState({stackLevel: stackLevel});
        }
    }
    
    render() {
        return (
            <div id="work-container">
                <div id="projects-container">
                    {this.getProjects().map(project => <ProjectCard key={project.name} project={project} openProject={this.props.load} />)}
                </div>
                <div id="settings-container">
                    <Sorter keyChanged={(newValue) => this.setState({currentSortKey: newValue})} currentKey={this.state.currentSortKey} />
                    <Filterer filterItemClicked={this.filterItemClicked} filterLabel="STACK LEVEL" filterOptions={
                        {
                            Frontend: "Projects that primarily focus on designing and implementing the parts that are visible to users",
                            Middleware: "Projects that connect the front end and the back end",
                            Backend: "Projects that primarily focus on the parts that are not visible, such as the database and internal structure",
                            "Non-coding": "Projects that contain little to no code"
                        }
                    } />
                    <Filterer filterItemClicked={this.filterItemClicked} filterLabel="PROJECT TYPE" filterOptions={
                        {
                            School: "Assignments and projects from my time in school",
                            Work: "Projects that I worked on in a professional environment",
                            Personal: "Projects I've done without external motivation"
                        }
                    } />
                </div>
            </div>
        )
    }
}