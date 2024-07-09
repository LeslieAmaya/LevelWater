import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private httpClient: HttpClient) {
    this.usuarios = [];
    this.cargarUsuarios();
  }
  texto = '';
  url = 'http://www.levelapi.somee.com/api/usuarios';
  usuarios: any[];
  id = "";
  nombre = "";
  apellido = "";
  password = "";
  tipoUsu = "";

  cargarUsuarios() {
    this.httpClient.get(this.url).subscribe(
      (myData: any) => {
        this.usuarios = myData
      }
    )
  }
  nuevo() {
    this.id = "";
    this.nombre = "";
    this.apellido = "";
    this.password = "";
    this.tipoUsu = "";
  }
  buscar() {
    if (this.id == "")
      this.texto = "";
    else {
      var usuario = this.usuarios.filter(x => x.Usuario === this.id)
      if (usuario.length > 0) {
        this.id = usuario[0]["Usuario"]
        this.nombre = usuario[0]["Nombre"];
        this.apellido = usuario[0]["Apellido"];
        this.password = usuario[0]["Passwd"];
        this.tipoUsu = usuario[0]["TipoUsu"];

      }
      else {
        this.nombre = "";
        this.apellido = "";
        this.password = "";
        this.tipoUsu = "";
      }
    }
  }
  guardar() {
    if (this.id == "") {
      this.texto = "FAVOR DE ESCRIBIR EL ID";
      return;
    }
    if (this.nombre == "") {
      this.texto = "FAVOR DE ESCRIBIR EL NOMBRE";
      return;
    }
    if (this.apellido == "") {
      this.texto = "FAVOR DE ESCRIBIR EL APELLIDO";
      return;
    }
    if (this.password == "") {
      this.texto = "FAVOR DE ESCRIBIR EL PASSWORD";
      return;
    }
    if (this.tipoUsu == null) {
      this.texto = "FAVOR DE ESCRIBIR EL PASSWORD";
      return;
    }
    let datos = {
      Usuario: this.id,
      Nombre: this.nombre,
      Apellido: this.apellido,
      Passwd: this.password,
      TipoUsu: this.tipoUsu
    }
    if (this.usuarios.filter(x => x.Usuario === this.id).length == 0)//guardar
    {
      this.httpClient.post(this.url, datos).subscribe(() =>
        this.cargarUsuarios());
    }
    else//actualizar
    {
      this.httpClient.put(this.url + "/" + this.id, datos).subscribe(() =>
        this.cargarUsuarios());
    }
    this.texto = "";
    alert("Datos guardados exitosamente");
  }
  borrar() {
    if (this.usuarios.filter(x => x.Usuario === this.id).length > 0) {
      this.httpClient.delete(this.url + "/" + this.id).subscribe(() => this.cargarUsuarios());
      alert("Datos eliminados exitosamente");
      this.texto = "";
    }
    else
      alert ("El registro aun no se guarda, no se puede eliminar");
  }
}
