import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showInfoLevelRecommended} from '../../../actions/recommendedSkills';
import Add from 'material-ui/svg-icons/content/add';
import Info from 'material-ui/svg-icons/action/info';


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
        console.log('props',this.props)
        return (
            <div>
                <div className=
                         "skills__item js-skill-item" data-id={this.props.id}>
                    <span className="skills__title">{this.props.name}</span>
                    <span className="skills__level">{this.props.level}</span>

                    <Info onClick={this.props.showInfo} style={{cursor: 'pointer'}}/>
                    <Add onClick={this.props.onAdd.bind(this, this.props)} style={{cursor: 'pointer'}}/>
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
        showInfo: (el) => dispatch(showInfoLevelRecommended(el))
    }
}

export default connect(null, mapDispatchToProps)(SkillItem)