import { combineReducers } from 'redux';
import setting from '@store/modules/setting';
import projects from '@store/modules/projects';

const rootReducer = combineReducers({
    setting,
    projects
});

export default rootReducer;