import call from '../assets/call.svg'
import map from '../assets/map.svg'
import lang from '../assets/lang.svg'

const Sticky = () => {

    return(
        <div>
            <fbar className="flex flex-col w-auto -right-12 bottom-10 ml-3  fixed rounded-2xl gap-y-3 bg-green-500 p-3" >
                <div className='flex flex-row text-white  items-center'>
                    <img className=' pr-6 pl-2 py-4 ' src={call} alt='call'></img>
                    <p>Contact</p>
                </div>
                <div className='flex flex-row text-white items-center'>
                    <img className=' pr-6 pl-2 py-4' src={map} alt='map'></img>
                    <p>Map</p>
                </div>
                <div className='flex flex-row text-white items-center'>
                    <img className=' pr-6 pl-2 py-4' src={lang} alt='lang'></img>
                    <p>Translate</p>
                </div>
            </fbar>
        </div>
        

    )
}

export default Sticky;