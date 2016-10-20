const skills = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SKILL':
        {
            return [
                ...state,
                {
                    name: action.name,
                    level: 'Novice',
                    progress: 0
                }
            ];
        }

        case 'DELETE_SKILL':
        {
            const id = +action.id;
            return state.filter((el) => el.id !== id);
        }

        default:
            return state;
    }
};

//const skills = (state = [], action) => {
//    switch (action.type) {
//        case 'ADD_SKILL':
//            return [
//                ...state,
//                skill(undefined, action)
//            ]
//        default:
//            return state;
//    }
//};

export default skills;