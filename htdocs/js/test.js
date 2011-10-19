// Class for testing purposes only
// Create a list containing a company with two projects
companyList = []
languageData = Data.makeLanguages();
var company = new Company('stuff');
company.addNewProject(0.25, 0.25, 0.25, 0.25, 0, "Project1");
company.addNewProject(0.0, 0.0, 0.75, 0.25, 0, "Project2");
companyList.push(company);

for(index in languageData){
	item = languageData[index];
	document.write(item.name + "<br/>");
}


// Create a few students and put them in a list
var student = new Student("John", 21);
var student2 = new Student("Jim", 22);

studentList = []
studentList.push(student);
studentList.push(student2);

// randomly generated abilities
student.testLanguage();
student2.testLanguage();

projectList = company.getProjects();

// add desired projects
for(index in projectList){
	project = projectList[index];
	student.addDesiredProject(project);
	student2.addDesiredProject(project);
}
	
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
	document.write(item.project.name + " you have a compatibility of: " + item.compatibility + "<br/>");
	
	studyPath = item.getStudyPath();
	
	for(i in studyPath){
		langPath = studyPath[i];
		document.write("<br/>" + langPath.language + " " + langPath.compatibilityIncrease  + "<br/>");
	}
	
	
}

// Print out the desired students
document.write("Desired student output...<br/>")
for(index in desiredStudents){
	item = desiredStudents[index];
	document.write(item.student.name + " has a compatibility of: " + item.compatibility + "<br/>");
}
