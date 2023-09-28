import React from 'react'
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilePdf,
  faRedo,
  faHome,
  faShare,
  faCog,
  faArrowLeft,
  faEye,
} from '@fortawesome/free-solid-svg-icons';



export const Score = ({score,questions}) => {

    const iconStyle = {
        fontSize: '1.5rem', // Adjust the size as needed
        color: 'white',
      };
      const iconStyle2 = {
        fontSize: '10px', // Adjust the size as needed
        color: 'white',
      };
      const router = useRouter();
    
  return(
    <div className="container mx-auto p-4">
     
    <div class="question-info flex justify-center items-center flex-col w-full ">
    
   <div id="upperdiv" class="question-info rounded-3xl flex justify-center items-center flex-col h-[400px] w-full md:w-[800px] ">
   <div class="text-lg font-extrabold text-white relative "><h1>hh{"<"}</h1></div>
   </div> 
  
    <div class=" top-80 h-[160px] w-[300px] md:w-[800px]  rounded-3xl bg-white absolute flex justify-around items-center flex-col flex-wrap shadow-md p-5">
  
    <div id="box" class="flex justify-around w-full"><span class="text-yellow-400 text-xl" >Complition : 100% </span> <span class="text-yellow-400 text-xl">Total question {questions.length}</span></div>
    <div id="box" class="flex justify-around w-full"><span class="text-green-500 text-xl">Correct</span> <span class="text-red-500 text-xl">Wrong {questions.length - score} </span></div>
    </div>
    <div class="absolute top-32 z-32 bg-white rounded-full p-2 border-[12px] border-yellow-400 h-[150px] w-[150px] flex flex-col justify-center items-center ">
    <span class="text-3xl font-extrabold text-yellow-500">Score</span>
     <span class="text-2xl font-extrabold ">{(score/questions.length)*100}%</span>
  </div>
     
    </div>
    <div class=" w-full mt-24 h-full  md:p-5 p-1 flex justify-center items-center flex-col">
     <div class="flex justify-around items-center my-4  md:p-2 md:w-[800px] w-full text-sm " >
        <div class="flex justify-center items-center flex-col w-1/3">
            <span onClick={()=>setTimer(60)} class="h-14 w-14 rounded-full bg-yellow-500 flex justify-center items-center"><FontAwesomeIcon icon={faRedo} style={iconStyle}/> </span>
            <span class="md:text-xl text-lg mt-1">Play Again</span>
        </div>
        <div class="flex justify-center items-center flex-col w-1/3">
            <span
            class="h-14 w-14 rounded-full bg-yellow-500 flex justify-center items-center"><FontAwesomeIcon icon={faEye} style={iconStyle} /> </span>
            <span class="md:text-xl text-lg mt-1">Review </span>
        </div>
        <div class="flex justify-center items-center flex-col w-1/3">
            <span
            class="h-14 w-14 rounded-full bg-yellow-500 flex justify-center items-center">  <FontAwesomeIcon icon={faShare} style={iconStyle} /> </span>
            <span class="md:text-xl text-lg mt-1">Share</span>
        </div>
     </div>
     <div class="flex justify-around items-center my-4  p-2 md:w-[800px] w-full text-sm" >
        <div class="flex justify-center items-center flex-col w-1/3">
            <span class="h-14 w-14 rounded-full bg-yellow-500 flex justify-center items-center"> <FontAwesomeIcon icon={faFilePdf} style={iconStyle} /> </span>
            <span class="md:text-xl text-lgmt-1">Generate Pdf</span>
        </div>
        <div class="flex justify-center items-center flex-col w-1/3">
            <span onClick={()=>router.push("/home")} class="h-14 w-14 rounded-full bg-yellow-500 flex justify-center items-center">  <FontAwesomeIcon icon={faHome} style={iconStyle} /> </span>
            <span  class="md:text-xl text-lg mt-1">Home</span>
        </div>
        <div class="flex justify-center items-center flex-col w-1/3">
            <span onClick={()=>router.push("/leaderboard")} class="h-14 w-14 rounded-full bg-yellow-500 flex justify-center items-center">  
            <FontAwesomeIcon icon={faCog} style={iconStyle}/> </span>
            <span  class="md:text-xl text-lg mt-1">Leaderbord</span>
        </div>
     </div>
     
    
     

    
    </div>
  </div>
   )
  }
