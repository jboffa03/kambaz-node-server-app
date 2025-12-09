import { v4 as uuidv4 } from 'uuid';

export default function QuestionDao(db) {

    
  function createQuestion(question) {
    const newQuiz = { ...question, _id: uuidv4() };
    db.quizzes = [...db.quizzes, newQuiz];
    return newQuiz;
  }

  function findQuestionsForQuiz(quizId) {
   const { questions } = db;
   return questions.filter((questions) => questions.quiz === quizId);
 }
 
  function updateQuestion(questionId, questionUpdates) {
    const { questions } = db;
    const question = questions.find((question) => question._id === questionId);
    Object.assign(question, questionUpdates);
    return quiz;
}


 return {
   findQuestionsForQuiz, createQuestion, updateQuestion
 };
}