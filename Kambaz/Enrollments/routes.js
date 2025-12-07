import EnrollmentsDao from "../Enrollments/dao.js";
export default function EnrollmentsRoute(app, db) {;
  const dao = EnrollmentsDao(db);

  const fetchEnrollments = (req, res) => {
    const enrollments = dao.getEnrollments();
    res.json(enrollments);
  };
  
const createEnrollment = (req, res) => {
  const currentUser = req.session["currentUser"];
  const { courseId } = req.body;
  const newEnrollment = dao.createEnrollment(currentUser._id, courseId);
  res.json(newEnrollment);
};

  const deleteEnrollment = (req, res) => {
    const { enrollmentId } = req.params;
    const status = dao.deleteEnrollment(enrollmentId);
    res.send(status);
  };

  app.get("/api/users/:userId/enrollments", fetchEnrollments);
  
  app.delete("/api/enrollments/:enrollmentId", deleteEnrollment);

  app.post("/api/users/current/enrollments", createEnrollment);

}
