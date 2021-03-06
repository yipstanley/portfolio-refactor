import Dash from "./images/dash.PNG"
import Antonios from './images/antonios.PNG'
import CanaryTech from './images/canarytech.PNG'
import Watson from './images/watson.jpg'
import TextSelectImage from './images/textSelect.PNG'
import DatabaseImage from './images/database.PNG'
import TravelogueImage from './images/travelogue.PNG'
import Threes from './images/threes.PNG'
import Bach from "./images/bach.PNG";
import WordGuider from './images/word_guider.PNG'
import FocalPoint from './images/focal_point.PNG'

export declare type Project = {
  name: string,
  tech: string,
  purpose: "Research Project" | "School Project" | "Personal Project" | "Professional Project",
  img: any,
  date: number,
  timeline: string,
  desc: string,
  difficulty: number,
  defaultOrder: number,
  stackLevel: "Frontend" | "Middleware" | "Backend" | "Non-coding" | "Full",
  linkTo?: string
  tools?: string
}

export const Projects: Project[] = [
	{
		name: "Dash", tech: "Research, C#, XAML, HCI, UIUX", purpose: "Research Project", img: Dash,
		desc: "Long term research project with Prof. Andy van Dam", difficulty: 8, stackLevel: "Full",
		date: 202006, timeline: "April 2018 - May 2020", tools: "C#, XAML, UWP", defaultOrder: 0
	},
    {
		name: "Bach to the Future", tech: "Deep Learning, Tensorflow, GCP", purpose: "School Project", img: Bach,
		desc: "Generating Bach-style chorals with neural networks", difficulty: 7, stackLevel: "Backend",
        date: 201912, timeline: "November 2019 - December 2019", tools: "Python, Tensorflow, GCP", defaultOrder: 1
    },
	{ 
		name: "WordGuider", tech: "Python, OpenCV, NumPy", purpose: "School Project",
		desc: "Using your phone camera to live-translate words", difficulty: 6, defaultOrder: 2, stackLevel: "Full",
		img: WordGuider, date: 201904, timeline: "April 2019 - May 2019", tools: "Python, OpenCV, NumPy" },
	{ 
		name: "Threes", tech: "React, Node JS", purpose: "Personal Project",
		desc: "A fun 4-person online multiplayer card game", difficulty: 5, defaultOrder: 3, stackLevel: "Full",
		img: Threes, date: 201812, timeline: "December 2018 - January 2019", tools: "React, Node JS" },
	{ 
		name: "Focal Point @ Brown", tech: "React, JavaScript", purpose: "Personal Project",
		desc: "Redesigning a university database of concentrations", difficulty: 3, defaultOrder: 4, stackLevel: "Frontend",
		img: FocalPoint, date: 201901, timeline: "January 26-27", tools: "React, JavaScript" },
	{
		name: "Antonio's Pizza Website Redesign", tech: "UIUX, HTML/CSS, JavaScript, Figma, Balsamiq", purpose: "School Project",
		desc: "Redesigning a local Providence pizzeria's website", difficulty: 2, defaultOrder: 5, stackLevel: "Frontend",
		img: Antonios, linkTo: "redesign.html", date: 201810, timeline: "October 2018", tools: "Figma, Balsamiq, HTML/CSS, JavaScript"
	},
	{
		name: "Canary Technologies", tech: "UIUX, Figma", img: CanaryTech, purpose: "School Project",
		desc: "Designing an arbitrary interface for hotel employees", difficulty: 4, defaultOrder: 6, stackLevel: "Non-coding",
		linkTo: "iterative.html", date: 201811, timeline: "November 2018", tools: "Figma"
	},
	{
		name: "Design @ Watson Institute", tech: "Design, Adobe Illustrator, Adobe Photoshop", timeline: "September 2017 - June 2018",
		desc: "Some of my design work from a Freshman year job", difficulty: 3, defaultOrder: 7, stackLevel: "Non-coding",
		tools: "Adobe Illustrator, Adobe Photoshop", purpose: "Professional Project", img: Watson, date: 201800
	},
]

export const DashProjects: Project[] = [
	{
		name: "PDF Text Selection", date: 201810, img: TextSelectImage, timeline: "August 2018 - September 2018",
		desc: "Determining the best order of selecting text on a PDF", difficulty: 9, defaultOrder: 0, stackLevel: "Backend",
		tech: "C#, UWP, XAML", purpose: "Research Project"
	},
	{
		name: "PDF Database", date: 201811, img: DatabaseImage, timeline: "October 2018",
		desc: "Optimizing PDF loading through a database and caching layer", difficulty: 7, defaultOrder: 1, stackLevel: "Backend",
		tech: "C#, UWP, XAML, MongoDB", purpose: "Research Project"
	},
	{
		name: "Event Travelogue", date: 201811, img: TravelogueImage,
		desc: "Recording important actions and putting them in a travelogue", difficulty: 4, defaultOrder: 2,
		tech: "C#, UWP, XAML, MVVM", timeline: "November 2018 - Present", purpose: "Research Project", stackLevel: "Middleware",
	}
]