import { useState } from "react"
import logo from "../../assets/vite.svg"
const Navbar = () => {
    const[openMenu,setOpenMenu]=useState(false)
  return (
    <>
    <nav className="absolute top-0 left-0 z-10 w-full min-h-screen">
        <div className="flex justify-between p-4 font-semibold text-2xl p-5 bg-transparent text-black">
            <img src={logo} alt="logo" className="h-12 w-12" />
       
       
        <button className="lg:hidden text-3xl font-bold" onClick={()=>setOpenMenu(!openMenu)}>
            {openMenu?"X" : "☰"}
        </button>
         <ul className="hidden lg:flex gap-5 text-2xl font-semibold">
            <li><a href="#"></a>Home</li>
            <li><a href="#"></a>About</li>
            <li><a href="#"></a>Services</li>
            <li><a href="#"></a>Product</li>
            <li><a href="#">Contact</a></li>
        </ul>
                    <button className="hidden lg:block bg-blue-700 text-white  mx-5 p-2 text-center rounded-xl">Get Started</button>
         </div>
        {openMenu && (
             <ul className="flex flex-col gap-5 p-4 font-semibold text-2xl">
            <li><a href="#"></a>Home</li>
            <li><a href="#"></a>About</li>
            <li><a href="#"></a>Services</li>
            <li><a href="#"></a>Product</li>
            <li><a href="#">Contact</a></li>
            <button onClick={()=>setOpenMenu} className=" bg-blue-700 text-white w-full mx-3 p-2 text-center rounded-xl">Get Started</button>
        </ul>
        )}
    </nav>
    </>
  )
}

export default Navbar