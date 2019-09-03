import { Component, OnInit } from '@angular/core';
import { FaqService } from './faq.services';
import FAQ from './faq.model';

@Component({
  selector: 'faq-component',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})

export class FaqComponent implements OnInit {

  public newQuestion: FAQ = {
    id: 0,
    question: '',
    answer: ''
  };
  public questions: Array<FAQ> = [];

  constructor (private faqServices: FaqService) {}

  ngOnInit(){
    this.getQuestions();
  }

  public getQuestions = async () => {
    this.questions = await this.faqServices.getQuestions();
  }

  public addQuestion = async (ev) => {
    if(this.newQuestion.question.length == 0)
      return;
    if(this.newQuestion.answer.length == 0)
      return;

    let result = await this.faqServices.addQuestion(this.newQuestion);
    console.log(result);
    this.newQuestion.question = '';
    this.newQuestion.answer = '';
    this.getQuestions();
  }
  
  public updateQuestion = async (ev, question: FAQ) => {
    let result = await this.faqServices.updateQuestion(question);
    console.log(result);
    this.getQuestions();
  }

  public deleteQuestion = async (ev, id: number) => {
    let result = await this.faqServices.deleteQuestion(id);
    console.log(result);
    this.getQuestions();
  }

}
