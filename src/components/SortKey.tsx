import * as React from "react";
import "../css/stylesheets/SortKey.css"

interface SortKeyState {
    currentKey: string,
}

export const SortableKeys: {[key: string]: string} = {
    Favorite: "See my favorite projects first",
    Difficulty: "See my most challenging projects first",
    Latest: "See my most recent projects first",
    Earliest: "See my oldest projects first",
} 

export default class SortKey extends React.Component<{}, SortKeyState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            currentKey: "Favorite",
        }
    }

    render() {
        return (
            <div id="sort-key-container">
                <div id="sort-key-label">
                    SORT BY:
                </div>
                {Object.entries(SortableKeys).map(item => {
                    return (
                        <SortItem key={item[0]} currentKey={this.state.currentKey} item={item} clicked={() => this.setState({currentKey: item[0]})} />
                    );
                })}
            </div>
        )
    }
}

interface SortItemProps {
    currentKey: string,
    item: [string, string],
    clicked: () => void
}

interface SortItemState {
    showToolTip: boolean;
}

class SortItem extends React.Component<SortItemProps, SortItemState> {
    constructor(props: SortItemProps) {
        super(props);

        this.state = {
            showToolTip: false
        }
    }

    render() {
        const [key, desc] = this.props.item
        return (
            <div
                className="sort-key-item"
                id={this.props.currentKey === key ? "current-key" : ""}
                key={key}
                onClick={this.props.clicked}>
                {key}
                <div
                    className="sort-key-question"
                    onMouseEnter={() => this.setState({showToolTip: true})}
                    onMouseLeave={() => this.setState({showToolTip: false})}>
                    ?
                </div>
                <div className="sort-key-tooltip" style={{opacity: this.state.showToolTip ? 1 : 0 }}>
                    {desc}
                </div>
            </div>
        )
    }
}