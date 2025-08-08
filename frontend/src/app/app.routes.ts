import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MyKeys } from './pages/my-keys/my-keys';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'steam', component: Home },
    { path: 'playstation', component: Home },
    { path: 'nintendo-switch', component: Home },
    { path: 'my-keys', component: MyKeys },
];
