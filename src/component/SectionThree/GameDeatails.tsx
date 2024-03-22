import React from 'react'

function GameDeatails() {
    return (
        <div className='p-10 w-[100%] bg-black text-green-800 grid grid-cols-12 gap-2'>
            <div className=" col-span-6 rounded p-5">
                <div >
                    <img src="assets/gameDetails1.png" alt="" />
                </div>
                <div className='flex flex-row flex-wrap gap-9 pt-10'>
                    <img src="assets/gameDetails2.png" alt="" style={{ width: 200, height: 200 }} />
                    <img src="assets/gameDetails3.png" alt="" style={{ width: 200, height: 200 }} />
                    <img src="assets/gameDetails4.png" alt="" style={{ width: 200, height: 200 }} />
                </div>
            </div>
            <div className=" col-span-6 rounded p-8">
                <div className='text-xl'>
                    Mortal Kombat 1
                </div>
                <div className='text-white text-base p-2'>For single-player, the game features the return of the plot-driven Story Mode and the traditional form of Towers mode from the previous games, while introducing the addition of the seasonal Invasion mode, an online mode combining fighting mechanics with board game and role-playing game elements.</div>
                <div className='text-white text-base p-2'>Category: Fighting Action-adventure</div>
                <div className='text-white text-base p-2'>Listed Date: September 19, 2023</div>
                <div className='text-white text-base p-2'>Number of users: 439,475 </div>
                <button className='btn'>Play</button>
            </div>
            <div className='col-span-6  rounded p-5'>
                <h6 className='uppercase'>Explore A New Dimension</h6>
                <h4 className='text-4xl text-white  mb-10'>Ready to unlock your <br /> potentials in a world <br /> of fun?</h4>
                <button className='btn'>Get Started</button>
            </div>
            <div className='col-span-6 rounded '>
                <img src="assets/CTA.png" alt="" />

            </div>
        </div>
    )
}

export default GameDeatails