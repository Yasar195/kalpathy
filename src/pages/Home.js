import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Sticky from '../components/Sticky'
import Cards from '../components/Cards'
import temple from '../assets/temple.png'
import radham from '../assets/radham.png'
import oldkpt from '../assets/old-kpt-lr.jpg';
import newkpt from '../assets/renov-kpt-lr.jpg';
import oldbuild from '../assets/oldbuild.png';
import btn from '../assets/btn.svg';
import { Link } from 'react-router-dom'

//heads is a class name to generate headings styles in this file

const Home = () => {

    const cards = [{"img": temple, "title": "Sree Visalakshi Sametha Shree Viswanatha Swamy Temple, Palakkad, Kerala, 678003", "sub": "", "col":"bg-maroon-100", "isDirection": true}, {"img": radham, "title": "Ratholsavam 2019", "sub": "is an annual Temple festival in the Kalpathy, Palakkad", "col": "bg-yellow-100", "isDirection": false}, {"img": radham, "title": "", "sub": "", "col": "bg-maroon-100", "isDirection": false}]

    return(
<<<<<<< HEAD
        <div className='w-full h-screen'>
            <Nav/>
            <div className='p-8 w-full h-full'>
                <div className='w-full h-1/4 flex items-center justify-evenly'>
                    {
                        cards.map((card, index) => {
                            return <Cards key={index} image={card.img} title={card.title} sub={card.sub} col={card.col} isDirection={card.isDirection}/>
                        })
                    }
                </div>
                <div className='w-full flex p-4 gap-8'>
                    <div className='w-3/5 gap-x-4 h-full flex items-center justify-evenly'>
                        <img className='md: w-3/5' src={oldkpt} alt="oldkpt"/>
                        <img className='md: w-2/5' src={newkpt} alt="newkpt"/>
                    </div>
                    <div className='w-2/5 h-full p-4'>
                        <p className='md: heads text-2xl'>Kalpathy Renaissance</p>
                        <p className='md: mt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt.</p>
                    </div>
                </div>
                <div className='w-full bg-white drop-shadow-xl flex p-4'>
                    <div className='relative w-3/5 flex p-8 flex-col'>
                        <h1 className='md: heads text-2xl'>History Of Kalpathy</h1>
                        <p className='mt-4 text-lg'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt. Pellentesque elit eget gravida cum sociis natoque. Tortor posuere ac ut consequat. Quam lacus suspendisse faucibus interdum posuere. Sit amet volutpat consequat mauris. Sed velit dignissim sodales ut eu sem integer vitae justo. Vitae semper quis lectus
                        </p>
                        <Link to="/about"><button className='absolute bottom-4 left-8 py-4 px-8 bg-yellow-500 text-white text-lg rounded-full flex gap-4'>Read more <img src={btn} alt="btn"/></button></Link>
                    </div>
                    <div className='w-2/5 flex items-center justify-center'>
                        <img className='w-4/5' src={oldbuild} alt="old"/>
                    </div>
                </div>
=======
        <div>
            <div>
                <Nav/>
                {/*<Sticky/>*/}
                    <p className='heads text-lg m-4 rounded-xl p-4 md:text-xl'>Kalpathy Renaissance</p>
                <Footer/>
>>>>>>> 73afa330ca89594b433f31b5dcd28260715a1a2b
            </div>
        </div>
    )
}
export default Home;