import { Component, Input } from '@angular/core';
import { QuizService } from "../../shared/services/quiz.service";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent {
  @Input() answers: any[] = [];
  @Input() questionId: number = 0;
  isQuizFinished = this.quizService.isQuizFinished;

  constructor(public quizService: QuizService) { }

  addAnswer(answer: string, questionId: number) {
    this.quizService.addAnswer(answer, questionId);
  }

  isAnswerSelected(answer: string, id: number) {
    const isAnswered = this.quizService.playerAnswers.find((a) => a.questionId === id);
    if (!isAnswered) return false;
    return isAnswered.answer === answer;
  }

  getAnswerTime(questionId: number): Date | undefined {
    return this.quizService.playerAnswers.find(a => a.questionId === questionId)?.answerTime;
  }
}
