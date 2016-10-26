import { TOGGLE_LEFT_NAV } from '../actions/navigation';

const navigation = (state = {leftNavOpen: true}, action) => {
    switch (action.type) {
        case TOGGLE_LEFT_NAV:
            return {
                ...state,
                leftNavOpen: !state.leftNavOpen,
            };
        default:
            return state;
    }
}

export default navigation;