import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoIntegrador';
  usu=sessionStorage.getItem("usuario");
  pass=sessionStorage.getItem("pass");
  
}
