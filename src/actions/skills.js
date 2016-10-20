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

//export function deleteSkill(e) {
//    let id = e.target.closest('.js-skill-item').dataset.id;
//    return {
//        type: 'DELETE_SKILL',
//        id
//    }
//}