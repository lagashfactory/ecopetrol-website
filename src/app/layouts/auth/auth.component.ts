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
  }

  public login = (ev) => {

  }
}
