import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    // 'http://api.openweathermap.org/data/2.5/weather?lat=19.4496197&lon=-99.19572289999999&appid=71a9d1cb03df2a0ad6537e02619f5ba8';
    public url: string = 'http://api.openweathermap.org/data/2.5';

    constructor(private http: HttpClient) {}

    public auth = (coordenate: {lat: string, lon: string}): Promise<any> => {
        return new Promise((resolve,reject) => 
            this.http.get<any>(`${this.url}/weather?lat=${coordenate.lat}&lon=${coordenate.lon}`,).subscribe(
                success => resolve(success),
                error => reject(error)
            )
        );
    }
}
