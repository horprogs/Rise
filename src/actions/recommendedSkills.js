export function fetchRecommendedSkills() {
    return {
        type: 'FETCH_RECOMMENDED_SKILLS'
    }
}

export function showInfoLevelRecommended(e) {
    let id = e.target.closest('.js-skill-item').dataset.id;
    return {
        type: 'SHOW_INFO_LEVEL_RECOMMENDED',
        id
    }
}

export function addRecommendedItemToMe(e) {
    let id = e.target.closest('.js-skill-item').dataset.id;
    return {
        type: 'ADD_RECOMMENDED_ITEM_TO_ME',
        id
    }
}