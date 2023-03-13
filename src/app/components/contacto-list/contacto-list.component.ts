import { Component } from '@angular/core';
import { IContacto } from 'src/app/interfaces/IContacto';

@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html',
  styleUrls: ['./contacto-list.component.css']
})
export class ContactoListComponent {
  contactos: IContacto[] = [
    {
      nombre: 'David Barrera',
      telefono: '0981548032',
      email: 'dbarrerap@live.com'
    },
    {
      nombre: 'Paola Gallo',
      telefono: '0987942649',
      email: 'paolagallolopez@hotmail.com'
    }
  ]

}
