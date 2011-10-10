function StudyPath(lang, tut){
	
	this.language = lang;
	this.tutorial = tut;
	this.urlList = [];
	
	this.getTutorial = function(){
		return tutorial;
	}
	
	this.setTutorial = function(newTut){
		this.tutorial = newTut;
	}
}