import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import Auth from './auth.model';
import { AuthService } from './auth.services';
import { GlobalShared } from '../../app.global';

declare var $: any;

@Component({
  selector: 'layout-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  public auth: Auth = {
    username: '',
    password: '', 
  };

  @Output() public isLogged = new EventEmitter<boolean>();

  constructor(private authService: AuthService, private globalShared: GlobalShared) {}

  ngOnInit(): void {}

  public login = async (ev) => {
    
    if(this.auth.username == null || this.auth.username == void 0 || this.auth.username.length < 8 || this.auth.username.length > 100){
      return;
    }
    if(this.auth.password == null || this.auth.password == void 0 || this.auth.password.length < 8 || this.auth.password.length > 16)
      return;
    
    let result = await this.authService.auth(this.auth);
    if(result.accessGranted){
      this.globalShared.user = result.user;
      window.localStorage.setItem('currentUser', JSON.stringify(this.globalShared.user));
      this.isLogged.emit(true);
    }
  }
}
