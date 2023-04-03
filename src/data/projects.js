import  {ReactJsPortfolio ,GoogleKeepClone,OldPortfolio,TodoList,
  FootballDataAnalysis,DataScraping,FaceDetection,StudentGradePrediction}  from "../assets/assets";

const projects = [
  {
    name: "My React Portfolio",
    id: 1,
    category: "react",
    content:
      "This is ReactJs Personal Portfolio Web Application, Included About, Projects, Blog Pages and Resume",
    image: `${ReactJsPortfolio}`,
    live: "https://anaskhonprime.web.app/",
    code: "https://github.com/anaskhonprime",
  },
  {
    name: "TODO List App",
    id: 2,
    category: "react",
    content:
      "This is a fully functional TODO List App build with ReactJs. It contains material UI elements",
      image: `${TodoList}`,
      live: "http://yk_todo_list_app.surge.sh/",
    code: "https://github.com/Yasirkhana/todo_list_app",
  },

  {
    name: "Portfolio Template",
    id: 3,
    category: "react",
    content:
      "This is a Personal Portfolio templete with react.js.It is developed with bootstrap 3 and has 4 pages.",
      image: `${OldPortfolio}`,
      live: "http://portfolio-yasir.surge.sh/",
    code: "https://github.com/Yasirkhana/React-Portfolio",
  },

  {
    name: "Google Keep Clone",
    id: 4,
    category: "react",
    content:
      "A clone of Google Keep Web Application. It can be used to keep notes.",
      image: `${GoogleKeepClone}`,
      live: "http://yk_google_keep_clone.surge.sh/",
    code: "https://github.com/Yasirkhana/google-keep-clone",
  },
  {
    name: "Student Grade Prediction",
    id: 5,
    category: "python",
    content:
      "Prediction of student result base on previous results. First Machine is trained by inserting previous data of student then it predicts the possible future result",
      image: `${StudentGradePrediction}`,
      live: "https://github.com/Yasirkhana/Student-Grade-Prediction",
    code: "https://github.com/Yasirkhana/Student-Grade-Prediction",
  },
  {
    name: "FACE DETECTION USING OPENCV",
    id: 6,
    category: "python",
    content:
      "Python script to detect and find face from any image.",
      image: `${FaceDetection}`,
      live: "https://github.com/Yasirkhana/Face-Detection-using-OpenCV",
    code: "https://github.com/Yasirkhana/Face-Detection-using-OpenCV",
  },
  {
    name: "Webscraping Python",
    id: 7,
    category: "python",
    content:
      "Python script to scrap data from a Real-Estate website",
      image: `${DataScraping}`,
      live: "https://github.com/Yasirkhana/WebScraping-with-python",
    code: "https://github.com/Yasirkhana/WebScraping-with-python",
  },
  {
    name: "Football Data Analysis",
    id: 8,
    category: "python",
    content:
      "Data analysis script with python to analyse data of players using Fifa dataset.",
      image: `${FootballDataAnalysis}`,
      live: "https://github.com/Yasirkhana/Analysis-of-Football-Data",
    code: "https://github.com/Yasirkhana/Analysis-of-Football-Data",
  },

];

const filterButtons = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "ReactJs",
    value: "react",
  },
  {
    name: "Python",
    value: "python",
  },
];

export { projects, filterButtons };
