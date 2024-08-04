const courses = [
    {
        title: "Higher Certificate",
        alias:"Higher Certificate",
        code: "HC001",
        duration: "1 year",
        description: "This is a Higher Certificate course.",
        pic: "img/hc.jpeg",
        modules: [
            {
                name: "Module 1",
                lecturer: "Lecturer A",
                venue: "Room 101",
                studyGuide: "study-guide.pdf",
                videoLink: "https://www.youtube.com/watch?v=gL6SkHd8Ujk"
            },
            // Add more modules as needed
        ]
    },
    {
        title: "Diploma",
        code: "D001",
        duration: "3 year",
        description: "This is a Diploma course.",
        pic: "img/bit.jpeg",
        modules: [
            {
                name: "Module 1",
                lecturer: "Lecturer A",
                venue: "Room 101",
                studyGuide: "study-guide.pdf",
                videoLink: "https://www.youtube.com/watch?v=gL6SkHd8Ujk"
            },
            // Add more modules as needed
        ]
    },
    {
        title: "Bachelor in Information Technology",
        alias: "Bachelors in Information Technology",
        code: "BIT001",
        duration: "4 year",
        description: "This is a BIT course.",
        pic: "img/bit.jpeg",
        modules: [
            {
                name: "Module 1",
                lecturer: "Lecturer A",
                venue: "Room 101",
                studyGuide: "study-guide.pdf",
                videoLink: "https://www.youtube.com/watch?v=gL6SkHd8Ujk"
            },
            // Add more modules as needed
        ]
    },
    {
        title: "BIT",
        alias: "Bsc in IT",
        code: "BIT001",
        duration: "4 year",
        description: "This is a BIT course.",
        pic: "img/hc.png",
        modules: [
            {
                name: "Module 1",
                lecturer: "Lecturer A",
                venue: "Room 101",
                studyGuide: "study-guide.pdf",
                videoLink: "https://www.youtube.com/watch?v=gL6SkHd8Ujk"
            },
            // Add more modules as needed
        ]
    },
    {
        title: "Bachelors in Computing",
        code: "BCOM001",
        duration: "4 year",
        description: "This is a Bsc in Computing course.",
        pic: "img/bit.png",
        modules: [
            {
                name: "Module 1",
                lecturer: "Lecturer A",
                venue: "Room 101",
                studyGuide: "study-guide.pdf",
                videoLink: "https://www.youtube.com/watch?v=gL6SkHd8Ujk"
            },
            // Add more modules as needed
        ]
    },
    // Add more courses as needed
];
function search() {
    const query = document.getElementById('search-input').value.toLowerCase();
    for (let i in courses) {
        if (Object.prototype.hasOwnProperty.call(courses, i)) {
            const course = courses[i];
            if (course.title.toLowerCase().includes(query)) {
                document.getElementById('search-form').innerHTML ='<button id="btn1" class="course-btn" onclick="displayModule()"><p id="p1" style="font-size: 30px">'+course.alias+'</p> </button>'+ 
    '<img src="'+course.pic+'" alt="" style="width: 500px;height:250px;">' +
    '<div class="layer">' +
        '<p style="color: white;">Code: ' + course.code + '</p>' +
        '<p style="color: white;">Duration: ' + course.duration + '</p>' +
        '<p style="color: white;">Description: ' + course.description + '</p>' +
    '<button class="search-button" onclick="home()">Back</button></div>';

   
            }
            
            
        }
    }
    
}

function home() {
    
    document.getElementById('search-form').innerHTML='<h1 style="color: yellow;">Course:</h1><br/>'+
                    '<input id="search-input" class="search-input" type="text" placeholder="Search For Course"> <br></br>'+
                    '<button class="search-button" onclick="search()"><h1>Search</h1></button>';
}


moduleList.innerHTML = '<h6>Modules:</h6>';



function displayModule() {
    const query = document.getElementById('p1').innerHTML.toLowerCase();
    for (let i in courses) {
        if (Object.prototype.hasOwnProperty.call(courses, i)) {
            const course = courses[i];
            if (course.alias.toLowerCase().includes(query)) {
                for (const modIndex in course.modules) {
                    const module = course.modules[modIndex];
                    document.getElementById('search-form').innerHTML = 
                        '<p><strong>'+module.name+'</strong></p>'+
                        '<p>Lecturer:'+module.lecturer+'</p>'+
                        '<p>Venue: '+module.venue+'</p>'+
                        '<p><a href="'+module.studyGuide+'" target="_blank">Download Study Guide</a></p>'+
                        '<p><a href="'+module.videoLink+'" target="_blank">View Video</a></p>'
                        document.getElementById('search-form').innerHTML = ''+
                        '<h2 style="color:white">'+course.alias+'</h2>'+
                        '<table style="color:white">'+
                            '<tr><th>Module</th><th>Lecturer</th><th>Venue</th><th>Study Guide</th><th>Video</th></tr>'+
                                '<tr>'+
                                    '<td>'+module.name+'</td>'+
                                    '<td>'+module.lecturer+'</td>'+
                                    '<td>'+module.venue+'</td>'+
                                    '<td><a href="'+module.studyGuide+'" download>Download</a></td>'+
                                    '<td><a href="'+module.videoLink+'" target="_blank">Watch</a></td>'+
                                '</tr>'+
                        '</table>'
                    ;
                    
                }
                
            }
            
            
        }
    }
    
}







