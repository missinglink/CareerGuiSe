function StudyPath(){
	
	var languageList = [];
	
	this.getTutorial = function(){
		return languageList;
	};
	
	this.setTutorial = function(languageName, description, tutUrl){
		var tempLanguage = new Language(languageName, description, tutUrl);
		languageList.push(tempLanguage);
	};
}