import * as React from "react";
import { LinkAwayStyle, LinkContainerAwayStyle, LinkContainerHomeStyle, NameAwayStyle } from "../css/styleBlocks/Home";
import "../css/stylesheets/Home.css"
import Me from "../images/me.jpg";
import Resume from "../images/Yip.Stanley.2021.pdf"
import { sleep } from "../utils";
import { Paths } from "./App";

const identities = ["a pianist", "a graphic designer", "a student", "a son", "a low-income student",
	"a musician", "a leader", "a grandson", "a brother", "an optimist", "a first-generation student", "a programmer"];

interface HomeState {
    identity: string,
    homeOpacity: number,
    homeDisplay: string
    linksContStyle: {},
    linkStyle: {},
    nameStyle: {},
}

interface HomeProps {
    thirdifyBackgrounds: () => void;
    unthirdifyBackgrounds: () => void;
    shiftBackgrounds: () => void;
    unshiftBackgrounds: () => void;
    load: (where: string) => void;
    page: string;
}

export default class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);

        const fullyLoadPage = this.props.page === Paths.Home || this.props.page === Paths.Root;
        this.state = {
            identity: identities[2],
            homeOpacity: fullyLoadPage ? 1 : 0,
            homeDisplay: fullyLoadPage ? "" : "none",
            linkStyle: fullyLoadPage ? {} : LinkAwayStyle,
            linksContStyle: fullyLoadPage ? LinkContainerHomeStyle : LinkContainerAwayStyle,
            nameStyle: fullyLoadPage ? {} : NameAwayStyle
        }
    }

    leaveHome = async (to: string) => {
        this.setState({homeOpacity: 0});
        await sleep(550);
        this.props.thirdifyBackgrounds();
        await sleep(550);
        this.props.load(to);
        await sleep(550);
        this.props.shiftBackgrounds();
        this.setState({
            linksContStyle: LinkContainerAwayStyle,
            homeDisplay: "none",
            nameStyle: NameAwayStyle,
        });
        await sleep(550);
        this.setState({
            linkStyle: LinkAwayStyle,
        })
    }

    returnHome = async () => {
        this.setState({
            linksContStyle: LinkContainerHomeStyle,
            nameStyle: {},
        })
        this.props.unshiftBackgrounds();
        await sleep(550);
        this.setState({
            linkStyle: {},
        })
        await sleep(550);
        this.setState({
            homeDisplay: ""
        })
        this.props.unthirdifyBackgrounds();
        this.props.load(Paths.Home);
        await sleep(550);
        this.setState({homeOpacity: 1});
    }

    render() {
        return (
            <div id="home">
                <div id="hey-there" style={{opacity: this.state.homeOpacity, display: this.state.homeDisplay}}>Hey there!</div>

                <div id="sentence-student" style={{opacity: this.state.homeOpacity, display: this.state.homeDisplay}}>
					I'm a junior studying CS at <strong>Brown University</strong> that wants to make people's lives easier.
				</div>
                <div id="sentence-identity" style={{opacity: this.state.homeOpacity, display: this.state.homeDisplay}}>
					I'm also {this.state.identity}.
				</div>

				<div className="avenir" id="home-learn" style={{opacity: this.state.homeOpacity, display: this.state.homeDisplay}}>Learn more about me</div>

				<div id="home-links-cont" style={this.state.linksContStyle}>
                    <div id="sentence-name" style={this.state.nameStyle}>
                        <span style={{opacity: this.state.homeOpacity}}>My name is </span>
                        <b style={{color: "#FAA52D", fontWeight: 600}} onClick={this.returnHome}>Stanley Yip</b>
                    </div>
					<div className="home-links" style={this.state.linkStyle} onClick={() => this.leaveHome(Paths.Work)}>WORK</div>
					<div className="home-links" style={this.state.linkStyle}  onClick={() => this.leaveHome(Paths.About)}>ABOUT</div>
					<div className="home-links" style={this.state.linkStyle}  onClick={() => window.open(Resume, "_blank")}>RESUME</div>
				</div>
                
                <img src={Me} id="me" style={{opacity: this.state.homeOpacity, display: this.state.homeDisplay}} />
            </div>
        )
    }
}