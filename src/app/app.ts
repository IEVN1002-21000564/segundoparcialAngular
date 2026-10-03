import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Zodiaco } from './formularios/Zodiaco/zodiaco';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Navbar } from './navbar/navbar';
import { Usuarios } from './formularios/usuarios/usuarios';
 
@Component({
  imports: [RouterOutlet, Zodiaco, Navbar, Usuarios],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
 
export class App implements OnInit {
  title = 'web-app';
 
  ngOnInit(): void {
    initFlowbite();
  }
}
 