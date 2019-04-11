
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import { Form, HasError, AlertError } from 'vform';

import Gate from './Gate';
Vue.prototype.$gate = new Gate(window.user);
// Vue.prototype.$tinymce = new Gate(window.tinyMCE);


import Swal from 'sweetalert2'
window.swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.toast = Toast;

window.Form = Form;

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueProgressBar from 'vue-progressbar';
Vue.use(VueProgressBar,{
    color: 'rgb(143,255,199)',
    failedColor: 'red',
    height: '3px'
});

let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue').default },
    { path: '/developer', component: require('./components/Developer.vue').default },
    { path: '/profile', component: require('./components/Profile.vue').default },
    { path: '/users', component: require('./components/Users.vue').default },
    { path: '/roles', component: require('./components/Roles.vue').default },
    { path: '/post', component: require('./components/Post.vue').default },
    { path: '/memo', component: require('./components/Memo.vue').default },
    { path: '/announcement', component: require('./components/Announcement.vue').default },
    { path: '*', component: require('./components/NotFound.vue').default }

]

const router = new VueRouter({
    mode:'history',
    routes
});
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
import moment from 'moment';
Vue.filter('upText', function(text){
    return text.toUpperCase();
});

Vue.filter('dateFormat', function(datecreated){
    return moment(datecreated).format('MMMM DD YYYY');
});
window.Fire = new Vue();

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);

Vue.component(
    'not-found',
    require('./components/NotFound.vue').default
);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('pagination', require('laravel-vue-pagination'));
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

Vue.use( CKEditor );
window.ClassicEditor = ClassicEditor;

// import Editor from '@tinymce/tinymce-vue';
// window.editor = Editor;
// var editor_config = {
//     path_absolute : "",
//     selector: "textarea[name=body]",
//     skin_url: "skins/lightgray",
//     plugins: [
//         "image link"
//     ],
//     relative_urls: false,
//     height: 129,
//     file_browser_callback : function(field_name, url, type, win) {
//         var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
//         var y = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight;

//         var cmsURL = editor_config.path_absolute + route_prefix + '?field_name=' + field_name;
//         if (type == 'image') {
//         cmsURL = cmsURL + "&type=Images";
//         } else {
//         cmsURL = cmsURL + "&type=Files";
//         }

//         tinyMCE.activeEditor.windowManager.open({
//         file : cmsURL,
//         title : 'Filemanager',
//         width : x * 0.8,
//         height : y * 0.8,
//         resizable : "yes",
//         close_previous : "no"
//         });
//     }
//     };

//     Editor.init(editor_config);
Vue.component('editor', require('@tinymce/tinymce-vue').default);

// import Tinymce from 'tinymce/tinymce.min';
// window.tinymce = Tinymce;
// import 'tinymce/themes/modern/theme';
// import 'tinymce/plugins/paste/plugin';
// import 'tinymce/plugins/link/plugin';
// import 'tinymce/plugins/image/plugin';
// import 'tinymce/plugins/autoresize/plugin';

const app = new Vue({
    el: '#app',
    router,
    data:{
        search: ''
    },
    // components: {
    // 'editor': Editor // <- Important part
    // },
    methods:{
        searchgrid: _.debounce(() => {
            Fire.$emit('searching');
        },1000)
    }
});




