import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalShared } from '../../app.global';
import FAQ from './faq.model';

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

    public addQuestion = (newQuestion: FAQ): Promise<any> => {
        delete(newQuestion.id);
        return new Promise((resolve,reject) => 
            this.http.post<any>(`${this.url}/api/faq`, newQuestion).subscribe(
                success => resolve(success),
                error => reject(error)
            )
        );
    }

    public updateQuestion = (question: FAQ): Promise<any> => {
        return new Promise((resolve,reject) => 
            this.http.put<any>(`${this.url}/api/faq`, question).subscribe(
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
