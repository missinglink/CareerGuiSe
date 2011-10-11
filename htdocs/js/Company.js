function Company(nom){
	
	var name = nom;
	var projectList = [];
	
	this.addNewProject = function(ru, ra, py){
		projectList.push(new Project(ru, ra, py));
	};
	
	this.getProjects = function(){
		return projectList;
	};
}