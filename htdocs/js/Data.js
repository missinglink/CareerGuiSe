function Data(){
	
}

Data.makeLanguages = function(){
	langList = []
	
	java = new Language("Java", "Java is an object-oriented language made by Oracle which is free to use.", "http://www.google.com/search?q=java+tutorial");
	java.addEvent("Learn Java!", "Tomorrow!", "Alex's place!");
	cSharp = new Language("C#", "C# is an object-oriented language made by Microsoft.", "http://www.google.com/search?q=c%23+tutorial");
	cSharp.addEvent("Microsoft C# 101", "The next day", "Fergus's flat");
	python = new Language("Python", "Python is a language which is free to develop in.", "http://www.google.com/search?q=python+tutorial");
	python.addEvent("Python the hard way", "Next week", "The square");
	ruby = new Language("Ruby", "Ruby is a programming language.", "http://www.google.com/search?q=ruby+tutorial");
	ruby.addEvent("Learn ruby in 10 seconds", "Yesterday", "iCafe on Broadway");
	rubyOnRails = new Language("Ruby on Rails", "Ruby on Rails is also a programming language", "http://www.google.com/search?q=ruby+on+rails+tutorial");
	rubyOnRails.addEvent("Ruby the gangsta way", "Two days from Sunday", "Craig's house");
	
	langList.push(java);
	langList.push(cSharp);
	langList.push(python);
	langList.push(ruby);
	langList.push(rubyOnRails);
	
	return langList;
}