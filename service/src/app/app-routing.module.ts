import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [{
  path: 'dictionary',
  component: DictionaryPageComponent,
  children: [{
    path: ':key',
    component: DictionaryDetailComponent,
    canActivate:[AuthGuard]
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
