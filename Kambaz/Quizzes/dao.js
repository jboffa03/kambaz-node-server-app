import { v4 as uuidv4 } from 'uuid';

export default function QuizDao(db) {

  function findQuiz(quizId) {
   const { quizzes } = db;
   return quizzes.filter((quiz) => quiz._id === quizId);
 }

  function createQuiz(quiz) {
    const newQuiz = { ...quiz, _id: uuidv4() };
    db.quizzes = [...db.quizzes, newQuiz];
    return newQuiz;
  }

  function findQuizForCourse(courseId) {
   const { quizzes } = db;
   return quizzes.filter((quiz) => quiz.course === courseId);
 }

   function deleteQuiz(quizId) {
    const { quizzes } = db;
    db.quizzes = quizzes.filter((quiz) => quiz._id !== quizId);
}
  function updateQuiz(quizId, quizUpdates) {
    const { quizzes } = db;
    const quiz = quizzes.find((quiz) => quiz._id === quizId);
    Object.assign(quiz, quizUpdates);
    return quiz;
}


 return {
   findQuizForCourse, createQuiz, deleteQuiz, updateQuiz
 };
}
