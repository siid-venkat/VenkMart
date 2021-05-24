import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  compToServ=[
    {
      "name":'tom',
      "password":"abc123",
      "userid":"abc@media.com",
      "pincode":963247,
    }
    ,
    {
      "name":'dick',
      "password":"def123",
      "userid":"def@media.com",
      "pincode":986325,
    }
  ]

}
