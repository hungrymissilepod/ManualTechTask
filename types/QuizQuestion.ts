export type QuizQuestion = {
  question: string,
  type: string,
  options: QuizOption[],
  selectedAnswer?: string | boolean;
  isRejection?: boolean;
};

export type QuizOption = {
  display: string,
  value: string | boolean,
  isRejection: boolean,
};