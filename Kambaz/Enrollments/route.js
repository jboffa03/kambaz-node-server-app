import EnrollmentsDao from "./dao.js";
export default function EnrollmentsRoute(app) {;
  const dao = EnrollmentsDao();

  // const fetchEnrollments = (req, res) => {
  //   const enrollments = dao.getEnrollments();
  //   res.json(enrollments);
  // };
  
const enrollUserInCourse = async (req, res) => {
  const currentUser = req.session["currentUser"];
  const { courseId } = req.body;
  const newEnrollment = await dao.enrollUserInCourse(currentUser._id, courseId);
  res.json(newEnrollment);
};

  const unenrollUserFromCourse = async (req, res) => {
    const { enrollmentId } = req.params;
    const status = await dao.unenrollUserFromCourse(enrollmentId);
    res.send(status);
  };

  // app.get("/api/users/:userId/enrollments", fetchEnrollments);
  
  app.delete("/api/enrollments/:enrollmentId", unenrollUserFromCourse);

  app.post("/api/users/current/enrollments", enrollUserInCourse);

}
