export const ADD_SKILL = 'ADD_SKILL';
export const DELETE_SKILL = 'DELETE_SKILL';
export const SHOW_TOOLTIP_LEVEL = 'SHOW_TOOLTIP_LEVEL';
export const SHOW_INFO_LEVEL = 'SHOW_INFO_LEVEL';
export const CHANGE_LEVEL = 'CHANGE_LEVEL';
export const CLOSE_TOOLTIP_LEVEL = 'CLOSE_TOOLTIP_LEVEL';
export const ADD_RECOMMENDED_ITEM_TO_ME = 'ADD_RECOMMENDED_ITEM_TO_ME';

export function addSkill(data) {
    let name = data.value;
    return {
        type: ADD_SKILL,
        name
    }
}

export function deleteSkill(e) {
    let id = e.target.closest('.js-skill-item').dataset.id;
    return {
        type: DELETE_SKILL,
        id
    }
}

export function showTooltipLevel(e) {
    let id = e.target.closest('.js-skill-item').dataset.id;
    return {
        type: SHOW_TOOLTIP_LEVEL,
        id
    }
}

export function showInfoLevel(e) {
    let id = e.target.closest('.js-skill-item').dataset.id;
    return {
        type: SHOW_INFO_LEVEL,
        id
    }
}

export function changeLevel(level, e) {
    let id = e.target.closest('.js-skill-item').dataset.id;
    return {
        type: CHANGE_LEVEL,
        id,
        level
    }
}

export function closeTooltipLevel() {
    return {
        type: CLOSE_TOOLTIP_LEVEL,
    }
}

export function addRecommendedItemToMe(item, e) {
    let id = e.target.closest('.js-skill-item').dataset.id;
    return {
        type: ADD_RECOMMENDED_ITEM_TO_ME,
        id,
        item
    }
}

