import Home from '~/pages/Home/Home.js';
import Following from '~/pages/Following/Following.js';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
import UploadLayout from '~/components/Layout/UploadLayout/UploadLayout';

// pulic roter là những compunent mà khi ko login thi người dung se nhin thay
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: UploadLayout },
];
// private router thi nguoc lai nhung luc ma nguoi dung login vao thì private router moi nhin thay
const privateRouters = [];

export { publicRoutes, privateRouters };
