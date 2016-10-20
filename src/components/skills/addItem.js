import React from 'react';
import { Field, reduxForm } from 'redux-form'

const AddItem = (props) => {
    const {handleSubmit} = props;
    return (
        <div className="skills-new">
            <form className="js-skills-new" onSubmit={handleSubmit}>
                <Field name="value" component="input" type="text" className="skills-new__input js-skills-new-input" placeholder="New skill.."/>
                <input type="submit" className="btn btn--blue" value="Add"/>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'addItem'
})(AddItem);