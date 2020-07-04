import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/usermanagement/login/login.component'
import { NameeditorComponent } from './common/nameeditor/nameeditor.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, data: {title: 'Login'} },
  { path: 'nameeditor', component: NameeditorComponent, data: {title: 'Name Editor'} },
  //{ path: 'page-not-found', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
