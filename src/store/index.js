import {createStore} from 'vuex';

import couchesModule from './modules/coaches/index.js';

const store = createStore({
    modules: {
        coaches: couchesModule
    }
});

export default store;