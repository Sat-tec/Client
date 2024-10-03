import { Routes } from '@angular/router';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';
import { SignInComponent } from './Components/Auth/sign-in/sign-in.component';
import { LayoutComponent } from './Components/Admin/layout/layout.component';
import { DashboardComponent } from './Components/Admin/dashboard/dashboard.component';
import { Dashboard2Component } from './Components/Admin/dashboard2/dashboard2.component';
import { Dashboard3Component } from './Components/Admin/dashboard3/dashboard3.component';
import { AuthGuard } from './services/auth.guard'; // Import the AuthGuard

export const routes: Routes = [
    {
        path:"",
        component: SignInComponent,
        pathMatch: "full"
    },
    {
        path:"signin",
        component: SignInComponent,
    },

    {
        path:"signup",
        component: SignUpComponent
    },

    {
        path:"",
        component: LayoutComponent,
        children:[
            {
                path:'dashboard',
                component: DashboardComponent,
                title: 'Dashboard',
                canActivate: [AuthGuard]
            },

            {
                path:'dashboard2',
                component: Dashboard2Component,
                title: 'Dashboard 2',
                canActivate: [AuthGuard]
            },

            {
                path:'dashboard3',
                component: Dashboard3Component,
                title: 'Dashboard 2',
                canActivate: [AuthGuard]
            },
        ]
    },

];
