import strip from '../assets/strip.svg'
import mstrip from '../assets/strip-mob.svg'

const Strip = () => {
    return(
        <div className='relative top-0 pointer-events-none' >
            <img className='hidden md:flex' src={strip} alt='traditional-strip' ></img>
            <img className='relative md:hidden' src={mstrip} alt='strip'></img>
        </div>
    )
}

export default Strip;