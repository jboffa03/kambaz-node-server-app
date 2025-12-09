import QuestionDao from "./dao.js";

export default function QuestionRoute(app, db) {
  const dao = QuestionDao(db);

  const findQuestionsForQuiz = (req, res) => {
    const { quizId } = req.params;
    const questions = dao.findQuestionsForQuiz(quizId);
    res.json(questions);
  }
  const createQuestion = (req, res) => {
    const { quizId } = req.params;
    const questions = {...req.body, quiz: quizId};
    const newQuiz = dao.createQuestion(questions);
    res.send(newQuiz);
  }
  const updateQuestion = async (req, res) => {
    const { questionId } = req.params;
    const questionUpdates = req.body;
    const status = await dao.updateQuestion(questionId, questionUpdates);
    res.send(status);
}
  app.put("/api/questions/:questionId", updateQuestion);

  app.post("/api/quizzes/:quizId/questions", createQuestion);

  app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz);
}

