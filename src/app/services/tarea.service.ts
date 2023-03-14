import { EventEmitter, Injectable } from '@angular/core';
import { ITarea } from '../interfaces/ITarea';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  constructor(
    private apiService: ApiService
  ) { }

  tarea$ = new EventEmitter<ITarea>();

  getTareas(params: string) {
    return this.apiService.apiCall(`tarea${params}`, 'GET', {})
  }

  getTarea(id:number) {
    return this.apiService.apiCall(`tarea/${id}`, 'GET', {})
  }

  setTarea(data: any = {}) {
    return this.apiService.apiCall('tarea', 'POST', data)
  }

  updateTarea(id: number, data: any = {}) {
    return this.apiService.apiCall(`tarea/${id}`, 'PUT', data)
  }

  deleteTarea(id: number) {
    return this.apiService.apiCall(`tarea/${id}`, 'DELETE', {})
  }
}
