import { EventEmitter, Injectable } from '@angular/core';
import { ITarea } from '../interfaces/ITarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  constructor() { }

  tarea$ = new EventEmitter<ITarea>();
}
