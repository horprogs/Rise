import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SkillList from '../components/skills/skillList';
import Header from '../components/header/header';
import AddItem from '../components/skills/addItem';
import {addSkill, deleteSkill} from '../actions/skills';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <AddItem onSubmit={this.props.addSkill}/>
                <SkillList
                    skills={this.props.skills}
                    onDeleteItem={this.props.deleteSkill}
                    //onChangeLevel={this.props.showTooltipLevel}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        skills: state.skills
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addSkill: bindActionCreators(addSkill, dispatch),
        deleteSkill: bindActionCreators(deleteSkill, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)