import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateUserComponent } from './create-user/create-user.component';
// import { RemoveUserComponent } from './remove-user/remove-user.component';
// import { CreateGroupComponent } from './create-group/create-group.component';
// import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
 {path:'create-user',component:CreateUserComponent}
//   { path: 'create-user', component: CreateUserComponent },
//   { path: 'remove-user', component: RemoveUserComponent },
//   { path: 'create-group', component: CreateGroupComponent },
//   { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
