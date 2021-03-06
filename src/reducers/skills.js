import {ADD_SKILL, DELETE_SKILL, SHOW_TOOLTIP_LEVEL, SHOW_INFO_LEVEL, CLOSE_TOOLTIP_LEVEL, CHANGE_LEVEL, ADD_RECOMMENDED_ITEM_TO_ME}
    from '../actions/skills';

const skills = (state = [], action) => {
    switch (action.type) {
        case ADD_SKILL:
            let max = 0;
            state.map((el) => {
                if (el.id > max) {
                    max = el.id;
                }
            })
            if (!action.name) {
                return;
            }
            return [
                ...state,
                {
                    id: max + 1,
                    name: action.name,
                    level: 'Novice',
                    progress: 0
                }
            ];

        case DELETE_SKILL:
            return state.filter((el) => el.id !== +action.id);

        case SHOW_TOOLTIP_LEVEL:
            return state.map((el) => {
                el.isShowTooltip = false;
                if (el.id === +action.id) {
                    el.isShowTooltip = true;
                }
                return el;
            });

        case SHOW_INFO_LEVEL:
            return state.map((el) => {
                if (el.id === +action.id) {
                    el.isShowInfo = !el.isShowInfo;
                }
                return el;
            });

        case CLOSE_TOOLTIP_LEVEL:
            return state.map((el) => {
                el.isShowTooltip = false;
                return el;
            });

        case CHANGE_LEVEL:
            return state.map((el) => {
                if (el.id === +action.id) {
                    el.level = action.level;
                }
                return el;
            });

        case ADD_RECOMMENDED_ITEM_TO_ME:
            let nextState = Object.assign([], state);
            let isNotExist = state.every(el => +el.id !== +action.id);
            if (!isNotExist) {
                return nextState;
            }
            console.log(action.item)
            nextState.push(action.item);
            return nextState;

        default:
            return state;
    }
};

export default skills;