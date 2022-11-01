import React from "react";
import JsonData from './poojalisst.json'

function JsonDataDisplay(){

    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td className="pl-5" >{info.pooja}</td>
                    <td className="text-center">{info.price}</td>
                </tr>
            )
        }
    )

    return(
            <div className="flex justify-center">
                <table className=" m-6 w-screen md:w-2/4">
                    <thead>
                        <tr className="text-semibold">
                        <th>Pooja</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {DisplayData}
                    </tbody>
                </table>
            </div>
        )
    } 
export default JsonDataDisplay;