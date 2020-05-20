import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const bateriaModule = () => import('./baterias/baterias.module').then(x => x.BateriasModule);
const lineaModule = () => import('./lineas/lineas.module').then(x => x.LineasModule);

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'baterias', loadChildren: bateriaModule, canActivate: [AuthGuard]},
  { path: 'lineas', loadChildren: lineaModule, canActivate: [AuthGuard]},
  { path: 'account', loadChildren: accountModule },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
