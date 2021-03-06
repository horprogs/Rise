import React from 'react';
import SkillItem from './skillItem';

const SkillList = ({skills, onDeleteItem, onChangeLevel, showTooltip}) => (
    <div className="skills">
        {skills.map((item) =>
            <SkillItem
                key={item.id}
                id={item.id}
                name={item.name}
                level={item.level}
                info={item.info}
                progress={item.progress}
                isShowTooltip={item.isShowTooltip}
                isShowInfo={item.isShowInfo}
                showTooltip={showTooltip}
                onDelete={onDeleteItem}
                onChangeLevel={onChangeLevel}
            />
        )}
    </div>
);

export default SkillList;