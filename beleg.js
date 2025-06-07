//jsondata --jsonString

            //Fragen von Chatgpt

var category;
var quizmode="local";
var jsonObject;
var shuffledQuestions;
var questionKeys;
var correctAnswerId;
const totalquestion=10;
var askedquestion=0;
var correctanswer=0;

var result=0;
var currentColor = "red"; // Initial color
var currentWidth=0; //for bar
var currentWidth1=0;

var JsonString={
    "maths": [
    {"question":" (x^2) + (x^2)?", "options":["2x^2","x^4","x^8","2x^4"]},
    {"question":" (x^2) * (x^2)?", "options":["x^4","x^2","2x^2","4x"]},
    {"question":"x*x?", "options":["x^2","x^3","2x^2","4x"]},
    {"question":" Expand (a+b)^2", "options":["a^2+2ab+b^2", "2a^2+2b^2+ab", "a^2+b^2", "2a+2b"]},
    {"question":"Expand (a-b)^2", "options":["a^2-2ab+b^2","a^2+2ab+b^2","a^2-b^2","a-2ab+b"]},
    {"question":"Expand (a+b)*(a-b)", "options":["=a^2-b^2","=a^2-2ab+b^2","=a^2+2ab+b^2","=a^2+b^2"]},
    {"question":"Expand (a+ib)^3", "options":["=a^3-3ab^2+i(3a^2b-b^3)","=a^2-b^2+2iab","=b^3-3ab^2+i(3a^2b-a^3)","=a^3-b^2+2iab^2"]},
    {"question":" 274 * 93?", "options":["25482","14875","167203","83121"]},
    {"question":" 42 / 17?", "options":["2,470588235","3,230769231","3,291666667","4,739283743"]},
    {"question":"Solve for x in the equation: 7+3x=49", "options":["x=14","x=42","x=21","x=69"]}
    ],
    "it": [
    {"question":"What authentication method does HTTP offer?", "options":["Digest Access Authentication","OTP","OAuth","2-Factor Authentication"]},
    {"question":"Which transport protocol is suitable for time-critical transmissions?", "options":["UDP","TCP","HTTP","Fast Retransmit"]},
    {"question":"What is the maximum IPv4 header size?", "options":["60 Bytes","40 Bytes","120 Bytes","210 Bytes"]},
    {"question":"How big is an IPv6 header?", "options":["40 Bytes","60 Bytes","120 Bytes","210 Bytes"]},
    {"question":"What does DNS stand for?", "options":["Domain Name System","Decentralized Name Server","Direct News Service","Decentralized Name System"]},
    {"question":"What size are IPv6 addresses?", "options":["128 Bit","32 Bit","256 Bit","64 Bit"]},
    {"question":"What is the purpose of a firewall?", "options":["Security","Data Transfer","Monitoring","Authentication"]},
    {"question":"How many layers are there in the OSI model?", "options":["7","5","11","3"]},
    {"question":"Which protocol is used to receive emails?", "options":["POP3","HTTP","SMTP","TELNET"]},
    {"question":"In which year was the @ symbol first used for emails?", "options":["1972","1976","1987","1989"]}
    ],
    "general":[
    {"question":"What is the capital of France?", "options":["Paris","Rome","Berlin","Madrid"]},
    {"question":"Who wrote 'To Kill a Mockingbird'?", "options":["Harper Lee","Mark Twain","Jane Austen","F. Scott Fitzgerald"]},
    {"question":"What is the chemical symbol for water?", "options":["H2O","CO2","NaCl","O2"]},
    {"question":"What is the tallest mountain in the world?", "options":["Mount Everest","K2","Kangchenjunga","Lhotse"]},
    {"question":"Who painted the Mona Lisa?", "options":["Leonardo da Vinci","Vincent van Gogh","Pablo Picasso","Michelangelo"]},
    {"question":"What is the currency of Japan?", "options":["Yen","Euro","Dollar","Pound"]},
    {"question":"What is the freezing point of water in Celsius?", "options":["0°C","100°C","-100°C","25°C"]},
    {"question":"Who discovered penicillin?", "options":["Alexander Fleming","Marie Curie","Isaac Newton","Albert Einstein"]},
    {"question":"Which planet is known as the Red Planet?", "options":["Mars","Venus","Mercury","Jupiter"]},
    {"question":"Who wrote 'Romeo and Juliet'?", "options":["William Shakespeare","Charles Dickens","Jane Austen","Fyodor Dostoevsky"]}
    ],
    "notelearning": [
    {
        "question": "What note is shown?",
        "options": ["C", "D", "E", "F"],
        "vexflow": "C4/q"
    },
    {
        "question": "What chord is shown?",
        "options": ["C Major", "A Minor", "G Major", "F Major"],
        "vexflow": "C4/q, E4/q, G4/q"
    }
    ]

}
    //convert jsondata in json object

