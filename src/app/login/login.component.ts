import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario="";
  password="";
  constructor() { }

  ngOnInit(): void{   
  }
  
  validarUsuario(){
    if(this.usuario=="Leslie")
    {
      if(this.password=="1234")
      {
         sessionStorage.setItem("usuario", "Leslie");
         sessionStorage.setItem("pass","1234" );
         window.location.reload();
      }
      else
      alert("Password Incorrecto")
    }
    else
    alert("Usuario Incorrecto");
  }
}
