import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ITarea } from 'src/app/interfaces/ITarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.css']
})
export class ContactoFormComponent implements OnInit {
  tareaForm: FormGroup

  constructor(
    private tareaService: TareaService,
    private activeModal: NgbActiveModal,
  ) {
    this.tareaForm = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      fecha: new FormControl(moment().format('YYYY-MM-DD'), [Validators.required]),
      descripcion: new FormControl(null, [Validators.nullValidator])
    })
  }
  ngOnInit(): void {
  }

  setTarea() {
    const tarea: ITarea = {...this.tareaForm.value, realizado: false}
    // Usar API para guardar, emitir respuesta
    this.tareaService.setTarea(tarea)?.subscribe(
      (res: any) => {
        this.tareaService.tarea$.emit(res)
        this.activeModal.close()
      },
      (err: any) => {
        console.log(err)
      }
    )
  }

  closeModal() {
    this.activeModal.close()
  }

}
