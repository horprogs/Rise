import React from 'react';
import SkillItem from './skillItem';

const SkillList = ({skills, onDeleteItem, onChangeLevel}) => (
    <div className="skills">
        {skills.map((item) =>
            <SkillItem
                key={item.id}
                id={item.id}
                name={item.name}
                level={item.level}
                progress={item.progress}
                onDelete={onDeleteItem}
                onChangeLevel={onChangeLevel}
            />
        )}
    </div>
);

export default SkillList;