import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Auth from './auth.model';

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
