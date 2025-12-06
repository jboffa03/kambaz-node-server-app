const assignment = {
  id: 1, title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10", completed: false, score: 0,
};
const modules = {
  id: "1-1", name: "ExpressJS Basics",
  description: "Learn the basics of ExpressJS",
  course: "Web Development",
};

export default function WorkingWithObjects(app) {
  const getAssignment = (req, res) => {
    res.json(assignment);
  };
  const getAssignmentTitle = (req, res) => {
    res.json(assignment.title);
  };
  const setAssignmentTitle = (req, res) => {
   const { newTitle } = req.params;
   assignment.title = newTitle;
   res.json(assignment);
 };
  const setAssignmentCompleted = (req, res) => {
   const { completed } = req.params;
   assignment.completed = completed;
   res.json(assignment);
 };
  const setAssignmentScore = (req, res) => {
   const { score } = req.params;
   assignment.score = parseInt(score);
   res.json(assignment);
 };


 const getModule = (req, res) => {
   res.json(modules);
 };
 const getModuleName = (req, res) => {  
    res.json(modules.name);
 };
 const updateModuleName = (req, res) => {
   const { newName } = req.params;
   modules.name = newName;
   res.json(modules);
 };

  app.get("/lab5/module/name/:newName", updateModuleName);
  app.get("/lab5/module/name", getModuleName);
  app.get("/lab5/module", getModule);

  app.get("/lab5/assignment/score/:score", setAssignmentScore);
  app.get("/lab5/assignment/completed/:completed", setAssignmentCompleted);
  app.get("/lab5/assignment/title/:newTitle", setAssignmentTitle);
  app.get("/lab5/assignment/title", getAssignmentTitle);
  app.get("/lab5/assignment", getAssignment);
};


