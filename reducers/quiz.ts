import { QuizQuestion } from "@/types/QuizQuestion";

type QuizState = {
  questions: QuizQuestion[],
}

type QuizAction = AddAction | UpdateAction;

export type AddAction = {
  type: 'ADD',
  question: QuizQuestion,
}

export type UpdateAction = {
  type: 'UPDATE',
  question: QuizQuestion,
}

export function reducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'ADD':
      return { ...state, questions: [...state.questions, action.question] };
    case 'UPDATE':
      const questionToUpdate = state.questions.findIndex((item) => item.question == action.question.question);
      state.questions[questionToUpdate].selectedAnswer = action.question.selectedAnswer;
      return { ...state };
    default:
      return state;
  }
}
