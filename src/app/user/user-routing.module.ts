import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { UserFormComponent } from './user-form/user-form.component';


const routes: Routes = [
  {
    path: 'userlist',
    component: UserlistComponent
  },
  {
    path: 'add-user',
    component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
