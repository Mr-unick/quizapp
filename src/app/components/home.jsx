"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export const Homepage = (props) => {
    const router = useRouter();
  return(
    <div className="container mx-auto p-4">
     
    <div class="question-info flex justify-center items-center flex-col w-full ">
    
   <div id="upperdiv" class="question-info rounded-3xl flex justify-around items-center flex-col h-[300px] w-full md:w-[800px] ">
  
        <div class="flex justify-around items-center w-[400px] mt-6">
        <span>Back</span>
        <span>Hello Nick</span>
        <span>Popular</span>
        </div>
        <div class="flex justify-start items-start  w-[320px] mt-28">
        <span>Popular</span>
        </div>
        <div class="flex justify-center items-center mb-4">
                    <div onClick={()=>router.push("quiz")} class="w-[100px] h-[100px] bg-white p-5 shadow-lg rounded-xl m-2 flex justify-center items-center flex-col">
                        <p>Film</p>
                        <FontAwesomeIcon icon={faTv} />
                    </div>
                    <div class="w-[100px] h-[100px] bg-white p-3 shadow-lg rounded-xl m-2">
                    <span>1</span>
                    <span>image</span>
                    </div>
                    <div class="w-[100px] h-[100px] bg-white p-3 shadow-lg rounded-xl m-2">
                        <span>1</span>
                        <span>image</span>
                    </div>
        </div>
     </div> 
    </div>
    <div class="bg-white flex justify-center items-center flex-col mt-12">
            <div class="flex justify-between items-center px-4 py-1 w-[340px] mb-4">
            <span>Explore</span>
            <span>View All</span>
            </div>
      <div className="box">
      <div class="flex justify-center items-center mb-4">
                    <div class="w-[100px] h-[100px] bg-white p-3 shadow-lg rounded-xl m-2">
                        <span>1</span>
                        <span>image</span>
                    </div>
                    <div class="w-[100px] h-[100px] bg-white p-3 shadow-lg rounded-xl m-2">
                    <span>1</span>
                    <span>image</span>
                    </div>
                    <div class="w-[100px] h-[100px] bg-white p-3 shadow-lg rounded-xl m-2">
                        <span>1</span>
                        <span>image</span>
                    </div>
        </div>
        <div class="flex justify-center items-center mb-4">
                    <div class="w-[100px] h-[100px] bg-white p-3 shadow-lg rounded-xl m-2">
                        <span>1</span>
                       
                    </div>
                    <div class="w-[100px] h-[100px] bg-white p-3 shadow-lg rounded-xl m-2">
                    <span>1</span>
                    <span>image</span>
                    </div>
                    <div class="w-[100px] h-[100px] bg-white p-3 shadow-lg rounded-xl m-2">
                        <span>1</span>
                        <span>image</span>
                    </div>
        </div>
        <div class="flex justify-center items-center mb-4">
                    <div class="w-[100px] h-[100px] bg-white p-3 shadow-lg rounded-xl m-2">
                        <span>1</span>
                        <span>image</span>
                    </div>
                    <div class="w-[100px] h-[100px] bg-white p-3 shadow-lg rounded-xl m-2">
                    <span>1</span>
                    <span>image</span>
                    </div>
                    <div class="w-[100px] h-[100px] bg-white p-3 shadow-lg rounded-xl m-2">
                        <span>1</span>
                        <span>image</span>
                    </div>
        </div>
      </div>
    </div>
  </div>
   )
  }