jsonObject =JsonString;
//jsonObject =JSON.parse(JsonString);

var restIndices = {
    "maths": [211, 212, 213, 214, 215, 216, 217, 218, 219,220],
    "general"  :[231, 232, 233, 234, 235, 236, 237, 238,239,240],
    "it":[241, 242,243, 244, 245, 246, 247, 248,249, 250]
}

//this is just display the homepage
function ShowHome() {
    document.querySelector(".homepage").style.display = "block";
    document.querySelector(".QuestionAnswer").style.display = "none";
    document.querySelector(".Quizpart").style.display = "none";
    location.reload();
}  

function ShowMaths() {
    category = "maths";
    document.querySelector(".homepage").style.display = "none";
    document.querySelector(".QuestionAnswer").style.display = "none";
    document.querySelector(".Quizpart").style.display = "block";
    document.querySelector(".quizQuestion").style.display = "block";
    document.querySelector(".quizanswer").style.display = "block";
    
    document.querySelector(".Quizpart .header").innerText = "MATHEMATIK";
    document.querySelector(".Quizpart #Topic").innerText =
        "Hier wird insgesamt  10 Fragen   zu Mathematik gestellt , die  konzentrieren sich auf verschiedene Konzepte der Algebra und einfache Rechnungen.";
    document.getElementById("restApiToggle").style.display = "block";
}

function ShowIT() {
    category = "it";
    document.querySelector(".homepage").style.display = "none";
    document.querySelector(".QuestionAnswer").style.display = "none";
    document.querySelector(".Quizpart").style.display = "block";
    document.querySelector(".quizQuestion").style.display = "block";
    document.querySelector(".quizanswer").style.display = "block";

    document.querySelector(".Quizpart .header").innerText = "INTERNET TECHNOLOGIE-1";
    document.querySelector(".Quizpart #Topic").innerText =
        "Hier wird insgesamt  10 Fragen   zu INTERNET TECHNOLOGIE-1 gestellt , die  konzentrieren sich auf HTTP , IP Adresse usw.";
    document.getElementById("restApiToggle").style.display = "none";
    document.getElementById("toggle-button").checked = false; // ensure it's reset
    quizmode = "local"; // enforce local mode
}

function ShowNoteLernen() {
    category = "notelearning";
    document.querySelector(".homepage").style.display = "none";
    document.querySelector(".QuestionAnswer").style.display = "none";
    document.querySelector(".Quizpart").style.display = "block";
    document.querySelector(".quizQuestion").style.display = "block";
    document.querySelector(".quizanswer").style.display = "block";

    document.querySelector(".Quizpart .header").innerText = "NOTEN LERNEN";
    document.querySelector(".Quizpart #Topic").innerText =
        "Hier werden Fragen zur Identifizierung von Musiknoten gestellt.";
    document.getElementById("restApiToggle").style.display = "none";
    document.getElementById("toggle-button").checked = false;
    quizmode = "local";
}


function Allgemein() {
    category = "general";
    document.querySelector(".homepage").style.display = "none";
    document.querySelector(".QuestionAnswer").style.display = "none";
    document.querySelector(".Quizpart").style.display = "block";
    document.querySelector(".quizQuestion").style.display = "block";
    document.querySelector(".quizanswer").style.display = "block";

    document.querySelector(".Quizpart .header").innerText = "GENERAL KNOWLEDGE";
    document.querySelector(".Quizpart #Topic").innerText =
        "Hier wird einfache allgemeine Fragen dargestellt.";
    document.getElementById("restApiToggle").style.display = "none";
    document.getElementById("toggle-button").checked = false;
    quizmode = "local";
}



            //Checkbox toogle button

            
function toggleButton() {
    var isChecked = document.getElementById("toggle-button").checked;
    if(isChecked==true){
        quizmode="RESTAPI";
        console.log("Restapi is turned on");

    }
    else{
        quizmode="local";   
        console.log("local mode is turned on");
    }
}

            //schuffle the question so that it wobt be same always
function schufflequestion(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}
// Global variable to keep track of current question index
var currentQuestionIndex = 0;



function getKeyArray(jsonObject) {
    questionKeys = [];
    for (var i in jsonObject) {
        questionKeys.push(i);
    }
    return questionKeys;
}

