function Student(pyth, c, java){
	
	this.pyAbility = pyth;
	this.cAbility = c;
	this.javAbility = java;
	this.desiredProjList = [];
	
	function isCompatible(proj){
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
				compatibility = isCompatible(project);
				this.desiredProjList.push(new DesiredProject(project.name, compatibility));
			}
		}
		return this.desiredProjList;
	};
	
	this.testLanguage = function(){
		
	};
	
	this.getStudyPathToProject = function(){
		
	};
}