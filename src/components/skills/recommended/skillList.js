import React from 'react';
import SkillItem from './skillItem';

const SkillList = ({skills, onAdd}) => (
    <div className="skills">
        {
            skills.map((item) =>
                <SkillItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    level={item.level}
                    info={item.info}
                    progress={item.progress}
                    isShowTooltip={item.isShowTooltip}
                    isShowInfo={item.isShowInfo}
                    onAdd={onAdd}
                />
            )}
    </div>
);

export default SkillList;