import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent {
  title = 'Practica311';
  encabezados = [];
  eencabezados = [100];
  valores = [];
  datos = [];
  ValorActualNivel = 0;
  ValorActualVolumen = 0;
  url = "http://www.levelwaterapi.somee.com/api/nivels";
  chart: any;
  timeLeft = 60;
  interval: any;
  startTimer() {
    this.interval = setInterval(() => {
      this.obtenerDatos();
      this.obtenerTabla();
      this.obtenerGrafica();
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 500)
  }
  pauseTimer() {
    clearInterval(this.interval);
  }
  constructor(private http: HttpClient) {
    this.startTimer();
  }
  ngOnInit(): void {
    this.createChart();
    console.log(this.chart.data.datasets);
  }
  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: this.encabezados,
        datasets: [
          {
            label: "Histórico de datos del Sensor",
            data: this.valores,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
  obtenerDatos() {
    this.http.get<any>(this.url).subscribe(data => {
      this.datos = data;
      this.encabezados = [];
      this.valores = [];

      for (let i = this.datos.length - 1; i >= 0; i--) {
        this.encabezados.push(this.datos[i]['id']);
        this.valores.push(this.datos[i]['nive']);
      }

      this.chart.data.labels = this.encabezados;
      this.chart.data.datasets[0].data = this.valores;
      this.chart.update();
    });
  }
  obtenerTabla() {
    this.http.get<any>(this.url).subscribe(data => {
      this.datos = data;
      this.ValorActualNivel = 0;
      this.ValorActualVolumen = 0;
      /* Mostrar el nivel y volumen actual */
      for (let i = this.datos.length - 1; i >= 0; i++)
      {
        this.ValorActualNivel = this.datos[i]['nive'];
        this.ValorActualVolumen = this.datos[i]['volumen'];
      } 
      this.chart.data.labels = this.eencabezados;
      this.chart.data.datasets[0].data = this.valores;
      this.chart.update();
    });
  }
  obtenerGrafica() {
    this.http.get<any>(this.url).subscribe(data => {
      this.datos = data;
      this.encabezados = [];
      this.valores = [];

        this.valores.push(this.datos[-1]['nive']);

      this.chart.data.datasets[0].data = this.valores;
      this.chart.update();
    });
  }
}
