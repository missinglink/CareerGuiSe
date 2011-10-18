function Language(nom, desc, url){
	
	this.name = nom;
	this.description = desc;
	this.tutorialUrl = url;
	var eventList = [];
	
	this.addEvent = function(name, date, location){
		var tempEvent = new Event(name, date, location)
		eventList.push(tempEvent);
	};
	
	this.getEvent = function(){
		return eventList;
	}
}