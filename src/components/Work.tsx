import * as React from "react";
import "../css/stylesheets/Work.css"

export default class Work extends React.Component<{}, {}> {
    componentDidMount = () => {

    }
    
    render() {
        return (
            <div id="work-container">
                <div className="work-project"></div>
                <div className="work-project"></div>
                <div className="work-project"></div>
                <div className="work-project"></div>
                <div className="work-project"></div>
                <div className="work-project"></div>
            </div>
        )
    }
}