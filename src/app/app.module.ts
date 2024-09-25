import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { JavascriptComponent } from './javascript/javascript.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { PipeComponent } from './pipe/pipe.component';
import { JsStringComponent } from './js-string/js-string.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HttpReqComponent } from './http-req/http-req.component';
import { HttpClientModule } from '@angular/common/http';
import { GuardComponent } from './guard/guard.component';
import { LoginComponent } from './login/login.component'; // Import HttpClientModule
import { RouterModule } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    JavascriptComponent,
    LazyLoadingComponent,
    PipeComponent,
    JsStringComponent,
    DataBindingComponent,
    StructuralDirectiveComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ParentComponent,
    ChildComponent,
    HttpReqComponent,
    GuardComponent,
    LoginComponent,
    AnimationComponent,
    HomeComponent,
    TableComponent,
    EditModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    RouterModule.forRoot([]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
