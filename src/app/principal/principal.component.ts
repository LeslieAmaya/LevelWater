import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{

  usuarioLogeado=sessionStorage.getItem("usuario");
  passwordLogeado=sessionStorage.getItem("pass");
  constructor() {}

  ngOnInit(): void {
  }

  Salir()
  {
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("pass");
    window.location.reload();
  }
  
}
