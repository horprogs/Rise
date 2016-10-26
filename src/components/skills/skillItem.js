import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import Levels from '../../model/levels';
import {closeTooltipLevel, changeLevel, showInfoLevel} from '../../actions/skills';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';
import Info from 'material-ui/svg-icons/action/info';
import Slider from 'material-ui/Slider';


class Tooltip extends Component {
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
                    <div
                        key={i}
                        className="skills-tooltip__item js-change-level"
                        data-level={el}
                        onClick={this.props.onChangeLevel.bind(null, el)}>{el}
                    </div>
                )}
            </div>
        )
    }
}

class ShowInfo extends Component {
    render() {
        if (this.props.isShowInfo && this.props.info) {
            return (
                <div className="skills-info">{this.props.info}</div>
            )
        }
        return null;
    }
}

class SkillItem extends Component {
    render() {
        return (
            <div>
                <div className=
                         "skills__item js-skill-item" data-id={this.props.id}>
                    <span className="skills__title">{this.props.name}</span>
                    <span className="skills__level">{this.props.level}</span>
                    <Slider
                        className="skills__slider"
                        sliderStyle={{margin: '0'}}
                        min={0}
                        max={100}
                        step={1}
                        defaultValue={this.props.progress}/>
                    <span>
                        <Edit onClick={this.props.showTooltip} style={{cursor: 'pointer'}}/>
                        {!this.props.isShowTooltip ||
                        <Tooltip
                            onClose={this.props.closeTooltipLevel}
                            onChangeLevel={this.props.changeLevel}/>}
                    </span>

                    <Info onClick={this.props.showInfo} style={{cursor: 'pointer'}}/>
                    <Delete onClick={this.props.onDelete} style={{cursor: 'pointer'}}/>

                </div>
                <ShowInfo
                    isShowInfo={this.props.isShowInfo}
                    info={this.props.info}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeTooltipLevel: () => dispatch(closeTooltipLevel()),
        changeLevel: (el, level) => dispatch(changeLevel(el, level)),
        showInfo: (el) => dispatch(showInfoLevel(el))
    }
}


export default connect(null, mapDispatchToProps)(SkillItem)