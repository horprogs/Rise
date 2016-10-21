import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import Levels from '../../model/levels';
import {closeTooltipLevel} from '../../actions/skills';


class Tooltip extends Component {
    onClose() {
        this.props.onClose();
    }

    componentWillMount() {
        document.addEventListener('click', this.props.onClose, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.props.onClose, false);
    }

    render() {
        return (
            <div className="skills-tooltip">
                {Levels.map((el, i) =>
                    <a href="#" key={i} className="skills-tooltip__item js-change-level" data-level={el}>{el}</a>
                )}
            </div>
        )
    }
}

class SkillItem extends Component {
    render() {
        return (
            <div className=
                     "skills__item js-skill-item" data-id={this.props.id}>
                <span className="skills__title">{this.props.name}</span>
                <span className="skills__level">{this.props.level}</span>
                <a href="#" className="skills__change" onClick={this.props.showTooltip}>
                    {!this.props.isShowTooltip || <Tooltip onClose={this.props.closeTooltipLevel}/>}
                    Edit
                </a>
                <a href="#" className="skills__change">Info</a>
                <a href="#" className="skills__delete" onClick={this.props.onDelete}>Delete</a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeTooltipLevel: () => dispatch(closeTooltipLevel())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SkillItem)