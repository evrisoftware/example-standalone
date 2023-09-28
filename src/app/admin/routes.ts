import { Route } from "@angular/router";
import { AdminHomeComponent } from "./admin-home.component";
import { AdminUsersComponent } from "./admin-users.component";
import { AdminComponent } from "./admin.component";

export default [
    { path: '', component: AdminComponent },
    { path: 'home', component: AdminHomeComponent },
    { path: 'users', component: AdminUsersComponent }
] as Route[];