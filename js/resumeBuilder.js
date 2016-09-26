/* To Do:
Finish customizing CSS
*/

var bio = {
    "bioPic": "images/me.jpg",
    "name": "Ruth Gendro",
    "role": "Web Developer",
    "welcomeBullet1": "Having spent about a year learning web development, I am confident in my ability to progessively learn more",
    "welcomeBullet2": "Eager to expand my skill set and continue learning",
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

    "languages": ["JavaScript", "HTML", "CSS", "PHP (beginner-level)", "Ruby (beginner)"],
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
        var formattedBioPicBig = HTMLbioPic.replace("%data%", "images/me.jpg").replace("%id%", "biopic-big");
        var formattedBioPicSmall = HTMLbioPic.replace("%data%", "images/me.jpg").replace("%id%", "biopic-small");
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedWelcomeBullet1 = HTMLwelcomeBullet.replace("%data%", bio.welcomeBullet1);
        var formattedWelcomeBullet2 = HTMLwelcomeBullet.replace("%data%", bio.welcomeBullet2);
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


        if (bio.languages.length > 0) {
            var skillsStart = HTMLskillsStart.replace("%data%", "Programming Languages").replace("%id%", "skills-languages");
            $("#skills-container").append(skillsStart);
            var formattedSkill = null;
            for (var i = 0; i < bio.languages.length; i++) {
                formattedSkill = HTMLskills.replace("%data%", bio.languages[i]);
                $("#skills-languages").append(formattedSkill);
            }
        }

        if (bio.frameworks_libraries.length > 0) {
            var skillsStart = HTMLskillsStart.replace("%data%", "Frameworks/Libraries").replace("%id%", "skills-fw-lib");
            $("#skills-container").append(skillsStart);
            var formattedSkill = null;
            for (var i = 0; i < bio.frameworks_libraries.length; i++) {
                formattedSkill = HTMLskills.replace("%data%", bio.frameworks_libraries[i]);
                $("#skills-fw-lib").append(formattedSkill);
            }
        }

        if (bio.other_tools.length > 0) {
            var skillsStart = HTMLskillsStart.replace("%data%", "Other Tools").replace("%id%", "skills-other");
            $("#skills-container").append(skillsStart);
            var formattedSkill = null;
            for (var i = 0; i < bio.other_tools.length; i++) {
                formattedSkill = HTMLskills.replace("%data%", bio.other_tools[i]);
                $("#skills-other").append(formattedSkill);
            }
        }

        $("#header").append('<div id="resume-links"><hr></div>');
        $("#resume-links").append(formattedPDFResumeLink);
        $("#resume-links").append(formattedWordResumeLink);

        // Show interactive map
        $("#locations").append('<div id="mapDiv"></div>');
        $("#mapDiv").append(googleMap);
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
	],
    display: function() {
        $("#projects").append(HTMLprojectStart);

        for (var project in projects.projects) {

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%",
                projects.projects[project].title).replace("%link%", projects.projects[project].demoLink);
            var formattedProjectDates = HTMLprojectDates.replace("%data%",
                projects.projects[project].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%",
                projects.projects[project].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            if (projects.projects[project].images.length > 0) {
                for (var image in projects.projects[project].images) {
                    var formattedProjectImage = HTMLprojectImage.replace("%data%",
                        projects.projects[project].images[image]).replace("%link%", projects.projects[project].demoLink);
                    $(".project-entry:last").append(formattedProjectImage);
                }
            }
        }
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
        "dates": 2015,
        "url": "https://www.washington.edu"
    }, {
        "name": "Bellevue College",
        "location": "Bellevue, WA",
        "degree": "Associates in Science",
        "majors": [
            "Transfer Degree / Running Start"
        ],
        "dates": 2009,
        "url": "http://www.bellevuecollege.edu"
    }],
    "onlineCourses": [{
        "title": "Into to jQuery",
        "school": "Udacity",
        "date": "September 2016",
        "url": "www.udacity.com/course/intro-to-jquery--ud245"
    }, {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "date": "September 2016",
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "date": "September 2016",
        "url": "https://www.udacity.com/course/responsive-images--ud882"
    }, {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "date": "September 2016",
        "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    }, {
        "title": "How to Use Git and GitHub",
        "school": "Udacity",
        "date": "September 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud775-nd"
    }],
    display: function() {
        for (var school in education.schools) {
            var formattedSchoolName = HTMLschoolName.replace("%data%",
                education.schools[school].name);
            // add school URL to formattedSchoolName.  URL opens in a new browser window.
            formattedSchoolName = formattedSchoolName.replace("#",
                education.schools[school].url + "\"" + " target=\"_blank\"");
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",
                education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%",
                education.schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",
                education.schools[school].location);
            // A loop isn't needed since each majors array in the JSON only has one element
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",
                education.schools[school].majors[0]);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        // I added a <br> before the Online Courses header so there is more space between
        // the Education and Online Course sections
        $("#education").append("<br>" + HTMLonlineClasses);

        for (var onlineCourse in education.onlineCourses) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",
                education.onlineCourses[onlineCourse].title);
            // add school URL to formattedSchoolName.  URL opens in a new browser window.
            formattedOnlineTitle = formattedOnlineTitle.replace("#",
                education.onlineCourses[onlineCourse].url + "\"" + " target=\"_blank\"");
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",
                education.onlineCourses[onlineCourse].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%",
                education.onlineCourses[onlineCourse].date);

            // HTMLonlineURL is not displayed since URL is reachable via the Title/School tag.
            // I thought this was a cleaner-looking implementation than displaying the
            // URL separately.
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            // I added a <br> formattedOnlineDates to give a little space between
            // each online course entry.
            $(".education-entry:last").append(formattedOnlineDates + "<br>");
        }
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
		}],
    display: function() {

        for (var job in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            // add work URL to formattedEmployer.  URL opens in a new browser window.
            formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url + "\"" + " target=\"_blank\"");
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;


            var formattedWorkLocation = HTMLworkLocation.replace("%data%",
                work.jobs[job].location);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%",
                work.jobs[job].description);

            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
};
bio.display();
projects.display();
education.display();
work.display();