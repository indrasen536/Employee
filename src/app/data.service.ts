import { Injectable } from '@angular/core';
//import {Registration} from './shared';

@Injectable({
  providedIn: 'root'
})
class Registration{
  constructor(
   public id: number = null,
  public name: string = '',
  public age:number=null,
  public dept: string = 'Select Your Department',
  public  empType: string = 'Select Employee Type',
  public hra: string = '',
  public medical:string='',
  ) {}
  }

export class DataService {
  registrations: Registration[] = [];
  myModal: Registration;
  showNew: Boolean = false;
  submitType: string = 'Save';
  selectedRow: number;
  empType: string[] = ['Permanent','Trainee'];

  constructor() { }
}
