import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Auth from './auth.model';
import { GlobalShared } from '../../app.global';

@Injectable({
    providedIn: 'root',
})

export class AuthService {

    public url: string = this.globalShared.urlIdentity;

    constructor(private http: HttpClient, private globalShared: GlobalShared) {}

    public auth = (login: Auth): Promise<any> => {
        return new Promise((resolve,reject) => 
            this.http.post<any>(`${this.url}/api/authorization`, login).subscribe(
                success => resolve(success),
                error => reject(error)
            )
        );
    }
}
