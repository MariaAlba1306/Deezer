import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './5.public/5.2features/detail/detail.component';
import { ListComponent } from './5.public/5.2features/main/list.component';
import { SearchComponent } from './5.public/5.2features/main/search.component';
import { ResultsComponent } from './5.public/5.2features/results/results.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'results', component: ResultsComponent },
  { path: '', component: NotfoundComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
