import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DwarvesComponent } from './dwarves/dwarves.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DwarfDetailComponent } from './dwarf-detail/dwarf-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: DwarfDetailComponent },
  { path: 'dwarves', component: DwarvesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }