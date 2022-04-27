import { filter } from "lodash";
import { isNotEmpty, shuffleArrayElements } from "src/utils";
import AnswerModel, { ObjectifiedAnswer } from "./answer";

export type ObjectifiedQuestion = {
  id: number;
  question: string;
  answers: ObjectifiedAnswer[];
  answered: boolean;
  gotIt: boolean;
};

export default class QuestionModel {
  #id: number;
  #question: string;
  #answers: AnswerModel[];
  #gotIt: boolean;

  constructor(
    id: number,
    question: string,
    answers: AnswerModel[],
    gotIt: boolean = false
  ) {
    this.#id = id;
    this.#question = question;
    this.#answers = answers;
    this.#gotIt = gotIt;
  }

  get id() {
    return this.#id;
  }

  get question() {
    return this.#question;
  }

  get answers() {
    return this.#answers;
  }

  get gotIt() {
    return this.#gotIt;
  }

  get notAnswered() {
    return !this.answered;
  }

  get answered() {
    const answer: AnswerModel = filter(
      this.#answers,
      (answer: AnswerModel) => answer.revealed === true
    );

    return isNotEmpty(answer);
  }

  anwswerWith(index: number): QuestionModel {
    const gotItRight: boolean = this.#answers[index]?.right || false;
    const newAnswers = this.#answers.map((answer, i) => {
      const selectedResponse = index === i;
      const shouldReveal = selectedResponse || answer.right;

      return shouldReveal ? answer.reveal() : answer;
    });

    return new QuestionModel(this.#id, this.#question, newAnswers, gotItRight);
  }

  shuffleAnswers(): QuestionModel {
    const suffledAnswers = shuffleArrayElements(this.#answers);

    return new QuestionModel(
      this.#id,
      this.#question,
      suffledAnswers,
      this.#gotIt
    );
  }

  static toClass(obj: ObjectifiedQuestion): QuestionModel {
    const answers = obj.answers.map((answer) => AnswerModel.toClass(answer));

    return new QuestionModel(obj.id, obj.question, answers, obj.gotIt);
  }

  toObject(): ObjectifiedQuestion {
    return {
      id: this.#id,
      question: this.#question,
      answers: this.#answers.map((answer) => answer.toObject()),
      answered: this.answered,
      gotIt: this.#gotIt,
    };
  }
}