function setQuestionLabel(question) {
    document.getElementById("quizQuestion").innerHTML = question;
}

function setButtonLabels(answers) {
    console.log("Answers" ,answers);
    var answerKeys;
    if (quizmode == "local") {
        answerKeys = schufflequestion([0, 1, 2, 3]);
    } else if (quizmode == "RESTAPI") {
        answerKeys = schufflequestion([0, 1, 2, 3]);
    }
    correctAnswerId = "answerButton" + answerKeys[0];
    console.log("Answerkey[0] "+answerKeys[0]);
    for (let i = 0; i < answerKeys.length; i++) {
        let buttonId = "answerButton" + answerKeys[i];
        document.getElementById(buttonId).innerHTML = answers[i];
    }
}



// Function to display a question
function DisplayQuestion() {
    var question;
    var answers;
    var questionObject;

    if (quizmode === "local") {
        var questionKey = questionKeys.pop();
        questionObject = jsonObject[category][questionKey];
        question = questionObject["question"];
        answers = questionObject["options"];

        // Handle "maths" category (KaTeX rendering)
        if (category === "maths") {
            question = katex.renderToString(question);
            let tmp = [];
            for (let i = 0; i < 4; i++) {
                tmp.push(katex.renderToString(answers[i]));
            }
            answers = tmp;

            document.getElementById("quizQuestionText").innerHTML = question;
            document.getElementById("vexflow-container").innerHTML = ""; // clear music rendering

        // Handle "notelearning" category (VexFlow rendering)
        } else if (category === "notelearning" && questionObject["vexflow"]) {
            document.getElementById("quizQuestionText").innerText = question;

            const container = document.getElementById("vexflow-container");
            container.innerHTML = ""; // Clear old render

            const vf = new Vex.Flow.Factory({
                renderer: { elementId: "vexflow-container", width: 300, height: 150 }
            });

            const score = vf.EasyScore();
            const system = vf.System();

            system.addStave({
                voices: [score.voice(score.notes(questionObject.vexflow))]
            }).addClef("treble").addTimeSignature("4/4");

            vf.draw();

        // Handle "it" and "general"
        } else {
            document.getElementById("quizQuestionText").innerHTML = question;
            document.getElementById("vexflow-container").innerHTML = ""; // clear music rendering
        }

        setButtonLabels(answers);

    } else if (quizmode === "RESTAPI") {
        registerUser("test@gmail.com", "secret");
        var url = "https://idefix.informatik.htw-dresden.de:8888/api/quizzes/" + questionKeys[askedquestion];
        var email = "test@gmail.com";
        var password = "secret";

        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Authorization", "Basic " + btoa(email + ":" + password));
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    question = response["text"];
                    answers = response["options"];

                    if (category === "maths") {
                        question = katex.renderToString(question);
                        let tmp = [];
                        for (let i = 0; i < 4; i++) {
                            tmp.push(katex.renderToString(answers[i]));
                        }
                        answers = tmp;
                    }

                    document.getElementById("quizQuestionText").innerHTML = question;
                    document.getElementById("vexflow-container").innerHTML = "";
                    setButtonLabels(answers);

                } else {
                    console.error("Error fetching data:", xhr.statusText);
                }
            }
        };
        xhr.send();
    }
}

 




















// Function to start the quiz
function StartQuiz() {
    askedquestion=0;
    correctanswer=0;
    document.querySelector(".homepage").style.display = "none";
    document.querySelector(".QuestionAnswer").style.display = "block";
    document.querySelector(".Quizpart").style.display = "none";
    document.querySelector(".ShowResult").style.display = "none";
    document.querySelector(".progress-container").style.display = "block";

    document.getElementById("myBar1").style.width=0;
    document.getElementById("myBar").style.width=0;
    
    // Check the category: "math", "general", or "it1"
    if (quizmode === "local") {
        
        questionKeys = getKeyArray(jsonObject[category]);
    }
    else {
        //may be also need questionskey
        questionKeys = restIndices[category]; //to get the keys from rest API
    }
    questionKeys = schufflequestion(questionKeys);
    console.log("qkeys: " + questionKeys);
    DisplayQuestion();
}


            //Prgressbar
