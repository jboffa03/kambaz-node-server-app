import { v4 as uuidv4 } from 'uuid';

export default function QuestionDao(db) {

    
  function createQuestion(question) {
    const newQuiz = { ...question, _id: uuidv4() };
    db.questions = [...db.questions, newQuiz];
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
    return question;
}


 return {
   findQuestionsForQuiz, createQuestion, updateQuestion
 };
}