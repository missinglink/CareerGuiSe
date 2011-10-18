function Student(name, age){
	
	this.pyAbility = 0.0;
	this.cAbility = 0.0;
	this.javAbility = 0.0;
	this.name = name;
	this.age = age;
	var desiredProjList = [];
	
	this.isCompatible = function(proj){
		cVal = this.cAbility * proj.cAbility;
		pyVal = this.pyAbility * proj.pyAbility;
		result = cVal + pyVal;
		return result;
	};
	
	this.getDesiredProject = function(companyList){
		for(cIndex in companyList){
			company = companyList[cIndex];
			projects = company.getProjects();
			
			for(pIndex in projects){
				project = projects[pIndex];
				compatibility = this.isCompatible(project);
				desiredProjList.push(new DesiredProject(project.name, compatibility));
			}
		}
		return desiredProjList;
	};
	
	this.testLanguage = function(){
		this.pyAbility = Math.floor(Math.random()*101);
		this.cAbility = Math.floor(Math.random()*101);
		this.javAbility = Math.floor(Math.random()*101);
	};
	
	this.getStudyPathToProject = function(){
		
	};
}