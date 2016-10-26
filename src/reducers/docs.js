import { FETCH_DOCS } from '../actions/docs';
import ModelDocs from '../model/docs';

export default function (state = {docs: ModelDocs}, action) {
    switch (action.type) {
        case FETCH_DOCS:
            return state;
        default:
            return state;
    }
}
