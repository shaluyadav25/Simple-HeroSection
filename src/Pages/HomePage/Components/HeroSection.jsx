import bg from "../../../assets/bg-1.jpeg"
const HeroSection = () => {
  return (
    <>
    <div className="relative flex w-full min-h-screen items-center  overflow-hidden">
        <img src={bg} alt="bg-Img" className="absolute inset-0 h-full w-full bg-cover bg-no-repeat min-h-screen " />
        <div className="relative z-10 mx-20 mt-30 w-100 lg:w-160">
            <h1 className="lg:text-7xl text-3xl font-bold">Build Amazing <span className="text-blue-700">Product faster</span> </h1>
             <p className="my-5 max-w-lg text-base leading-7 text-gray-700">
        We help businesses build modern digital products
        with powerful tools and innovative solutions.
      </p>
      <div className="flex flex-col lg:flex-row gap-3 ">
        <button className="bg-blue-600 text-center text-white text-base px-5 py-3 rounded-md border-0 w-full sm:w-auto h-12"> Get Started</button>
        <button className="rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-100 w-full sm:w-auto h-12">  Learn More</button>
      </div>
        </div>
    </div>
    </>
  )
}

export default HeroSection