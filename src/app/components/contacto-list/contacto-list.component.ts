import { Component } from '@angular/core';
import { IContacto } from 'src/app/interfaces/IContacto';
import { ITarea } from 'src/app/interfaces/ITarea';

@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html',
  styleUrls: ['./contacto-list.component.css']
})
export class ContactoListComponent {
  tareas: ITarea[] = []

}
