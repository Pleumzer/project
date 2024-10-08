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
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AllusersComponent } from './pages/allusers/allusers.component';
import { QuestionsEditComponent } from './pages/questions/questions-edit/questions-edit.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'profile/edit', component: EditComponent, canActivate: [AuthGuard], children: [
    { path: 'title', component: CTitleComponent },
    { path: 'edit', component: CEditComponent },
    ]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'questions/main', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'myQuestions', component: MyQuestionsComponent, canActivate: [AuthGuard] },
  { path: 'questions', component: QMainComponent, canActivate: [AuthGuard] },
  { path: 'questions/:id', component: QuestionsDetailComponent, canActivate: [AuthGuard] },
  { path: 'questions/main/create', component: QuestionsCreateComponent, canActivate: [AuthGuard] },
  { path: 'questions/edit/:id', component: QuestionsEditComponent, canActivate: [AuthGuard] },
  { path: '', component: DashboardComponent },
  { path: 'aboutus', component: AboutusComponent, canActivate: [AuthGuard] },
  { path: 'allusers', component: AllusersComponent, canActivate: [AuthGuard] },
  { path: 'user/:id', component: SummaryComponent, canActivate: [AuthGuard], children: [
    { path: 'title', component: CTitleComponent },
    { path: 'summary', component: CSummaryComponent },
  ]},
  { path: 'user/look/:id', component: SummaryComponent, canActivate: [AuthGuard], children: [
    { path: 'title', component: CTitleComponent },
    { path: 'summary', component: CSummaryComponent },
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

