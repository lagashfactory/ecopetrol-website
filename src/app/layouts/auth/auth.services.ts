import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Auth from './auth.model';
import { resolve } from 'dns';
import { reject } from 'q';

@Injectable({
    providedIn: 'root',
})

export class AuthService {

    public url: string;

    constructor(private http: HttpClient) {}

    public auth = (login: Auth): Promise<any> => {
        return new Promise((resolve,reject) => 
            this.http.post<any>(`/api/auth`, login).subscribe(
                success => resolve(success),
                error => reject(error)
            )
        );
    }
}
