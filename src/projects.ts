import Dash from "./images/dash.PNG"
import Antonios from './images/antonios.PNG'
import CanaryTech from './images/canarytech.PNG'
import Watson from './images/watson.jpg'
import Shell from './images/shell.PNG'
import TextSelectImage from './images/textSelect.PNG'
import DatabaseImage from './images/database.PNG'
import TravelogueImage from './images/travelogue.PNG'
import Shithead from './images/shithead.PNG'
import WordGuider from './images/word_guider.PNG'
import FocalPoint from './images/focal_point.PNG'

declare type Project = {
  name: string,
  tech: string,
  purpose: string,
  img: any,
  date: number,
  timeline: string,
  linkTo?: string
  tools?: string
}

export const Projects: Project[] = [
	{
		name: "Dash", tech: "Research, C#, XAML, HCI, UIUX", purpose: "Research Project", img: Dash,
		date: 999999, timeline: "April 2018 - Present", tools: "C#, XAML, UWP"
	},
	{
		name: "PDF Text Selection", date: 201810, img: TextSelectImage, timeline: "August 2018 - September 2018",
		tech: "Determining the best order of selecting text on a PDF", purpose: "Research Project"
	},
	{ name: "WordGuider", tech: "Python, OpenCV, NumPy", purpose: "School Project", img: WordGuider, date: 201904, timeline: "April 2019 - May 2019", tools: "Python, OpenCV, NumPy" },
	{ name: "Threes", tech: "React, Node JS", purpose: "Personal Project", img: Shithead, date: 201812, timeline: "December 2018 - January 2019", tools: "React, Node JS" },
	{ name: "Focal Point @ Brown", tech: "React, JavaScript", purpose: "Personal Project", img: FocalPoint, date: 201901, timeline: "January 26-27", tools: "React, JavaScript" },
	{
		name: "Antonio's Pizza Website Redesign", tech: "UIUX, HTML/CSS, JavaScript, Figma, Balsamiq", purpose: "School Project",
		img: Antonios, linkTo: "redesign.html", date: 201810, timeline: "October 2018", tools: "Figma, Balsamiq, HTML/CSS, JavaScript"
	},
	{
		name: "Canary Technologies", tech: "UIUX, Figma", img: CanaryTech, purpose: "School Project",
		linkTo: "iterative.html", date: 201811, timeline: "November 2018", tools: "Figma"
	},
	{
		name: "Design @ Watson Institute", tech: "Design, Adobe Illustrator, Adobe Photoshop", timeline: "September 2017 - June 2018",
		tools: "Adobe Illustrator, Adobe Photoshop", purpose: "Professional Project", img: Watson, date: 201800
	},
]

export const DashProjects: Project[] = [
	{
		name: "PDF Text Selection", date: 201810, img: TextSelectImage, timeline: "August 2018 - September 2018",
		tech: "Determining the best order of selecting text on a PDF", purpose: "Research Project"
	},
	{
		name: "PDF Database", date: 201811, img: DatabaseImage, timeline: "October 2018",
		tech: "Optimizing PDF loading through a database and caching layer", purpose: "Research Project"
	},
	{
		name: "Event Travelogue", date: 201811, img: TravelogueImage,
		tech: "Recording important actions and putting them in a travelogue", timeline: "November 2018 - Present", purpose: "Research Project"
	}
]