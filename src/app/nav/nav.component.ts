import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

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
