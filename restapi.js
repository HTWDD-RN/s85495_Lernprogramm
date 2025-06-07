console.log("Registration is on")
const username = "test@gmail.com";
const password = "secret";
const url = "https://idefix.informatik.htw-dresden.de:8888/api/register";
const baseUrl = "https://idefix.informatik.htw-dresden.de:8888/api/quizzes/"; //for get request


                        // Function to register a new user
async function registerUser(email, password) {
  try {
    // Check if email and password meet the requirements
    console.log("Registration is on")
    if (!isValidEmail(email)) {
      console.error("Invalid email format.");
      return;
    }

    if (password.length < 5) {
      console.error("Password must have at least five characters.");
      return;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(username + ":" + password),
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

// Example usage
 registerUser("test@gmail.com", "secret");










 





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
  ]
}
// Collect all questions for each category
const questionsByCategory = {};

// Group questions by category
for (const category in JsonString) {
  if (JsonString.hasOwnProperty(category)) {
    questionsByCategory[category] = JsonString[category];
  }
}

// Iterate over categories in the desired order
const categoriesOrder = ["general"];
for (const category of categoriesOrder) {
  // Check if the category has questions
  if (questionsByCategory.hasOwnProperty(category)) {
    const questions = questionsByCategory[category];
    // Iterate over each question in the category
    for (const question of questions) {
      const title = category;
      const text = question.question;
      const options = question.options;
      let answer = [0]; // Initialize as an empty array
      
      // Check if the question has an answer property and if it's an array
  
      
      // Create the quiz
     // createQuiz(title, text, options, answer);
    }
  }
}



              // Function to create a new quiz
async function createQuiz(title, text, options, answer) {
    try {
      // Check if title, text, and options meet the requirements
      if (!title || !text || title.trim() === "" || text.trim() === "" || options.length < 2) {
        console.error("Title, text, or options are missing or invalid.");
        return;
      }
  
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(username + ":" + password),
        },
        body: JSON.stringify({ title, text, options, answer }),
      });
  
      if (response.ok) {
        const quizData = await response.json();
        console.log("Quiz created successfully:");
        console.log(quizData);
      } else {
        console.error("Failed to create quiz. Status:", response.status);
      }
    } catch (error) {
      console.error("Error creating quiz:", error);
    }
  }

  

  // Example usage to create a new quiz
  createQuiz(
    "The Java Logo",
    "What is depicted on the Java logo?",
    ["Robot", "Tea leaf", "Cup of coffee", "Bug"],
    [2]
  );
 

  
















  async function getQuiz(quizId) {
    try {
      const response = await fetch(baseUrl + quizId, {
        method: "GET",
        headers: {
          Authorization: "Basic " + btoa(username + ":" + password),
        },
      });
  
      if (response.ok) {
        const quizData = await response.json();
        //return await response.json();
        console.log("Quiz information:");
        console.log(quizData);
      } else if (response.status === 404) {
        console.error("Quiz with ID", quizId, "not found.");
      } else {
        console.error("Failed to get quiz information. Status:", response.status);
      }
    } catch (error) {
      console.error("Error getting quiz information:", error);
    }
  }
  
  // Example usage to get information about a quiz with ID 1
  getQuiz(220);

















  // Function to solve a quiz by providing an answer
async function solveQuiz(quizId, answer) {
    try {
      const response = await fetch(baseUrl + quizId + "/solve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(username + ":" + password),
        },
        body: JSON.stringify(answer),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("Quiz solved successfully:");
        console.log(result);
      } else if (response.status === 404) {
        console.error("Quiz with ID ", quizId, "in solveSquiz not found.");
      } else {
        console.error("Failed to solve quiz. Status:", response.status);
      }
    } catch (error) {
      console.error("Error solving quiz:", error);
    }
  }
  
  // Example usage to solve a quiz with ID 1 and answer [1, 2]
  solveQuiz(220, [1]);







  async function deleteQuiz(quizId) {
    try {
      const response = await fetch(baseUrl + quizId, {
        method: "DELETE",
        headers: {
          Authorization: "Basic " + btoa(username + ":" + password),
        },
      });
  
      if (response.ok) {
        console.log("Quiz deleted successfully.");
      } else if (response.status === 404) {
        console.error("Quiz with ID", quizId, "not found.");
      } else if (response.status === 403) {
        console.error("Forbidden: You are not the creator of this quiz.");
      } else {
        console.error("Failed to delete quiz. Status:", response.status);
      }
    } catch (error) {
      console.error("Error deleting quiz:", error);
    }
  }
  //deleteQuiz(39);