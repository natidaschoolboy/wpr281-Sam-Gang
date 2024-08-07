const courses = [
    {
        title: "Higher Certificate",
        alias:"Higher Certificate",
        code: "HC001",
        duration: "1 year",
        description: "This is a Higher Certificate course.",
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab perferendis aliquid eius, tempora maxime perspiciatis adipisci soluta sapiente assumenda laborum quod doloribus vitae neque ipsam! Excepturi ea maxime minima.",
        completed: "no",
        pic: "img/hc.jpeg",
        modules: [
            {
                name: "Module 1",
                lecturer: "Lecturer A",
                venue: "Room 101",
                studyGuide: "study guide/WPR 281 Study Guide [2024] v1.4.pdf",
                videoLink: "https://www.youtube.com/watch?v=gL6SkHd8Ujk"
            },
            {
                name: "Module 2",
                lecturer: "Lecturer A",
                venue: "Room 102",
                studyGuide: "study guide/WPR 281 Study Guide [2024] v1.4.pdf",
                videoLink: "https://www.youtube.com/watch?v=gL6SkHd8Ujk"
            },
            // Add more modules as needed
        ]
    },
    {
        title: "Diploma",
        alias: "Diploma",
        code: "D001",
        duration: "3 year",
        description: "This is a Diploma course.",
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab perferendis aliquid eius, tempora maxime perspiciatis adipisci soluta sapiente assumenda laborum quod doloribus vitae neque ipsam! Excepturi ea maxime minima.",
        pic: "img/bit.jpeg",
        modules: [
            {
                name: "Module 1",
                lecturer: "Lecturer A",
                venue: "Room 101",
                studyGuide: "study guide/WPR 281 Study Guide [2024] v1.4.pdf",
                videoLink: "https://www.youtube.com/watch?v=gL6SkHd8Ujk"
            },
            // Add more modules as needed
        ]
    },
    {
        title: "Bsc In Information Technology",
        alias: "Bsc in Information Technology",
        code: "BIT001",
        duration: "4 year",
        description: "This is a BIT course.",
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab perferendis aliquid eius, tempora maxime perspiciatis adipisci soluta sapiente assumenda laborum quod doloribus vitae neque ipsam! Excepturi ea maxime minima.",
        pic: "img/bit.jpeg",
        modules: [
            {
                name: "Module 1",
                lecturer: "Lecturer A",
                venue: "Room 101",
                studyGuide: "study guide/WPR 281 Study Guide [2024] v1.4.pdf",
                videoLink: "https://www.youtube.com/watch?v=gL6SkHd8Ujk"
            },
            // Add more modules as needed
        ]
    },
    {
        title: "Bsc of Computing",
        alias: "Bsc of Computing",
        code: "BCOM001",
        duration: "4 year",
        description: "This is a Bsc in Computing course.",
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab perferendis aliquid eius, tempora maxime perspiciatis adipisci soluta sapiente assumenda laborum quod doloribus vitae neque ipsam! Excepturi ea maxime minima.",
        pic: "img/bit.png",
        modules: [
            {
                name: "Module 1",
                lecturer: "Lecturer A",
                venue: "Room 101",
                studyGuide: "study guide/WPR 281 Study Guide [2024] v1.4.pdf",
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
                document.getElementById('search-form').innerHTML ='<button id="btn1" class="course-btn" onclick="displayModule1()"><p id="p1" style="font-size: 30px">'+course.alias+'</p> </button>'+ 
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
    
    document.getElementById('bodylicious').innerHTML=`<header class="header1">
        <a href="#" class="logo">We<span style="color: yellow">Learn</span></a>

        <ul class="navlist">
            <li><a href="#home" class="active" style="color: white" onclick="home()">Home</a></li>
           

        </ul>

    </header>


    <section class="search" id="search">
        <video class="vid" src="vid/start-up.mp4" autoplay muted width="100%" style="position: fixed;"></video> 
        <div class="search-body" id="search-body">
            <center>
                <div class="search-form" id="search-form">
                    <h1 style="color: yellow;">Course:</h1><br/>
                    <input id="search-input" class="search-input" type="text" placeholder="Search For Course"> <br></br>
                    <button class="search-button" onclick="search()"><h1>Search</h1></button><br></br>
                    <table bgcolor="white">
                        <tr bgcolor="grey"><th>Available Courses</th></tr>
                        <tr bgcolor="lightgrey"><td>Higher Certificate</td></tr>
                        <tr><td>Diploma</td></tr>
                        <tr bgcolor="lightgrey"><td>Bsc In Information Technology</td></tr>
                        <tr><td>Bsc of Computing</td></tr>
                    </table>

                </div>
            </center>
        </div>      
    </section>`;
}



function displayModule1() {
    const query = document.getElementById('p1').innerHTML.toLowerCase();
    document.getElementById('bodylicious').innerHTML=`<header class="header2" style="color: black">
        <a href="#" class="logo" style="color:black">We<span style="color: yellow">Learn</span></a>

        <ul class="navlist">
            <li><a href="#home" class="active" style="color: black" onclick="home()">Home</a></li>      

        </ul>

    </header>
    <section class="other-body" id="other-body">
    
    </section>`;
    let modulecontent= `
    <video class="vid2" src="vid/bg.mp4" autoplay muted width="100%"  style="position: fixed"></video> 
    <div class="inside-body" style="position: relative">`;
   
    for (let i in courses) {
        if (Object.prototype.hasOwnProperty.call(courses, i)) {
            const course = courses[i];
            if (course.alias.toLowerCase().includes(query)) {

                modulecontent+= '<center>'+`
                <div class="description"><h1>Course Description: </h1><p style="padding: 20px;">`+course.description1+`</p></div>`+
                '<h2 style="transform: translateY(180px);  animation: fadeInSearch 0.45s 6s ease forwards; opacity:0;">'+course.alias+'</h2> '+
                '<table class="tbl" bgcolor="lightgrey">'+
                    '<tr class="tblrow "><th>Module</th><th>Lecturer</th><th>Venue</th><th>Study Guide</th><th>Video</th><th>Done?</th></tr>';
                for (const modIndex in course.modules) {
                    const module = course.modules[modIndex];
                       
                    modulecontent+=''+
                                '<tr>'+
                                    '<td>'+module.name+'</td>'+
                                    '<td>'+module.lecturer+'</td>'+
                                    '<td>'+module.venue+'</td>'+
                                    '<td><a href="'+module.studyGuide+'" download>Download</a></td>'+
                                    '<td><a href="'+module.videoLink+'" target="_blank">Watch</a></td>'+
                                    '<td><button class="btncourse"> Complete</button></td>'
                                '</tr>';
                                            
                }
               modulecontent+='</table></center></div>';
               document.getElementById('other-body').innerHTML=modulecontent;
                
            }
            
            
        }
    }
    
}






