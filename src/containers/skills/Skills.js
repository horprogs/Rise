import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SkillList from '../../components/skills/skillList';
import RecommendedSkillList from '../../components/skills/recommended/skillList';
import AddItem from '../../components/skills/addItem';
import {addSkill, deleteSkill, showTooltipLevel, closeTooltipLevel} from '../../actions/skills';

class Skills extends Component {
    render() {
        console.log(this.props.recommendedSkills)
        return (
            <div>
                <h1>Мои навыки</h1>
                <br/>
                <h3>Добавить навык</h3>
                <AddItem onSubmit={this.props.addSkill}/>
                <SkillList
                    skills={this.props.skills}
                    onDeleteItem={this.props.deleteSkill}
                    showTooltip={this.props.showTooltipLevel}
                />
                <h2>Рекомендуемые навыки</h2>
                <RecommendedSkillList
                    skills={this.props.recommendedSkills}
                />
            </div>
        )
    }
}

//function mapStateToProps(state) {
//    return {
//        skills: state.skills,
//        recommendedSkills: state.recommendedSkills
//    }
//}
//
//function mapDispatchToProps(dispatch) {
//    return {
//        addSkill: bindActionCreators(addSkill, dispatch),
//        deleteSkill: bindActionCreators(deleteSkill, dispatch),
//        showTooltipLevel: bindActionCreators(showTooltipLevel, dispatch),
//        closeTooltipLevel: () => dispatch(closeTooltipLevel)
//    }
//}

export default connect((state) =>
        ({
            skills: state.skills,
            recommendedSkills: state.recommendedSkills
        }),
    dispatch => bindActionCreators({
        addSkill,
        deleteSkill,
        showTooltipLevel,
        closeTooltipLevel
    }, dispatch))(Skills)