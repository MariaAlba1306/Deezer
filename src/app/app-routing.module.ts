import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './main/list/list.component';
import { SearchComponent } from './main/search/search.component';
import { ResultsComponent } from './results/results.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'results', component: ResultsComponent },
  { path: '', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
