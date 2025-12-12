import { v4 as uuidv4 } from 'uuid';
import model from "./model.js"

export default function AssignmentDao() {
  async function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    return model.create(newAssignment);
  }

  async function findAssignmentsForCourse(courseId) {
   return model.find({ course: courseId });
 }

   function deleteAssignment(assignmentId) {
    return model.deleteOne({ _id: assignmentId });
}
  function updateAssignment(assignmentId, assignmentUpdates) {
    return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
}


 return {
   findAssignmentsForCourse, createAssignment, deleteAssignment, updateAssignment
 };
}
