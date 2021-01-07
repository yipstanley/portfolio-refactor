import * as React from "react";
import "../css/stylesheets/Filterer.css"

declare type StackLevelData = {
    Frontend: string,
    Middleware: string,
    Backend: string,
    "Non-coding": string
}

declare type ProjectTypeData = {
    School: string,
    Work: string,
    Personal: string
}

interface FiltererProps {
    filterItemClicked: (filterItem: string) => void;
    filterOptions: StackLevelData | ProjectTypeData;
    filterLabel: string
}

export default class Filterer extends React.Component<FiltererProps, {}> {
    render() {
        return (
            <div className="setting-container">
                <div className="setting-label">
                    {this.props.filterLabel}:
                </div>
                {Object.entries(this.props.filterOptions).map(item => {
                    return (
                        <FilterItem
                            key={item[0]}
                            item={item}
                            clicked={() => this.props.filterItemClicked(item[0])} />
                    );
                })}
            </div>
        )
    }
}

interface FilterItemProps {
    clicked: () => void,
    item: [string, string]
}

interface FilterItemState {
    checked: boolean,
    showToolTip: boolean,
}

class FilterItem extends React.Component<FilterItemProps, FilterItemState> {
    constructor(props: FilterItemProps) {
        super(props);

        this.state = {
            checked: true,
            showToolTip: false
        }
    }

    clicked = () => {
        this.setState({
            checked: !this.state.checked
        });
        this.props.clicked();
    }

    render() {
        const [key, desc] = this.props.item;

        return (
            <div
                className={`filter-item ${this.state.checked ? "checked" : ""}`}
                key={key}
                onClick={this.clicked}>
                {key}
                <div
                    className="question-button"
                    onMouseEnter={() => this.setState({showToolTip: true})}
                    onMouseLeave={() => this.setState({showToolTip: false})}>
                    ?
                </div>
                <div className="tooltip" style={{opacity: this.state.showToolTip ? 1 : 0 }}>
                    {desc}
                </div>
            </div>
        )
    }
}