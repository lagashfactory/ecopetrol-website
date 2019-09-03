import { Injectable } from '@angular/core';

@Injectable()
export class GlobalShared {

    public user: {id: number,username: string, name: string, mustChangePassword: boolean};
    public userLoged: boolean = true;

    constructor() {
        console.log(this.userLoged);
        if(window.localStorage.getItem('currentUser') !== void 0){
            this.user = JSON.parse(window.localStorage.getItem('currentUser'));
            this.userLoged = false;
        }
    }
}
