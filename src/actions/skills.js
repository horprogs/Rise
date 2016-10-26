export function addSkill(data) {
    let name = data.value;
    return {
        type: 'ADD_SKILL',
        name
    }
}

export function deleteSkill(e) {
    let id = e.target.closest('.js-skill-item').dataset.id;
    return {
        type: 'DELETE_SKILL',
        id
    }
}

export function showTooltipLevel(e) {
    let id = e.target.closest('.js-skill-item').dataset.id;
    return {
        type: 'SHOW_TOOLTIP_LEVEL',
        id
    }
}

export function showInfoLevel(e) {
    let id = e.target.closest('.js-skill-item').dataset.id;
    return {
        type: 'SHOW_INFO_LEVEL',
        id
    }
}

export function changeLevel(level, e) {
    let id = e.target.closest('.js-skill-item').dataset.id;
    return {
        type: 'CHANGE_LEVEL',
        id,
        level
    }
}

export function closeTooltipLevel() {
    return {
        type: 'CLOSE_TOOLTIP_LEVEL',
    }
}

