import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'layout-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  // public authForm: FormGroup;
  public auth: {name: string, password: string} = {
    name: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void{
    // this.authForm = new FormGroup({
    //   'name': new FormControl(this.auth.name, [
    //     Validators.required,
    //     Validators.minLength(4)
    //   ]),
    //   'password': new FormControl(this.auth.password, Validators.required)
    // });
  }

  public login = (ev) => {

  }
}
