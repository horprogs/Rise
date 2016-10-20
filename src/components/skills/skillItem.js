import React from 'react';
import { render } from 'react-dom';
import Levels from '../../model/levels';

let my;

const onChangeLevel = (e) => {
    if (my) {
        render.unmountComponentAtNode();
    }
    my = render(
        <div>
            {Levels.map((el, i) =>
                <a href="#" key={i} className="skills-tooltip__item js-change-level" data-level={el}>{el}</a>
            )}
        </div>,
        e.target.children[0]
    )
};

const SkillItem = ({ name, level, progress, id, onDelete }) => (
    <div className="skills__item js-skill-item" data-id={id}>
        <span className="skills__title">{name}</span>
        <span className="skills__level">{level}</span>
        <a href="#" className="skills__change" onClick={onChangeLevel}>
            <div className="skills-tooltip"></div>
            Edit
        </a>
        <a href="#" className="skills__change">Info</a>
        <a href="#" className="skills__delete" onClick={onDelete}>Delete</a>
    </div>
);

export default SkillItem;