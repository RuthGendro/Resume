/* To Do:
Finish customizing CSS
*/

var bio = {
    "biopic": "images/me.jpg",
    "name": "Ruth Gendro",
    "role": "Web Developer",
    "welcomeMessage": "Having spent about a year learning web development, I am confident in my ability to progessively learn more",
    "welcomeMessage2": "Eager to expand my skill set and continue learning",
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
        "linkedinURL": "https://www.linkedin.com/in/ruth-gendro-7869b2101",
        "location": "Seattle, WA",
        "locationURL": "https://www.google.com/maps/place/Seattle,+WA/@47.6149943,-122.4759913,11z/data=!3m1!4b1!4m5!3m4!1s0x5490102c93e83355:0x102565466944d59a!8m2!3d47.6062095!4d-122.3320708"
    },
    "skills": ["JavaScript", "HTML", "CSS", "PHP (beginner-level)", "Ruby (beginner)"],
    "frameworks_libraries": ["Angular JS", "Bootstrap / Responsive Design", "jQuery", "Jasmine"],
    "other_tools": ["Chrome DevTools", "Git", "GitHub", "PhotoShop", "Grunt (learning)", "Gulp (learning)"],
    "pdfResumeURL": "", // add google drive doc
    "wordResumeURL": "", // add google drive doc

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
// In Progress
//		{
//			"title": "Wild Wings Studio",
//			"dates": "September - October 2016",
//			"description": "Website for local taxidermy business",
//			"images": ["#"],
//			"url": "http://wildwingsstudio.com",
//          "demoLink": "http://wildwingsstudio.com"
//		},
		{
			"title": "Online Portfolio",
			"dates": "September 2016",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/portfolio.jpg"],
			"url": "https://ruthgendro.github.io/index.html",
            "demoLink": "https://ruthgendro.github.io/index.html"
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
        title = title.replace("%url%", project.url);

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
        "url": "www.udacity.com/course/intro-to-jquery--ud245"
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
        "url": "https://www.udacity.com/course/viewer#!/c-ud775-nd"
    }]};

education.display = function() {
    for (var school of education.schools) {
        $("#education").append(HTMLschoolStart + "<br>");
        $(".education-entry:last").append(
            HTMLschoolName.replace("%data%", school.name) +
            HTMLschoolDegree.replace("%data%", school.degree) +
            HTMLschoolDates.replace("%data%", school.dates) +
            HTMLschoolMajor.replace("%data%", school.majors) +
            HTMLschoolLocation.replace("%data%", school.location)
        );
    }

    $("#education").append("<br>" + HTMLonlineClasses);

    for (var course of education.onlineCourses) {
        $("#education").append(HTMLschoolStart  + "<br>");

        var title = HTMLonlineTitle.replace("%data%", course.title);
        title = title.replace("#", course.url + "\"" + " target=\"_blank\"");

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
			"description": "I was hired as a server in the restaurant initially, and quickly promoted into a position with more responsibility. One of the reasons for the quick promotion is because I am highly productive, and an efficent team contributor. As a lead for the employees in the front of house, I help to ensure that all aspects of the business are running smoothly, and I step wherever needed. I also handle the event coordination, which includes weddings, reunions, and tournaments, and it requires good attention to detail to ensure a smooth event.",
            "url": "#"
		},
        {
			"employer": "6igma Health",
			"title": "UI Developer Intern",
			"location": "Redmond, WA, US",
			"dates": "September 2015 - March 2016",
			"description": "I interned with this startup to obtain some experience and mentoring while I was in the beginning stages of coding. During the internship, I helped to develop some HTML/CSS templates, as well as work on TDD and version control. With TDD, I experimented with Jasmine and Karma, and I used BitBucket for version control. I also had an opportunity to begin working with AngularJS.",
            "url": "#"
		},
		{
			"employer": "Hugo's",
			"title": "Server",
			"location": "Redmond, WA, US",
			"dates": "June 2013 - April 2016",
			"description": "While not the most relevant job to being a web developer, working in the restaurant industry taught me more abstract skills, including how to work well with all sorts of personality types. It really helped me cultivate my multi-tasking skills and organization skills, as well as taught me how to be a good teammate, and how to work well independently. I also had to deal with stressful situations frequently, so I know how to effectively deal with that sort of pressure. I wore many different hats, while working here because it was a very small business, so even though I was 'just' a server, I was responsible for a lot of day to day operations.",
            "url": "#"
		},
		{
			"employer": "Steelhead Diner",
			"title": "Manager",
			"location": "Seattle, WA, US",
			"dates": "April 2012 - June 2013",
			"description": "This is another position where I was quickly promoted from Server to Manager. It was a very fast paced business, because of it's location next to Pike Place Market, which gets thousands of tourists each day during the summer. The fast paced nature of the business resulted in a high turnover rate, around 6 months on average. During my time as a manager, I managed to increase retention by nearly 100%, as the average turnover rate went up to nearly 12 months. I attribute this to both my excellent work ethic and easy-going personality.",
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