function Progressbar() {
    var progressBar ;
    var increaseBy = 10; // Increase width by 10%
            // Get the current width of the progress bars
   
    if (result === 0) {
        progressBar= document.getElementById("myBar1");
        currentWidth1 += increaseBy;
        progressBar.style.width = currentWidth1 + "%";
        progressBar.style.backgroundColor = "red";
    }
    // If result is 1, increase the width by 10 with green color
    else if (result === 1) {
        progressBar= document.getElementById("myBar");
        currentWidth += increaseBy;
        progressBar.style.width = currentWidth + "%";
        progressBar.style.backgroundColor = "green";
    } 
}
            //function to display the result 
function Display_Result(correctanswer) {
    //document.getElementsByClassName("progress-container").style.display="none";
   
        // Hide elements
        document.querySelector(".progress-container").style.display = "none";
        document.querySelector(".quizQuestion").style.display = "none";
        document.querySelector(".quizanswer").style.display = "none";
        document.querySelector(".ShowResult").style.display = "block";
    
        var correctPercentage = correctanswer * 10;
        var incorrectPercentage = 100 - correctPercentage;
    
        // Create pie chart
        var canvas = document.getElementById('myPieChart');
        var ctx = canvas.getContext('2d');
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var radius = Math.min(centerX, centerY);

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw correct slice
        var startAngle = 0;
        var endAngle = (correctPercentage / 100) * (2 * Math.PI);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.fillStyle = 'green';
        ctx.fill();

        // Draw incorrect slice
        startAngle = endAngle;
        endAngle = 2 * Math.PI;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.fillStyle = 'red';
        ctx.fill();

        var resultDescription=document.getElementById("Result_Description");
        var obtainedMarks = correctanswer;
        var totalMarks = 10;
        // Construct the result description text
        var descriptionText = "Obtained Mark = " + obtainedMarks + "<br>Total Mark = " + totalMarks + "<br>";

        // Determine the message and style based on the obtained marks
        if (correctanswer < 5) {
            descriptionText += "<span style='color: red; font-weight: bold;'>TRY AGAIN</span>&#128542;";
        } else {
            descriptionText += "<span style='color: green; font-weight: bold;'>Congratulations</span>&#128525;";
        }

        // Update the content of the paragraph
        resultDescription.innerHTML = descriptionText;
}



            //to check if the answer is correct or not
function CorrectAnswer(target) {
    if (target.id==correctAnswerId) {
        console.log("Correct Answer");      
        correctanswer++;
        result=1;
        Progressbar();
    }
    else  {
        console.log("Wrong  Answer");
        result=0;
        Progressbar();
    }
    askedquestion++;
    console.log("Asked question: "+ askedquestion);
    if(askedquestion<totalquestion)
    {
        DisplayQuestion();
    }
    else {
        console.log("Corrected Answer are " + correctanswer);
                    //function to display the result
        Display_Result(correctanswer);
        
        currentWidth=0;
        currentWidth1=0;
        correctanswer=0;   
        askedquestion=0;
    }
}




    //Click event listener
var x = document.getElementsByClassName('quizanswer')[0];
x.addEventListener('click', (e) => {
    if (e.target.id == "") {
        return;
    }
    console.log("Clicked");
    console.log("Choosed ans is:-"+e.target.id);
    CorrectAnswer(e.target)
});



        var url="https://idefix.informatik.htw-dresden.de:8888/api/quizzes/";
        var email = 'test@gmail.com'; // Provide the user's email
        var password = 'secret'; // Provide the user's password

async function getQuiz(quizId) {
    try {
      const response = await fetch(url + quizId, {
        method: "GET",
        headers: {
          Authorization: "Basic " + btoa(email + ":" + password),
        },
      });
  
      if (response.ok) {
        //const quizData = await response.json();
        const quizData= await response.json();
        console.log("Quiz information:");
        console.log(quizData);
        return quizData;
      } else if (response.status === 404) {
        console.error("Quiz with ID", quizId, "not found.");
      } else {
        console.error("Failed to get quiz information. Status:", response.status);
      }
    } catch (error) {
      console.error("Error getting quiz information:", error);
    }
  }



  const urlr = "https://idefix.informatik.htw-dresden.de:8888/api/register";
  async function registerUser(email, password) {
    try {
      // Check if email and password meet the requirements
      if (!isValidEmail(email)) {
        console.error("Invalid email format.");
        return;
      }
  
      if (password.length < 5) {
        console.error("Password must have at least five characters.");
        return;
      }
  
      const response = await fetch(urlr, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(email + ":" + password),
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.status === 200) {
        console.log("User registered successfully.");
      } else if (response.status === 400) {
        console.error("Email already taken or invalid format.");
      } else {
        console.error("Registration failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }
  
  // Function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  