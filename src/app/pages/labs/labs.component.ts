import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  welcome = "Bienvenido"
  tasks = [
    "Comprar comestibles",
    "Limpiar la casa",
    "Hacer ejercicio",
    "Terminar proyecto",
    "Leer un libro"
  ];
}
