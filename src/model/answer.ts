export type ObjectifiedAnswer = {
  value: string;
  right: boolean;
  revealed: boolean;
};

export default class AnswerModel {
  #value: string;
  #right: boolean;
  #revealed: boolean;

  constructor(value: string, right: boolean, revealed: boolean = false) {
    this.#value = value;
    this.#right = right;
    this.#revealed = revealed;
  }

  static correct = (value: string) => new AnswerModel(value, true);

  static wrong = (value: string) => new AnswerModel(value, false);

  get value() {
    return this.#value;
  }

  get right() {
    return this.#right;
  }

  get revealed() {
    return this.#revealed;
  }

  reveal(): AnswerModel {
    return new AnswerModel(this.#value, this.#right, true);
  }

  static toClass(obj: ObjectifiedAnswer): AnswerModel {
    return new AnswerModel(obj.value, obj.right, obj.revealed);
  }

  toObject(): ObjectifiedAnswer {
    return {
      value: this.#value,
      right: this.#right,
      revealed: this.#revealed,
    };
  }
}
