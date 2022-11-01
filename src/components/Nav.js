import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import Strip from './Strip';

const Nav = () => {

    const clickHandler = (event) => {
        event.target.classList.add('.cpage')
    }

    return(
        <div>
            <Strip/>
            <div className='flex p-4  justify-center items-center lg:justify-between flex'>  
<<<<<<< HEAD
                <img className='w-52 md:w-64 pl-4 pointer-events-none' src={logo} alt='Logo'></img>
                <div className='flex hidden font-medium text-xl text-green-500 gap-x-11 pr-4 lg:flex' >
                    <Link to='/'><p className='hover:text-red-500'>Home</p></Link> 
=======
                <Link to='/'><img className='w-52 md:w-64 pl-4 pointer-events-none' src={logo} alt='Logo'></img></Link>
                <links className='flex hidden font-medium text-xl text-green-500 gap-x-11 pr-4 lg:flex' >
                    <Link to='/' onClick={clickHandler}><p className='cpage hover:text-red-500'>Home</p></Link> 
>>>>>>> 73afa330ca89594b433f31b5dcd28260715a1a2b
                    <Link to='/about'><p className='hover:text-red-500'>About</p></Link> 
                    <Link to='/festivals'><p className='hover:text-red-500'>Festivals</p></Link> 
                    <Link to='/gallery'><p className='hover:text-red-500'>Gallery</p></Link> 
                    <Link to='/poojas'><p className='hover:text-red-500'>Poojas</p></Link> 
                    <Link to='/contact'><p className='hover:text-red-500'>Contact</p></Link> 
                </div>
            </div>
        </div>
    )
}

export default Nav;