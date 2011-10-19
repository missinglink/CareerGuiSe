function DesiredProject(stud, proj, compat){
	
	this.student = stud;
	this.project = proj;
	this.compatibility = compat;
	var projectStudyPathList = [];
	
	
	
	this.getStudyPath = function(){
		if (projectStudyPathList.length == 0){
			projectStudyPathList.push(new StudyPath("ruby", 0.2));//1 - (student.rubyAbility * project.rubyAbility))); 
			projectStudyPathList.push(new StudyPath("rails", 1 - (student.railsAbility * project.railsAbility)));
			projectStudyPathList.push(new StudyPath("python", 1 - (student.pythonAbility * project.pythonAbility))); 
			projectStudyPathList.push(new StudyPath("c", 1 - (student.cAbility * project.cAbility)));
			projectStudyPathList.push(new StudyPath("java", 1 - (student.javaAbility * project.javaAbility)));
		}
		
		return projectStudyPathList;
	};
}