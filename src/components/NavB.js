import { Link } from 'react-router-dom';
//Navbar for bottom
const Nav = () => {

    return(
        <div className='flex hidden p-4 justify-between items-center md:flex'>
            <div className='pl-3 flex font-medium text-base text-red-500 gap-x-6 pr-4' >
                <Link to='/'><p className='hover:text-green-500'>Home</p></Link> /
                <Link to='/about'><p className='hover:text-green-500'>About</p></Link> /
                <Link to='/festivals'><p className='hover:text-green-500'>Festivals</p></Link> /
                <Link to='/gallery'><p className='hover:text-green-500'>Gallery</p></Link> /
                <Link to='/poojas'><p className='hover:text-green-500'>Poojas</p></Link> /
                <Link to='/contact'><p className='hover:text-green-500 active:font-semibold'>Contact</p></Link> 
            </div>
        </div>
    )
}

export default Nav;