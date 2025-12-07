import { v4 as uuidv4 } from "uuid";

export default function EnrollmentsDao(db) {

  function getEnrollments() {
    return db.enrollments;
  }
  
function createEnrollment(userId, courseId) {
  const enrollment = { _id: uuidv4(), user: userId, course: courseId };
  db.enrollments.push(enrollment);
  return enrollment; 
}


  function deleteEnrollment(enrollmentId) {
    const { enrollments } = db;
    db.enrollments = enrollments.filter(
      (enrollment) => enrollment._id !== enrollmentId);
  }
  
  return { createEnrollment, deleteEnrollment, getEnrollments };
}
