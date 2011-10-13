function Project(ruby, rail, pyth, c, projName){
	
	this.rubAbility = ruby;
	this.railAbility = rail;
	this.pyAbility = pyth;
	this.cAbility = c;
	this.name = projName;
	var compatibleStudents = [];
	
	
	this.isCompatible = function(student){
		cVal = this.cAbility * student.cAbility;
		pyVal = this.pyAbility * student.pyAbility;
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