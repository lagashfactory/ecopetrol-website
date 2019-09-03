import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalShared } from '../../app.global';

@Injectable({
    providedIn: 'root',
})

export class FaqService {

    public url: string = this.globalShared.url;

    constructor(private http: HttpClient, private globalShared: GlobalShared) {}

    public getQuestions= (): Promise<any> => {
        return new Promise((resolve,reject) => 
            this.http.get<any>(`${this.url}/api/faq`).subscribe(
                success => resolve(success),
                error => reject(error)
            )
        );
    }

    public addQuestion = (c: any): Promise<any> => {
        return new Promise((resolve,reject) => 
            this.http.post<any>(`${this.url}/api/faq`,c).subscribe(
                success => resolve(success),
                error => reject(error)
            )
        );
    }

    public updateQuestion = (c: any): Promise<any> => {
        return new Promise((resolve,reject) => 
            this.http.put<any>(`${this.url}/api/faq`, c).subscribe(
                success => resolve(success),
                error => reject(error)
            )
        );
    }

    public deleteQuestion = (id: number): Promise<any> => {
        return new Promise((resolve,reject) => 
            this.http.delete<any>(`${this.url}/api/faq/${id}`).subscribe(
                success => resolve(success),
                error => reject(error)
            )
        );
    }
}
