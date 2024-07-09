import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficasComponent } from './graficas/graficas.component';
import { PrincipalComponent } from './principal/principal.component';
import { ConsultanivelComponent } from './consultanivel/consultanivel.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  {path: '', redirectTo: 'graficas', pathMatch: 'full'},
  {path: "graficas", component: GraficasComponent},
  {path: "consultanivel", component: ConsultanivelComponent},
  {path: "admin", component: AdminComponent}
]
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
