import React, { useEffect, useState } from "react";

const Cards = ({image, title, sub, col, isDirection}) => {

    return(
        <div className={`md:card w-1/4 h-4/5 rounded-lg flex ${col} border-2s p-2`}>
            <div className="w-2/4 h-full flex justify-center items-center">
                <img className="w-4/5" src={image} alt="img"/>
            </div>
            <div className="w-2/4 h-full p-2">
                <h1 className="text-sm font-bold">{title}</h1>
                <p>{sub}</p>
                {
                    isDirection ? (
                        <div>
                            <button className="p-4 rounded-lg bg-yello-200">Get direction</button>
                        </div>
                    ) : (
                        <div>
                            <button>View gallery</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Cards;