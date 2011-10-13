function Project(ruby, rail, pyth, c, projName){
	
	this.rubAbility = ruby;
	this.railAbility = rail;
	this.pyAbility = pyth;
	this.cAbility = c;
	this.name = projName;
	this.compatibleStudents = [];
	
	// Just returns true temporarily, will implement properly later
	function isCompatible(student){
		return true;
	};
	
	// Looks through students and finds compatible students and adds
	// found ones to the list
	this.getCompatibleStudents = function(studentList){
		for(stud in studentList){
			var student = studentList[stud];
			
			if (isCompatible(student)){
				compatibleStudents.push(new CompatibleStudent(student, 0.5));
			}
		}
		
	};
}