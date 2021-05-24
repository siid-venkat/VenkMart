import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  serviceData;
  constructor(private _router: Router, private _service: ServiceService) {

  }

  ngOnInit() {
  }

  loginUser() {
    this._service.compToServ.forEach((e) => {
      // console.log(e.name);
      if (this.email === e.userid && this.password === e.password) {
        console.log(e.userid);
        this._router.navigate(['gallery']);
      }
      else{
        // alert('wrong Credentials')
      }

    });

  }


}
