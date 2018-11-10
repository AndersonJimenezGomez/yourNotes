import { RouterModule, Routes} from "@angular/router";

import {SignInComponent} from './sign-in/sign-in.component';
import {LoginComponent} from './login/login.component';

const APP_ROUTES: Routes =[
    {path: 'signIn', component: SignInComponent},
    {path: 'login', component: LoginComponent},
    {path:'**', pathMatch:'full', redirectTo:''}
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);