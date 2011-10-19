function Student(name, age){
	
	// randomly generate abilities
	this.rubyAbility = Math.floor(Math.random()*101);
	this.railAbility = Math.floor(Math.random()*101);
	this.pythonAbility = Math.floor(Math.random()*101);
	this.cAbility = Math.floor(Math.random()*101);
	this.javaAbility = Math.floor(Math.random()*101);
	
	this.name = name;
	this.age = age;
	var desiredProjList = [];
	
	this.isCompatible = function(proj){
		cVal = this.cAbility * proj.cAbility;
		pyVal = this.pythonAbility * proj.pythonAbility;
		result = cVal + pyVal;
		return result;
	};
	
	this.addDesiredProject = function(project){
		compatibility = this.isCompatible(project);
		desiredProjList.push(new DesiredProject(this, project, compatibility));
	};
	
	this.getDesiredProject = function(companyList){
		return desiredProjList;
	};
	
	this.testLanguage = function(){

	};
	
	this.getStudyPathToProject = function(){
		
	};
}