import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/usermanagement/login/login.component'


const routes: Routes = [
  { path: 'login', component: LoginComponent, data: {title: 'Login'} },
  //{ path: 'page-not-found', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
