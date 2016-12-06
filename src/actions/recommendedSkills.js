export const FETCH_RECOMMENDED_SKILLS = 'FETCH_RECOMMENDED_SKILLS';
export const SHOW_INFO_LEVEL_RECOMMENDED = 'SHOW_INFO_LEVEL_RECOMMENDED';

export function fetchRecommendedSkills() {
    return {
        type: FETCH_RECOMMENDED_SKILLS
    }
}

export function showInfoLevelRecommended(e) {
    let id = e.target.closest('.js-skill-item').dataset.id;
    return {
        type: SHOW_INFO_LEVEL_RECOMMENDED,
        id
    }
}

