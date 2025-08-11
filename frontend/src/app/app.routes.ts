import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MyKeys } from './pages/my-keys/my-keys';
import { Steam } from './pages/steam/steam';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'steam', component: Steam },
    { path: 'playstation', component: Home },
    { path: 'nintendo-switch', component: Home },
    { path: 'my-keys', component: MyKeys },
];
