import AssignmentDao from "../Assignments/dao.js";

export default function AssignmentRoute(app) {
  const dao = AssignmentDao();

  const findAssignmentsForCourse = async (req, res) => {
    const { courseId } = req.params;
    const assignments = await dao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  }
  const createAssignmentForCourse = async(req, res) => {
    const { courseId } = req.params;
    const assignment = {...req.body, course: courseId,};
    const newAssignment = await dao.createAssignment(assignment);
    res.send(newAssignment);
  }
  const deleteAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const status = await dao.deleteAssignment(assignmentId);
    res.send(status);
  }
  const updateAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
}
  app.put("/api/assignments/:assignmentId", updateAssignment);

  app.delete("/api/assignments/:assignmentId", deleteAssignment);

  app.post("/api/courses/:courseId/Assignments", createAssignmentForCourse);

  app.get("/api/courses/:courseId/Assignments", findAssignmentsForCourse);
}

