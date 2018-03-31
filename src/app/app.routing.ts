import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {UsersComponent} from "./users/users.component";
import {EditComponent} from "./edit/edit.component";
import {AddUserComponent} from "./add-user/add-user.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'edit/:user', component: EditComponent, canActivate: [AuthGuard] },
    { path: 'user/add', component: AddUserComponent, canActivate: [AuthGuard]},

    // otherwise redirect to home
    { path: '**', redirectTo: '/' }
];

export const routing = RouterModule.forRoot(appRoutes);
