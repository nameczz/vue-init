import Vue from 'vue'
import Router from 'vue-router'
import 'common/stylus/index.styl'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/admin',
        name: 'admin',
        component: function(resolve) {
            require(['components/admin/admin'], resolve);
        }
    }]
})