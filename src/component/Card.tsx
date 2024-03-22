import React from 'react'

function Card({gameName,image}) {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt="Sunset in the mountains" />
            <div className="px-6">
                <div className="font-bold text-sm text-white">{gameName}</div>
                <p className="text-white text-base text-sm">
                    Activision
                </p>
            </div>
            <div className="px-4 pb-2">
                <span className="inline-block  px-2 text-sm font-semibold text-white mb-2">Ps4</span>
                <span className="inline-block  px-2 text-sm font-semibold text-white mb-2">ps4</span>
                <span className="inline-block px-2 text-sm font-semibold text-white  mb-2">ps4</span>
            </div>
        </div>
    )
}

export default Card