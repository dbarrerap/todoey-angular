import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITarea } from 'src/app/interfaces/ITarea';

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.css']
})
export class ContactoFormComponent implements OnInit {
  tareaForm!: FormGroup

  constructor(
    private fb: FormBuilder
  ) {
    this.tareaForm = this.fb.group({
      nombre: ['', Validators.required],
      fecha: [new Date(), Validators.required],
      descripcion: ['', Validators.maxLength(255)],
    })
  }
  ngOnInit(): void {
  }

  setTarea() {
    // console.log(this.tareaForm)
    const tarea: ITarea = {...this.tareaForm.value, realizado: false}
    console.log(tarea)
  }

}
