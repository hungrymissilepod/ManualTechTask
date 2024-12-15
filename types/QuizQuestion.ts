export type QuizQuestion = {
  question: string,
  type: string,
  options: QuizOption[],
};

export type QuizOption = {
  display: string,
  value: string | boolean,
  isRejection: boolean,
};