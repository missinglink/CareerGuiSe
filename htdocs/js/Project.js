function Project(ruby, rail, pyth, c, java, projName){
	
	// set name
	this.name = projName;	
	document.write(projName + "\n\n")
	// set abilities
	this.rubyAbility = ruby;
	this.railAbility = rail;
	this.pythonAbility = pyth;
	this.cAbility = c;
	this.javaAbility = java;
	

	
	// init list of compatible students
	var compatibleStudents = [];
	
	this.isCompatible = function(student){
		cVal = this.cAbility * student.cAbility;
		pyVal = this.pythonAbility * student.pythonAbility;
		result = cVal + pyVal;
		return result;
	};
	
	// Looks through students and finds compatible students and adds
	// found ones to the list
	this.getCompatibleStudents = function(studentList){
		for(stud in studentList){
			var student = studentList[stud];
			compatibility = this.isCompatible(student)
			compatibleStudents.push(new CompatibleStudent(student, compatibility));
		}
		return compatibleStudents;
	};
}