import QuizDao from "./dao.js";

export default function QuizRoute(app, db) {
  const dao = QuizDao(db);

  const fetchQuiz = (req, res) => {
    const { quizId } = req.params;
    const quizzes = dao.fetchQuiz(courseId);
    res.json(quizzes);
  }

  const findQuizForCourse = (req, res) => {
    const { courseId } = req.params;
    const quizzes = dao.findQuizForCourse(courseId);
    res.json(quizzes);
  }
  const createQuiz = (req, res) => {
    const { courseId } = req.params;
    const quiz = {...req.body, course: courseId};
    const newQuiz = dao.createQuiz(quiz);
    res.send(newQuiz);
  }
  const deleteQuiz = (req, res) => {
    const { quizId } = req.params;
    const status = dao.deleteQuiz(quizId);
    res.send(status);
  }
  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await dao.updateQuiz(quizId, quizUpdates);
    res.send(status);
}
  app.put("/api/quizzes/:quizId", updateQuiz);

  app.delete("/api/quizzes/:quizId", deleteQuiz);

  app.post("/api/courses/:courseId/quizzes", createQuiz);

  app.get("/api/quizzes/:quizId", fetchQuiz);
  app.get("/api/courses/:courseId/quizzes", findQuizForCourse);
}

