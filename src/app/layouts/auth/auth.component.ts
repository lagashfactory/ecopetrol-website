import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import Auth from './auth.model';
import { AuthService } from './auth.services';

declare var $: any;

@Component({
  selector: 'layout-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  // public authForm: FormGroup;
  public auth: Auth = {
    name: '',
    password: '', 
  };

  @Output() public isLogged = new EventEmitter<boolean>();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public login = async (ev) => {
    let result = await this.authService.auth(this.auth);
    this.isLogged.emit(true);
  }
}
