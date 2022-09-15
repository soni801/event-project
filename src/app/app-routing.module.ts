import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveViewComponent } from './live-view/live-view.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: 'live', component: LiveViewComponent },
    { path: '', redirectTo: '/live', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
