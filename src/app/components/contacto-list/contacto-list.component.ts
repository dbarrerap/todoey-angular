import { Component, OnInit } from '@angular/core';
import { ITarea } from 'src/app/interfaces/ITarea';
import { TareaService } from 'src/app/services/tarea.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactoFormComponent } from '../contacto-form/contacto-form.component';

@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html',
  styleUrls: ['./contacto-list.component.css']
})
export class ContactoListComponent implements OnInit {
  tareas: ITarea[] = []

  constructor(
    private tareaService: TareaService,
    private modalService: NgbModal,
  ) {
    this.tareaService.tarea$.subscribe(
      (tarea: ITarea) => {
        this.tareas.push(tarea)
      }
    )
  }

  ngOnInit(): void {
  }

  expandTareas() {
    this.modalService.open(ContactoFormComponent, { size: 'lg', backdrop: 'static' })
  }
}
