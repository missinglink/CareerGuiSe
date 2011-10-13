// Class for testing purposes only
// Create a list containing a company with two projects
companyList = []
var company = new Company('stuff');
company.addNewProject(0.25, 0.25, 0.25, 0.25, "Project1");
company.addNewProject(0.0, 0.0, 0.75, 0.25, "Project2");
companyList.push(company);

// Create a few students and put them in a list
var student = new Student(0.5, 0.25, 0.25);
var student2 = new Student(0.25, 0.25, 0.5);
studentList = []
studentList.push(student);
studentList.push(student2);

// Get a list of desired projects by a student
desiredProjects = student.getDesiredProject(companyList);

// Get a list of desired students for a project
projects = company.getProjects();
firstProject = projects[1];
desiredStudents = firstProject.getCompatibleStudents(studentList);

// Print out the desired projects
document.write("Desired project output...<br/>")
for(index in desiredProjects){
	item = desiredProjects[index];
	document.write(item.projectName + " you have a compatibility of: " + item.compatibility + "<br/>");
}

// Print out the desired students
document.write("Desired student output...<br/>")
for(index in desiredStudents){
	item = desiredStudents[index];
	document.write("You have a compatibility of: " + item.compatibility + "<br/>");
}