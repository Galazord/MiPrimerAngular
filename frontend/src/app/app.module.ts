import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.component';
import { FormView } from './components/form-view/form-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiDirectivaDirective } from './directives/mi-directiva.directive';
import { SubjectComponent } from './components/subjects/subject/subject.component';
import { BehaviourSubjectComponent } from './components/subjects/behaviour-subject/behaviour-subject.component';
import { ReplaySubjectComponent } from './components/subjects/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './components/subjects/async-subject/async-subject.component';
import { SearchComponent } from './components/search/search.component';
import { SearchPipe } from './pipes/search.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const rutas: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profile'
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    FormView,
    MiDirectivaDirective,
    SubjectComponent,
    BehaviourSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    SearchComponent,
    SearchPipe,
    ProfileComponent,
    DashboardComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    RouterModule.forRoot(rutas, { })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
