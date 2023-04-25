import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
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
  ],
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
