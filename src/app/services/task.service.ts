import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../interfaces/task.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private api = 'http://127.0.0.1:8000/api/usuarios/'

  constructor(
    private http: HttpClient
  ) { } 

  getAllTasks() {
    const path = 'http://127.0.0.1:8000/api/usuarios/';
    return this.http.get<Task[]>(path);
  }
  getTask(id: String){
    const path = 'http://127.0.0.1:8000/api/usuarios/${id}';
    return this.http.get<Task>(path);
  }
}
