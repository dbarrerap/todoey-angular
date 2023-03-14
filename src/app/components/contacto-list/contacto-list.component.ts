import { Component, OnInit } from '@angular/core';
import { ITarea } from 'src/app/interfaces/ITarea';
import { TareaService } from 'src/app/services/tarea.service';
import { NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactoFormComponent } from '../contacto-form/contacto-form.component';
import { Paginator } from 'src/app/models/Paginator';
import { faCircle, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html',
  styleUrls: ['./contacto-list.component.css']
})
export class ContactoListComponent implements OnInit {
  faCircle = faCircle
  faEye = faEye
  faTrashAlt = faTrashAlt
  tareas: ITarea[] = []

  constructor(
    public tareaService: TareaService,
    private modalService: NgbModal,
  ) {
    this.tareaService.tarea$.subscribe(
      (tarea: ITarea) => {
        this.tareas.push(tarea)
      }
    )
  }

  ngOnInit(): void {
    this.tareaService.initPaginator(new Paginator("id", 10))

    setTimeout(() => {
      this.getTareas()
    }, 10)
  }

  expandTareas() {
    this.modalService.open(ContactoFormComponent, { size: 'lg', backdrop: 'static' })
  }

  getTareas() {
    this.tareaService.getTareas(`?paginate=1&size=${this.tareaService.paginator.per_page}&page=${this.tareaService.paginator.current_page}`)?.subscribe(
      (res: any) => {
        // console.log(res)
        const { per_page, current_page, last_page, from, to, total } = res
        this.tareas = (current_page == 1) ? res.data : Object.values(res.data)
        Object.assign(
          this.tareaService.paginator,
          {
            current_page: current_page,
            per_page: per_page,
            last_page: last_page,
            from: from, 
            to: to,
            total: total
          }
        )
      },
      (err: any) => {
        console.log(err)
      }
    )
  }

  onPaginateEvent(event: any) {
    Object.assign(this.tareaService.paginator, { current_page: event })
    this.getTareas()
  }

  deleteTarea(tarea: ITarea) {
    this.tareaService.deleteTarea(tarea.id!)?.subscribe(
      (res: any) => {
        // console.log(res)
        this.tareas = this.tareas.filter(e => e.id != tarea.id)
      },
      (err: any) => {
        console.log(err)
      }
    )
  }
}
