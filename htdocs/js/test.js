companyList = []
var company = new Company('stuff');
company.addNewProject(0.25, 0.25, 0.25, 0.25, "Dumb project");
company.addNewProject(0.5, 0.0, 0.25, 0.25, "Less dumb project");
companyList.push(company);

var student = new Student(0.5, 0.25, 0.25)
desiredProjects = student.getDesiredProject(companyList);
for(index in desiredProjects){
	item = desiredProjects[index];
	document.write(item.projectName + "<br/>");
}