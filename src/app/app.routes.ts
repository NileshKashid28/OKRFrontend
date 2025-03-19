import { Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { SidebarComponent } from './sidebar/sidebar.component';
export const routes: Routes = [
    {
        path: "",
        component: SidebarComponent,
        title: "Side"
    },
    {
        path: "create-user",
        component: CreateUserComponent,
        title: "createuser"
    }
];
