import logo from './logo.svg';
import '../css/stylesheets/App.css';
import * as React from "react";
import { sleep } from '../utils';
import Home from "./Home"
import Work from './Work';
import { DashProjects, Projects } from '../projects';
import { GreenLeftShiftedStyle, GreenLeftThirdifiedStyle, GreenRightShiftedStyle, PageDisplayerLoadedStyle, PageDisplayerShiftedStyle, WhiteCenterShiftedStyle, WhiteCenterThirdifiedStyle } from '../css/styleBlocks/App';

interface AppState {
	page: string,
	startingText?: string,
	loaded: boolean,
	greenLeftStyle?: Object,
	greenRightStyle?: Object,
	whiteCenterStyle?: Object
	pageDisplayerStyle?: Object
}

export enum Paths {
    Root = "",
    Home = "home",
    About = "about",
    Work = "work",
    Dash = "dash",
    DashPDF = "pdf%20text%20selection",
    DashDB = "pdf%20database",
    DashTravelogue = "event%20travelogue",
    Threes = "threes",
    WordGuider = "wordguider",
    FocalPoint = "focal%20point%20%40%20brown",
    Redesign = "antonio's%20pizza%20website%20redesign",
    Iterative = "canaray%20technologies",
    Watson = "design%20%40%20watson%20institute",
    Bach = "bach%20to%20the%20future"
}

export default class App extends React.Component<{}, AppState> {
	constructor(props: {}) {
		super(props);

		this.state = {
			page: this.getPageStateFromPath(),
			loaded: false,
		}
	}

	public getPageStateFromPath = (): string => {
		const pathname = window.location.pathname;
		const page = decodeURIComponent(pathname.slice(1));
		console.log(page);
		return page;
	}

	public componentDidMount = () => {
		if (this.state.page === Paths.Root) {
			this.animateStart();
		}
		else if (this.state.page === Paths.Home) {
			this.setState({
				loaded: true
			})
		}
		else {
			this.setState({
				loaded: true,
				greenLeftStyle: GreenLeftShiftedStyle,
				whiteCenterStyle: WhiteCenterShiftedStyle,
				greenRightStyle: GreenRightShiftedStyle,
				pageDisplayerStyle: PageDisplayerShiftedStyle
			});
		}
	}

	private animateStart = async () => {
		await sleep(100);
		for (let i = 0; i <= "Hey there!".length; i++) {
			this.setState({startingText: "Hey there!".substr(0, i)})

			await sleep(i === 3 ? 300 : 100);
		}
		await sleep(500);
		this.setState({loaded: true});
	}

	renderContent = () => {
		switch (this.state.page) {
			case Paths.Work:
				return <Work load={this.load} />;
		}
	}

	load = (where: string) => {
		if (where === Paths.Home) {
			this.setState({
				page: where,
				pageDisplayerStyle: {}
			})
		}
		else {
			this.setState({
				page: where,
				pageDisplayerStyle: PageDisplayerLoadedStyle
			});
		}
	}

    thirdifyBackgrounds = () => {
        this.setState({
			greenLeftStyle: GreenLeftThirdifiedStyle,
			whiteCenterStyle: WhiteCenterThirdifiedStyle
		})
	}

	unthirdifyBackgrounds = () => {
		this.setState({
			greenLeftStyle: {},
			whiteCenterStyle: {},
		})
	}
	
	shiftBackgrounds = () => {
		this.setState({
			greenLeftStyle: GreenLeftShiftedStyle,
			whiteCenterStyle: WhiteCenterShiftedStyle,
			greenRightStyle: GreenRightShiftedStyle,
			pageDisplayerStyle: PageDisplayerShiftedStyle
		});
	}

	unshiftBackgrounds = () => {
		this.setState({
			greenLeftStyle: GreenLeftThirdifiedStyle,
			whiteCenterStyle: WhiteCenterThirdifiedStyle,
			greenRightStyle: {},
			pageDisplayerStyle: {}, 
		});
	}
	
	render() {
		return (
			<div id="main-cont">
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.0-alpha/dist/katex.min.css" integrity="sha384-BTL0nVi8DnMrNdMQZG1Ww6yasK9ZGnUxL1ZWukXQ7fygA1py52yPp9W4wrR00VML" crossOrigin="anonymous"></link>
				
				<div id="background">
					<div id="green-left" style={this.state.greenLeftStyle} />
					<div id="white-center" style={this.state.whiteCenterStyle} />
					<div id="green-right" style={this.state.greenRightStyle} />
				</div>
				<Home
					thirdifyBackgrounds={this.thirdifyBackgrounds}
					unthirdifyBackgrounds={this.unthirdifyBackgrounds}
					shiftBackgrounds={this.shiftBackgrounds}
					unshiftBackgrounds={this.unshiftBackgrounds}
					load={this.load}
					page={this.state.page} />
				<div id="page-displayer" style={this.state.pageDisplayerStyle}>
					{this.renderContent()}
				</div>

				<div id="cover-pane" style={{opacity: this.state.loaded ? 0 : 1}}>
					<div id="cover-hey-there">
						{this.state.startingText}
					</div>
				</div>
			</div>
		);
	}
}