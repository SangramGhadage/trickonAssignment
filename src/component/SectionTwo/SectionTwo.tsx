import React, { useState } from 'react'
import Card from '../Card'
import gameDetails from '../../utils/gameData.json';

function SectionTwo() {
    const [tab, setTab] = useState('all')
    return (
        <div className='section-two w-full py-10'>

            <div className='flex flex-column text-center  w-full'>
                <h1 className='mt-20 mb-5 text-center w-full text-3xl text-white font-medium'>Newly Released Games</h1>

            </div>
            <div className='w-full flex ' style={{ justifyContent: 'center' }}>

                <div className='flex flex-row gap-7 mt-5 mb-5' style={{ alignItems: 'center' }}>
                    <h6 onClick={() => setTab('all')} className={`${tab === 'all' ? 'active' : ''} text-sm`}>All</h6>
                    <h6 onClick={() => setTab('ps4')} className={`${tab === 'ps4' ? 'active' : ''} text-sm`}>PS4</h6>
                    <h6 onClick={() => setTab('ps5')} className={`${tab === 'ps5' ? 'active' : ''} text-sm`}>PS5</h6>
                    <h6 onClick={() => setTab('xBox')} className={`${tab === 'xBox' ? 'active' : ''} text-sm`}>X-Box</h6>
                </div>
            </div>

            <div className='p-10'>
                <div className='flex flex-row flex-wrap justify-between gap-10'>

                    {gameDetails.filter(item => tab === 'all' || item.tags.includes(tab))?.map((item) => (

                        <Card
                            gameName={item.gameName}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SectionTwo