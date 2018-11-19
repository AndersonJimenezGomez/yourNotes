import { RouterModule, Routes} from "@angular/router";

import {HomeComponent} from './components/home/home.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {LoginComponent} from './components/login/login.component';
import {AboutComponent} from './components/about/about.component';

const APP_ROUTES: Routes =[
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'signUp', component: SignUpComponent},
    {path: 'login', component: LoginComponent},
    {path:'**', pathMatch:'full', redirectTo:''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);