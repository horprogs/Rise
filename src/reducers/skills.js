const skills = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SKILL':
            return [
                ...state,
                {
                    name: action.name,
                    level: 'Novice',
                    progress: 0
                }
            ];


        case 'DELETE_SKILL':
            return state.filter((el) => el.id !== +action.id);


        case 'SHOW_TOOLTIP_LEVEL':
            return state.map((el) => {
                el.isShowTooltip = false;
                if (el.id === +action.id) {
                    el.isShowTooltip = true;
                }
                return el;
            });

        case 'CLOSE_TOOLTIP_LEVEL':
            return state.map((el) => {
                el.isShowTooltip = false;
                return el;
            });

        default:
            return state;
    }
};

export default skills;