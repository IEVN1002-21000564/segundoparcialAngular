import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './zodiaco.html',
})
export class Zodiaco {
 
  nombre: string = '';
  aPaterno: string = '';
  aMaterno: string = '';
  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  sexo: string = '';
 
  nombreCompleto: string = '';
  edad: number = 0;
  signoMes: string = '';
  imagenMes: string = '';
  mostrarResultado: boolean = false;
 
  imprimir() {
    this.nombreCompleto = this.nombre + ' ' + this.aPaterno + ' ' + this.aMaterno;
    this.edad = 2026 - this.anio;

    const mesNum = Number(this.mes);
    if (mesNum === 1) {
      this.signoMes = 'Buey';
      this.imagenMes = 'ENERO.jpg';
    } else if (mesNum === 2) {
      this.signoMes = 'Tigre';
      this.imagenMes = 'FEBRERO.jpg';
    } else if (mesNum === 3) {
      this.signoMes = 'Conejo';
      this.imagenMes = 'MARZO.jpg';
    } else if (mesNum === 4) {
      this.signoMes = 'Dragón';
      this.imagenMes = 'ABRIL.jpg';
    } else if (mesNum === 5) {
      this.signoMes = 'Serpiente';
      this.imagenMes = 'MAYO.jpg';
    } else if (mesNum === 6) {
      this.signoMes = 'Caballo';
      this.imagenMes = 'JUNIO.jpg';
    } else if (mesNum === 7) {
      this.signoMes = 'Cabra';
      this.imagenMes = 'JULIO.jpg';
    } else if (mesNum === 8) {
      this.signoMes = 'Mono';
      this.imagenMes = 'AGOSTO.jpg';
    } else if (mesNum === 9) {
      this.signoMes = 'Gallo';
      this.imagenMes = 'SEPTIEMBRE.jpg';
    } else if (mesNum === 10) {
      this.signoMes = 'Perro';
      this.imagenMes = 'OCTUBRE.jpg';
    } else if (mesNum === 11) {
      this.signoMes = 'Cerdo';
      this.imagenMes = 'NOVIEMBRE.jpg';
    } else if (mesNum === 12) {
      this.signoMes = 'Rata';
      this.imagenMes = 'DICIEMBRE.jpg';
    } else {
      this.signoMes = '';
      this.imagenMes = '';
    }
 
    this.mostrarResultado = true;
  }
}