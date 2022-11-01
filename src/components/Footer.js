import NavB from './NavB'

const Footer = () => {

    return(
        <div className='bottom-0 w-full'>
            <NavB/>
            <div className="py-3 text-xs px-7 bg-maroon-500 flex flex-col text-white justify-between md:flex-row text-xl gap-y-3">
                <div className="flex gap-x-8">
                    <a href="/" className="text-white text-xs underline hover:text-gray-200" >Disclaimer</a>
                    <a href="/" className="text-white text-xs underline hover:text-gray-200"> Report or Feedback</a>
                </div>
                <p className="  w-full text-white text-justified text-xs md: w-auto">© 2022  Sree Visalakshi Sametha Shree Viswanatha Swamy Temple. All Rights Reserved</p>
            </div>
        </div>
    )
}
export default Footer;