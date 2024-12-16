import { QuizQuestion } from "@/types/QuizQuestion";

export const indexOfSelectedAnswer = (question: QuizQuestion): number => {
  const index = question.options.findIndex((item) => item.value == question.selectedAnswer);
  if (index !== -1) return index;
  return -1;
}

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
  const questions = [...state.questions];

  switch (action.type) {
    case 'ADD':
      questions.push(action.question);
      return { ...state, questions: questions };
    case 'UPDATE':
      const indexToReplace = state.questions.findIndex((item) => item.question == action.question.question);
      questions[indexToReplace] = action.question;
      return { ...state, questions: questions };
    default:
      return state;
  }
}
