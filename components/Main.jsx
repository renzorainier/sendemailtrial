import React from 'react'

function Main() {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600"> LETS BUILD SOMETHING LEGENDARY TOGETHER</p>
                    <h1 className="py-4 text-gray-700">Hi, I'am <span className="text-[#5651e5]">Renz</span></h1>
                    <h1 className="py-2 text-gray-700">
                        A Front-End Dev Wanna Be
                    </h1>
                    <p className="py-2 text-gray-600 max-w-[70%] m-auto">
                        Just a simple guy who is addicted to coding
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="">
                            <FaFacebook />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main