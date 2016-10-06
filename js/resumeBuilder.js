/* To Do:
Finish customizing CSS
*/

var bio = {
    "biopic": "images/me.jpg",
    "name": "Ruth Gendro",
    "role": "Web Developer",
    "welcomeMessage": "Front end developer passionate about creating responsive, and visually pleasing websites",
    "welcomeMessage2": "'The separation of talent and skill is one of the greatest misunderstood concepts for people who are trying to excel, who have dreams, who want to do things. Talent you have naturally. Skill is only developed by hours and hours and hours of beating on your craft.' - Will Smith",
    "contacts": {
        "mobile": "425-894-5116",
        "mobileLink": "tel:425-894-5116",
        "email": "ruth.gendro@gmail.com",
        "emailLink": "mailto:uth.gendro@gmail.com",
        "github": "ruthgendro",
        "githubURL": "https://github.com/ruthgendro",
        "portfolio": "ruthgendro.github.io",
        "portfolioURL": "https://ruthgendro.github.io/",
        "linkedin": "ruthgendro",
        "linkedinURL": "https://www.linkedin.com/in/ruthgendro",
        "location": "Seattle, WA",
        "locationURL": "https://www.google.com/maps/place/Seattle,+WA/@47.6149943,-122.4759913,11z/data=!3m1!4b1!4m5!3m4!1s0x5490102c93e83355:0x102565466944d59a!8m2!3d47.6062095!4d-122.3320708"
    },
    "skills": ["JavaScript", "HTML", "CSS", "PHP (beginner-level)", "Ruby (beginner)"],
    "frameworks_libraries": ["Angular JS", "Bootstrap / Responsive Design", "jQuery", "Jasmine"],
    "other_tools": ["Chrome DevTools", "Git", "GitHub", "PhotoShop", "Grunt (learning)", "Gulp (learning)"],
    "pdfResumeURL": "https://drive.google.com/file/d/0B4qaE2gnm9IXZFBUc2VBVm5qUEU/view?ths=true",
    "wordResumeURL": "https://docs.google.com/document/d/1T7e1ViOVJ6AP5D74S0inQtKvKJRm0yA4jznkBV3CE4w/edit",

    display: function() {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile).replace("%link%", bio.contacts.mobileLink);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email).replace("%link%", bio.contacts.emailLink);
        var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin).replace("%link%", bio.contacts.linkedinURL);
        var formattedPortfolio = HTMLportfolio.replace("%data%", bio.contacts.portfolio).replace("%link%", bio.contacts.portfolioURL);
        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github).replace("%link%", bio.contacts.githubURL);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location).replace("%link%", bio.contacts.locationURL);
        var formattedBioPicBig = HTMLbiopic.replace("%data%", "images/me.jpg").replace("%id%", "biopic-big");
        var formattedBioPicSmall = HTMLbiopic.replace("%data%", "images/me.jpg").replace("%id%", "biopic-small");
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedWelcomeBullet1 = HTMLwelcomeBullet.replace("%data%", bio.welcomeMessage);
        var formattedWelcomeBullet2 = HTMLwelcomeBullet.replace("%data%", bio.welcomeMessage2);
        var formattedWordResumeLink = HTMLresumeLink.replace("%data%", "Resume Microsoft Word Format").replace("%link%", bio.wordResumeURL);
        var formattedPDFResumeLink = HTMLresumeLink.replace("%data%", "Resume PDF Format").replace("%link%", bio.pdfResumeURL);

        $("#header").prepend('<div id="top-content-container"></div>');
        $("#top-content-container").append('<div id="top-content-left"></div>');
        $("#top-content-left").append(formattedBioPicBig);
        $("#top-content-container").append('<div id="top-content-right"></div>');

        // biopic is present in both top-content-left and top-content-right.
        // Only one pic is visible.  The visible pic is determined by viewport size.
        $("#top-content-right").append('<div id="biopic-small-container"></div>');
        $("#top-content-right").append('<div id="name-role-container"></div>');
        $("#biopic-small-container").append(formattedBioPicSmall);
        $("#name-role-container").append(formattedName);
        $("#name-role-container").append(formattedRole);
        $("#name-role-container").append('<hr id="top-rule">');
        $("#top-content-right").append('<ul id="top-contacts"></ul>');

        // show contact info in header and footer
        $("#top-contacts, #footer-contacts").append(formattedMobile);
        $("#top-contacts, #footer-contacts").append(formattedEmail);
        $("#top-contacts, #footer-contacts").append(formattedLinkedIn);
        $("#top-contacts, #footer-contacts").append(formattedGitHub);
        $("#top-contacts, #footer-contacts").append(formattedPortfolio);
        $("#top-contacts, #footer-contacts").append(formattedLocation);
        $("#header").append('<ul id="welcome-bullets-list"><hr></ul>');
        $("#welcome-bullets-list").append(formattedWelcomeBullet1);
        $("#welcome-bullets-list").append(formattedWelcomeBullet2);
        $("#welcome-bullets-list").append('<hr>');
        $("#header").append('<div id="skills-container"></div>');


        if (bio.skills.length > 0) {
            var skillsStart = HTMLskillsStart.replace("%data%", "Programming Languages").replace("%id%", "skills-languages");
            $("#skills-container").append(skillsStart);
            var formattedSkill = null;
            for (var i = 0; i < bio.skills.length; i++) {
                formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills-languages").append(formattedSkill);
            }
        }

        if (bio.frameworks_libraries.length > 0) {
            skillsStart = HTMLskillsStart.replace("%data%", "Frameworks/Libraries").replace("%id%", "skills-fw-lib");
            $("#skills-container").append(skillsStart);
            formattedSkill = null;
            for (i = 0; i < bio.frameworks_libraries.length; i++) {
                formattedSkill = HTMLskills.replace("%data%", bio.frameworks_libraries[i]);
                $("#skills-fw-lib").append(formattedSkill);
            }
        }

        if (bio.other_tools.length > 0) {
            skillsStart = HTMLskillsStart.replace("%data%", "Other Tools").replace("%id%", "skills-other");
            $("#skills-container").append(skillsStart);
            formattedSkill = null;
            for (i = 0; i < bio.other_tools.length; i++) {
                formattedSkill = HTMLskills.replace("%data%", bio.other_tools[i]);
                $("#skills-other").append(formattedSkill);
            }
        }

        $("#header").append('<div id="resume-links"><hr></div>');
        $("#resume-links").append(formattedPDFResumeLink);
        $("#resume-links").append(formattedWordResumeLink);

