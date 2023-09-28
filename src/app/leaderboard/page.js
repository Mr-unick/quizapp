import React from 'react'



export const LeaderBoard = (props) => {
  return(
    <div className="container mx-auto p-4">
     
      <div class="question-info flex justify-center items-center flex-col w-full ">
      
        
        <div id="upperdiv" class="question-info rounded-3xl flex justify-center items-end  h-[380px] w-full md:w-[800px] text-white">
        <div class="h-20 w-20 rounded-full bg-black absolute top-28 left-10"></div>
        <div class="h-20 w-20 rounded-full bg-black absolute top-16 left-[155px]"></div>
        <div class="h-20 w-20 rounded-full bg-black absolute top-32 right-10"></div>
        <div class="bg-[#e3b001] h-[200px] -rotate-12 w-[80px] flex justify-start items-center flex-col">
            <span class="text-7xl font-extrabold pt-4">2</span>
            <span>points</span>
        </div>
        <div class="bg-[#e3b001] h-[240px]  w-[80px] flex justify-start items-center flex-col">
        <span class="text-8xl font-extrabold pt-4">1</span>
            <span>points</span>
        </div>
        <div class=" h-[180px] rotate-12 w-[80px] bg-[#e3b001] flex justify-start items-center flex-col">
        <span class="text-6xl font-extrabold pt-4">3</span>
            <span>points</span>
        </div>

        </div> 
       
      </div>
      <div class=" p-4 rounded-3xl h-[510px] w-[360px] bg-white absolute top-80 shadow-md">
       
        <div class="border-t-2 h-14 w-[330px] bg-slate-300 px-8">
            <div class="h-5 w-5 rounded-full bg-black" ></div>
        </div>
      </div>
    </div>
   )
  }
