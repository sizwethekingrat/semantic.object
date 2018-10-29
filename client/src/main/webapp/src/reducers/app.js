var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

//This is a simple app state holder

import {UPDATE_PAGE, UPDATE_OFFLINE, OPEN_SNACKBAR, CLOSE_SNACKBAR, UPDATE_DRAWER_STATE} from '../actions/app.js';

const app = (state = {drawerOpened: false}, action) => {
    switch (action.type) {
        case UPDATE_PAGE:
            return _extends({}, state, {
                page: action.page
            });
        case UPDATE_OFFLINE:
            return _extends({}, state, {
                offline: action.offline
            });
        case UPDATE_DRAWER_STATE:
            return _extends({}, state, {
                drawerOpened: action.opened
            });
        case OPEN_SNACKBAR:
            return _extends({}, state, {
                snackbarOpened: true
            });
        case CLOSE_SNACKBAR:
            return _extends({}, state, {
                snackbarOpened: false
            });
        default:
            return state;
    }
};

export default app;
