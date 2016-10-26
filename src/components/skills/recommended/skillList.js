import React from 'react';
import SkillItem from './skillItem';

const SkillList = ({skills}) => (
    <div className="skills">
        {skills.map((item) =>
            <SkillItem
                key={item.id}
                id={item.id}
                name={item.name}
                level={item.level}
                info={item.info}
                isShowInfo={item.isShowInfo}
            />
        )}
    </div>
);

export default SkillList;