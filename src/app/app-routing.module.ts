import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptComponent } from './javascript/javascript.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { JsStringComponent } from './js-string/js-string.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HttpReqComponent } from './http-req/http-req.component';
import { AnimationComponent } from './animation/animation.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'js', component: JavascriptComponent },
  { path: 'll', component: LazyLoadingComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'js-string', component: JsStringComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'structural-directive', component: StructuralDirectiveComponent },
  { path: 'template', component: TemplateFormComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'http', component: HttpReqComponent },
  { path: 'table', component: TableComponent },

  { path: '', component: HomeComponent, pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
