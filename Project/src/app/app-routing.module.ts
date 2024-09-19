import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './pages/profile/summary/summary.component';
import { CTitleComponent } from './components/profile/c-title/c-title.component';
import { CSummaryComponent } from './components/profile/c-summary/c-summary.component';
import { EditComponent } from './pages/profile/edit/edit.component';
import { CEditComponent } from './components/profile/c-edit/c-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/questions/main/main.component';
import { MyQuestionsComponent } from './pages/my-questions/my-questions.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { QMainComponent } from './components/questions/q-main/q-main.component';
import { QuestionsDetailComponent } from './pages/questions/questions-detail/questions-detail.component';
import { QuestionsCreateComponent } from './pages/questions/questions-create/questions-create.component';


const routes: Routes = [
  { path: 'profile/summary', component: SummaryComponent, children: [
    { path: 'title', component: CTitleComponent },
    { path: 'summary', component: CSummaryComponent },
  ]},
  { path: 'profile/edit', component: EditComponent, children: [
    { path: 'title', component: CTitleComponent },
    { path: 'edit', component: CEditComponent },
    ]},
    { path: 'login', component: LoginComponent },
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UserListComponent },

  { path: 'questions/main',component:MainComponent },

  { path: 'myQuestions', component: MyQuestionsComponent},
 
  // { path: '', redirectTo: '/questions', pathMatch: 'full' },
  { path: 'questions', component: QMainComponent },
  { path: 'questions/:id', component: QuestionsDetailComponent },
  { path: 'questions/main/create', component: QuestionsCreateComponent },
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