//        // Show interactive map
//        $("#locations").append('<div id="mapDiv"></div>');
//        $("#mapDiv").append(googleMap);
    }
};



var projects = {
    "projects": [
		{
			"title": "Wild Wings Studio",
			"dates": "September - October 2016",
			"description": "Website for small local business",
			"images": ["images/smallWWS.jpg"],
			"url": "https://ruthgendro.github.io/WingsWildlifeStudio/",
          "demoLink": "Wings Wilflife Studio"
		},
		{
			"title": "Online Portfolio",
			"dates": "September 2016",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/portfolio.jpg"],
			"url": "https://ruthgendro.github.io/index.html",
            "demoLink": "https://ruthgendro.github.io"
		}
	]
};


projects.display = function() {
    for (var project of projects.projects) {
        var images = "";

        for (image of project.images) {
            images += HTMLprojectImage.replace("%data%", image);
        }

        title = HTMLprojectTitle.replace("%data%", project.title);
        title = title.replace("%link%", project.url);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(
            title +
            HTMLprojectDates.replace("%data%", project.dates) +
            HTMLprojectDescription.replace("%data%", project.description) +
            images
        );
    }
};




var education = {
    "schools": [{
        "name": "University of Washington",
        "location": "Seattle, WA",
        "degree": "Bachelor's of Arts",
        "majors": [
            "Chemistry & Biochemistry"
        ],
        "dates": "March 2015",
        "url": "https://www.washington.edu"
    }, {
        "name": "Bellevue College",
        "location": "Bellevue, WA",
        "degree": "Associates in Science",
        "majors": [
            "Transfer Degree / Running Start"
        ],
        "dates": "December 2008",
        "url": "http://www.bellevuecollege.edu"
    }],
    "onlineCourses": [{
        "title": "Into to jQuery",
        "school": "Udacity",
        "dates": "September 2016",
        "url": "https://www.udacity.com/course/intro-to-jquery--ud245"
    }, {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "September 2016",
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "dates": "September 2016",
        "url": "https://www.udacity.com/course/responsive-images--ud882"
    }, {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "dates": "September 2016",
        "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    }, {
        "title": "How to Use Git and GitHub",
        "school": "Udacity",
        "dates": "September 2015",
        "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    }]};

education.display = function() {
    for (var school of education.schools) {
        $("#education").append(HTMLschoolStart + "<br>");
        $(".education-entry:last").append(
            HTMLschoolName.replace("%data%", school.name).replace("#", school.url) +
            HTMLschoolDegree.replace("%data%", school.degree) +
            HTMLschoolDates.replace("%data%", school.dates) +
            HTMLschoolMajor.replace("%data%", school.majors) +
            HTMLschoolLocation.replace("%data%", school.location)
        );
    }

    $("#education").append("<br>" + HTMLonlineClasses);

    for (var course of education.onlineCourses) {
        $("#education").append(HTMLschoolStart  + "<br>");

        title = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);

        $(".education-entry:last").append(
            title +
            HTMLonlineSchool.replace("%data%", course.school) +
            HTMLonlineDates.replace("%data%", course.dates)
        );
    }
};



var work = {
    "jobs": [{
			"employer": "Blue Heron Golf Course",
			"title": "Lead / Event Coordinator",
			"location": "Carnation, WA, US",
			"dates": "April 2016 - Present",
			"description": "<ul class='experienceBullets'><li>Plan event such as weddings, reunions, and tournaments for up to 300 people, paying attention to details such as menu, decorative arrangements, and overall room layout. </li><li>Train and mentor employees while striving to give customers the best experience possible.</li><li>Foster a positive team environment by contributing to multiple departments.</li></ul>",
            "url": "#"
		},
        {
			"employer": "6igma Health",
			"title": "UI Developer Intern",
			"location": "Redmond, WA, US",
			"dates": "September 2015 - March 2016",
			"description": "<ul class='experienceBullets'><li>Developed consumer web application interfaces utilizing HTML, CSS, and AngularJS.</li><li>Built interfaces with responsive web design and UI in mind.</li><li>Developed front-end unit tests using Jasmine and Karma</li></ul>",
            "url": "#"
		},
		{
			"employer": "Hugo's",
			"title": "Server",
			"location": "Redmond, WA, US",
			"dates": "June 2013 - April 2016",
			"description": "<ul class='experienceBullets'><li>Created great customer experiences, and listened closely to feedback.</li><li>Effectively worked alone, and completed tasks that a bigger business would have hired up to 7 people for (e.g., bartender, server, manager, expeditor, etc.)</li></ul>",
            "url": "#"
		},
		{
			"employer": "Steelhead Diner",
			"title": "Manager",
			"location": "Seattle, WA, US",
			"dates": "April 2012 - June 2013",
			"description": "<ul class='experienceBullets'><li>Trained across multiple positions, to be available as backup in case of emergency. </li><li>Worked with different teammate on a daily basis, as we worked in pairs during a shift, and both teammates had to communicate and work together effectively.</li></ul>",
            "url": "www.steelheaddiner.com"
		}]};


work.display = function() {
    for (var job of work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var employer = HTMLworkEmployer.replace("%data%", job.employer);
        employer = employer.replace("%url%", job.url);
        var title = HTMLworkTitle.replace("%data%", job.title);
        var dates = HTMLworkDates.replace("%data%", job.dates);
        var workLocation = HTMLworkLocation.replace("%data%", job.location);
        var description = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(employer + title + dates + workLocation + description);
    }
};

bio.display();
projects.display();
education.display();
work.display();