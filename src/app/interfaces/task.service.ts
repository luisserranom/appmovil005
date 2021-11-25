import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

}
export interface Task
{
  id: string;
  nombreusuario: string;
  email: string;
  contraseña: string

}
