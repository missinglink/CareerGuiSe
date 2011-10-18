// Class for testing purposes only
// Create a list containing a company with two projects
companyList = []
languageData = Data.makeLanguages();
var company = new Company('stuff');
company.addNewProject(0.25, 0.25, 0.25, 0.25, "Project1");
company.addNewProject(0.0, 0.0, 0.75, 0.25, "Project2");
companyList.push(company);

for(index in languageData){
	item = languageData[index];
	document.write(item.name + "<br/>");
}


// Create a few students and put them in a list
var student = new Student("John", 21);
student.testLanguage();
var student2 = new Student("Jim", 22);
student2.testLanguage();

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
	document.write(item.student.name + " has a compatibility of: " + item.compatibility + "<br/>");
}