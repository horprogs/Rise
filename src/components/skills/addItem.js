import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
    TextField
} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
//import styles from '../app/_common.scss'

const AddItem = (props) => {
    const {handleSubmit} = props;
    return (
        <div className="skills-new">
            <form className="js-skills-new" onSubmit={handleSubmit}>
                <Field name="value" component={TextField} type="text" className="js-skills-new-input" placeholder="Новый навык.."/>
                <RaisedButton type="submit" label="Добавить" primary={true} style={{marginLeft: '20px'}} className="btn btn--blue"/>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'addItem'
})(AddItem);