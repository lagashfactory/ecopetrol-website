import { Injectable, enableProdMode } from '@angular/core';
import { isDevMode } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class GlobalShared {

    public user: {id: number,username: string, name: string, mustChangePassword: boolean};
    public userLoged: boolean = true;
    public url: string;
    public urlIdentity: string;
    
    constructor() {
        console.log(this.userLoged);
        if(window.localStorage.getItem('currentUser') !== void 0){
            this.user = JSON.parse(window.localStorage.getItem('currentUser'));
            this.userLoged = false;
        }
        this.setVariables();
    }
    
    private setVariables = () => {
        if (environment.production) {
            if(isDevMode())enableProdMode();
        }
        this.url = environment.url;
        this.urlIdentity = environment.urlIdentity;
    }
}
