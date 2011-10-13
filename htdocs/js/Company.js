function Company(nom){
	
	var name = nom;
	var projectList = [];
	
	this.addNewProject = function(ru, ra, py, c, projName){
		projectList.push(new Project(ru, ra, py, c, projName));
	};
	
	this.getProjects = function(){
		return projectList;
	};
}