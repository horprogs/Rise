const skills = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_INFO_LEVEL_RECOMMENDED':
            return state.map((el) => {
                if (el.id === +action.id) {
                    el.isShowInfo = !el.isShowInfo;
                }
                return el;
            });

        //case 'ADD_RECOMMENDED_ITEM_TO_ME':
        //    //state.map((el) => {
        //    //    if (el.id === +action.id) {
        //    //        el.isShowInfo = !el.isShowInfo;
        //    //    }
        //    //});
        //    stateSkill.push({
        //        id: 3,
        //        name: 'JavaScript2',
        //        level: 'Intermediate',
        //        info: 'Info JavaScript',
        //        progress: 40,
        //        isShowTooltip: false,
        //        isShowInfo: false
        //    });
        //    break;


        default:
            return state;
    }
};

export default skills;