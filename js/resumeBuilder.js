// $("#main").append("Valerie Wilson McCarthy"); //


var name = "Valerie Wilson McCarthy";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Entrepreneur";
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
	"name" : "Valerie McCarthy",
	"role": "Entrepreneur",
	"age" : 47,
	"contacts":{
		"mobile": "650-269-1263",
		"email": "valeriewilsonmccarthy@gmail.com",
		"github": "ValerieMcCarthy",
		"twitter": "@valeriewilson",
		"location": "Woodside, CA"
	},
	"welcomeMessage": "A Snapshot of My Professional Life: work experience, Recent Projects, and Education",
	"skills" : ["Entrepreneurship", "Strategy", "Business Dvelopment", "Finance", "Growth Hacking", "Emotional Intelligence"],
	"biopic": "images/vwmhead.jpg"
};

var home = "Woodside, CA";
var formattedHome = HTMLhome.replace("%data%", home);
$("#topContacts").prepend(formattedHome);

var twitter = "@valeriewilson";
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").prepend(formattedTwitter);

var github = "ValerieMcCarthy";
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").prepend(formattedGithub);

var email = "valeriewilsonmccarthy@gmail.com";
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").prepend(formattedEmail);

var mobile = "650-269-1263";
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").prepend(formattedMobile);


var welcomeMsg = "A Snapshot of My Professional Life: Work Experience, Recent Projects, and Education";
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", welcomeMsg);
$("#header").append(formattedWelcomeMsg);

var bioPic = "images/vwmhead.jpg";
var formattedbioPic = HTMLbioPic.replace("%data%", bioPic);
$("#picture").prepend(formattedbioPic);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
};





var work = {
	"jobs": [
	{
		"employer": "Self-Employed",
		"title": "Entrepreneur",
		"location": "Woodside, CA",
		"dates": "10/14 - Current",
		"description": "<b><i>Thinking about the next great thing.</i></b> I am researching and testing some hypotheses I have for the mid to upper income women's fashion market."
	},
	{
		"employer": "Humanthology",
		"title": "Co-Founder and CEO",
		"location": "San Francisco, CA",
		"dates": "9/11 - 10/14",
		"description": "<b><i>Online platform for sharing personal stories on topics that matter. </i></b> Responsible for vision of company as well as formation and execution of product and content strategy. Led product positioning, branding, and marketing efforts, including viral/social media, SEO and SEM. Raised angel round of funding and built team of ten full-time employees and contractors."
	},
	{
		"employer": "Positive Coaching Alliance",
		"title": "Director of Development",
		"location": "Mountain View, CA",
		"dates": "7/08 - 8/11",
		"description": "<b><i>Non-profit with the mission to teach life lessons through sports.</b></i> Rebuilt strategy, budget and team for PCA’s national fundraising efforts.  Responsible for raising up to $3M per year. Helped form and execute on national expansion strategy of organization, including funding for and opening of local chapters across the United States."
	},
	{
		"employer": "Foundation Capital",
		"title": "Entrepreneur in Residence",
		"location": "Menlo Park, CA",
		"dates": "10/07 - 7/08",
		"description": "<b><i>Early stage venture capital firm focused on IT and Consumer Internet. </b></i> Assisted in evaluation of new deals, supported portfolio companies and helped source new deals. Served as interim CFO for portfolio company Pano Logic, Inc., revenue-generating company in the desktop virtualization market; played key role in finance, operations and strategy."
	},
	{
		"employer": "MeeVee",
		"title": "CFO and VP of Business Development",
		"location": "Burlingame, CA",
		"dates": "10/06 - 6/07",
		"description": "<b><i>Consumer Internet company delivering personalized TV/online video search and social networking services. </i></b> Responsible for all corporate and business development, financial accounting and planning, and investor relations."
	},
	{
		"employer": "Stoke",
		"title": "Co-Founder, CFO and VP of Operations",
		"location": "Mountain View, CA",
		"dates": "3/04 - 4/06",
		"description": "<b><i>Communications equipment company in the fixed mobile convergence market. </b></i> Responsible for all financial and international business operations, including accounting, strategic/financial planning, corporate development, FP&A, HR, legal, IT, and facilities."
	}
	]
};


var education = {
	"schools": [
	{
		"name": "Stanford University",
		"degree":"BA",
		"major": "Political Science",
		"dates": "1986-1990",
		"location":"Stanford, CA"
	},
	{
		"name": "Stanford University",
		"degree":"MA",
		"major": "Philosophy",
		"dates": "1989-1990",
		"location": "Stanford, CA"
	},
	{
		"name": "Tuck School of Business at Dartmouth College",
		"degree":"MBA",
		"major": "Business",
		"dates": "1995-1997",
		"location": "Hanover, NH"
	}
	],

	"onlineCourses":[
	{
		"title": "Front-End Developer Nanodegree",
		"school": "Udacity",
		"dates": "2014-2015",
		"url": "https://www.udacity.com/course/nd001"
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "Moving to Elite Level with my Golf Game: Getting Below 5.4 Index",
		"dates": "1/15 - Current",
		"description": "I am working daily to hone my golf game, particularly my short and mental games. I am taking a few lessons but I am more in the school of Bubba Watson and Jordan Speith and am working on improving my natural feel for the stroke and flight/roll of the ball. I am also playing in the major women amateur NCGA and USGA events. I had an index of 6.7 when I started this project; my current index is 4.5.",
		"images": ["images/vwmgolf1.jpg", "images/vwmgolf2.jpg"]
	},
	{
		"title": "Huinawai",
		"dates": "8/14 - Current",
		"description": "I am the project manager for our new home on the Big Island of Hawaii. We found land in 2011; we finished architectural design in 2014; we broke ground in 2015; and we are expected to move in April, 2016. ",
		"images": ["images/huinawai1.jpg", "images/huinawai3.jpg"]
	}
	]
};



function displayWork () {
	for (job in work.jobs) {
	// create new div for work experience
	$("#workExperience").append(HTMLworkStart);

	// concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var boldformattedEmployerTitle = formattedEmployerTitle.bold();
	$(".work-entry:last").append(boldformattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates); 
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);


	}
}

displayWork();

//projects.display = function () {

function displayProject () {	
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}
}

displayProject();


function displayEducation () {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		//concat Name and Degree
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);

		}

}

displayEducation();

function displayOnline () {
	$(".education-entry:last").append(HTMLonlineClasses);

	for (school in education.onlineCourses){
		//concat title and school
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
		$(".education-entry:last").append(formattedURL);
	} 
}

displayOnline ();	

var home = "Woodside, CA";
var formattedHome = HTMLhome.replace("%data%", home);
$("#footerContacts").prepend(formattedHome);

var twitter = "@valeriewilson";
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#footerContacts").prepend(formattedTwitter);

var github = "ValerieMcCarthy";
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#footerContacts").prepend(formattedGithub);

var email = "valeriewilsonmccarthy@gmail.com";
var formattedEmail = HTMLemail.replace("%data%", email);
$("#footerContacts").prepend(formattedEmail);

var mobile = "650-269-1263";
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#footerContacts").prepend(formattedMobile);


//following is exercise work from videos

// map
$("#mapDiv").append(googleMap);


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function locationizer(work_obj){
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

console.log(locationizer(work));

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}


// end of exercise work





