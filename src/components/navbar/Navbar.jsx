import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className="flex justify-center py-5">
                <div className="">
                   
                    <div className="flex justify-center mb-5">
                       
                        <img
                            className='w-16 mt-5'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6v1CDcdmwwtI4urr2_-CQB9lrjJMUqGfEroIa236xkA&s"
                            alt="img"
                        />
                    </div>

                  
                    <h1 className='text-white text-3xl lg:text-6xl font-medium text-center mb-3'>
                        Background Removal Application
                    </h1>

                
                    <p className='text-white text-2xl font-light text-center mb-3'>
                        Fast, Simple and Great performance.
                    </p>


                </div>
            </div>
        </div>
    )
}