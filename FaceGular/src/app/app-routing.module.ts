import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistorietasComponent } from './historietas/historietas.component';
import { CosasComponent } from './cosas/cosas.component';
import { ColegasComponent } from './colegas/colegas.component';
import { EventosComponent } from './eventos/eventos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserEditComponent } from './user-edit/user-edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HistorietasComponent} ,
  { path: 'things', component: CosasComponent },
  { path: 'friends', component: ColegasComponent },
  { path: 'events', component: EventosComponent },
  { path: 'user/:id', component: UserEditComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
