import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';

const routes: Routes = [{
  path: 'dictionary',
  component: DictionaryPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
