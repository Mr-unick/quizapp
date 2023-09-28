"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Score } from '../components/score';
import { useRouter } from 'next/navigation';


function CountdownTimer({ time }) {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = ((60 - time) / 60) * circumference;

  return (
    <svg className="countdown-timer" width="40" height="40">
      <circle
        cx="20"
        cy="20"
        r={radius}
        fill="transparent"
        stroke="yellow" // Adjust the color as needed
        strokeWidth="3" // Adjust the thickness of the circle
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
      />
      <text x="50%" y="50%" textAnchor="middle" dy="0.3em" className="countdown-text">
        {time}
      </text>
    </svg>
  );
}



function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const[scorepage,setscorepage]=useState(false);
  const router = useRouter();
  useEffect(() => {
    // Fetch questions from an API (replace 'API_URL' with your actual API endpoint)
    axios
      .get('https://opentdb.com/api.php?amount=10&category=11&type=multiple')
      .then((response) => {
        // Customize the received data to match your expected format
        console.log(response);
        const formattedQuestions = response.data.results.map((question) => {
          const options = [
            question.correct_answer, // Include the correct answer
            ...question.incorrect_answers, // Include incorrect answers
          ];
          // Shuffle the options so that the correct answer is not always first
          shuffleArray(options);
          return {
            category: question.category,
            correctOption: question.correct_answer,
            difficulty: question.difficulty,
            question: decodeEntities(question.question),
            options: options.map(decodeEntities), // Decode HTML entities in options
          };
        });
        setQuestions(formattedQuestions);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const timerId = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timer]);

  const handleAnswer = (selectedOption) => {
    // Check if the selected option is correct
    if (selectedOption === questions[currentQuestion].correctOption) {
      setScore(score + 1);
    }

    // Move to the next question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(60);
    } else {
      // Quiz is over
      setscorepage(true)
       
    }
  };
if(scorepage){
  return <div><Score score={score} questions={questions} setTimer={setTimer}/></div>
}
  if (questions.length === 0) {
    return <div class=" flex justify-center items-center h-screen w-screen">Loading...</div>;
  }
console.log(questions);
  return (
    <div className="container mx-auto p-4">
     
      <div class="question-info flex justify-center items-center flex-col w-full ">
      
     <div id="upperdiv" class="question-info rounded-3xl flex justify-center items-center flex-col h-[300px] w-full md:w-[800px]">
    
     </div> 
    
      <div class=" top-48 h-[160px] w-[300px] md:w-[900px]  rounded-3xl bg-white absolute flex justify-around items-center flex-col flex-wrap shadow-md p-5">
    
      <p className="question-number">Question {currentQuestion + 1}/{questions.length}</p>
      <h2 className="md:text-xl text-sm font-semibold mb-2">{questions[currentQuestion].question}</h2>
      </div>
      <div class="absolute top-40 z-32 bg-white rounded-full p-2">
    <CountdownTimer time={timer} class="relative top-96 z-32 " />
    </div>
       
      </div>
      <div class="bg-white p-4  mt-24">
       
        <div className="md:grid grid-cols-2 gap-4 flex flex-col">
          {questions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              className="bg-white text-black p-2  rounded-full focus:outline-none  border-2 border-yellow-500 text-md flex justify-between px-3 items-center"
             
            >
              {option}
             <button  onClick={() => handleAnswer(option)} class='rounded-full h-5 w-5 border-2 border-yellow-600 active:bg-yellow-400 bg-white'></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Function to decode HTML entities in question text and options
function decodeEntities(encodedString) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = encodedString;
  return textArea.value;
}

// Function to shuffle an array (for randomizing answer options)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default Quiz;
