import background from "../assets/background.jpeg"
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="h-screen w-screen bg-gradient-to-tl from-lime-200 via-sky-500 to-violet-500"> 
    <section >
        <div className='flex justify-center items-center pt-40'>
           <img className='p-4 rounded-4xl md:h-120 md:p-0' src={background} alt="" />
           <h1 className="absolute text-center left-16 top-80 transform -translate-y-1/2 text-white text-xl font-serif md:absolute md:left-100 md:top-70">
              Welcome Back Chief
           </h1>
           <p className="absolute text-center left-16 top-83 text-white text-l font-poppins  md:absolute md:left-100 md:top-75">Login to Continue</p>
           <p className="absolute text-center left-16 top-115 text-white text-l  md:absolute md:left-100 md:top-2/3">Don't have an account ? <span><Link className='font-poppins underline' to="/register">Register Here</Link></span></p>
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='absolute text-center text-black top-1/4 right-1/6 text-2xl mr-20 md:mr-80 md:top-50'>Login</h1>
          <p className="absolute top-58 left-90 text-xs text-center text-black  mr-20 max-w-md break-words md:ml-90 md:top-60">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis eum odio omnis qui harum magni.
          </p>
          <input className='border border-solid bg-white absolute top-72 w-80 left-90 p-1 md:ml-100 md:top-80' placeholder='Enter Username' type="text" />
          <input className='border border-solid bg-white absolute top-85 w-80 left-90 p-1 md:ml-100 md:top-95' placeholder='Enter Password' type="password" />

          <button className='transition duration-700 ease-in-out border border-solid absolute top-100 left-125 p-1 rounded-3xl w-20 bg-sky-700 cursor-pointer  hover:bg-blue-800 text-l text-white md:ml-100 md:top-110'>Sign In</button>
          
          <div class="inline-flex items-center justify-center absolute top-105 left-103 md:ml-100 md:top-115">
            <hr class="w-64 h-px my-8 bg-white border-0 dark:bg-gray-700"/>
            <span class="absolute px-3 font-medium text-gray-900 -translate-x-5 -translate-y-1 bg-white left-1/2 dark:text-black  ">or</span>
          </div>

          <button className='border border-solid absolute top-118 left-116 p-1 rounded-3xl w-40 cursor-pointer md:ml-100 md:top-130 hover:bg-blue-800 text-l text-black bg-white hover:text-white'>Sign in with Other</button>
          
        </div>
    </section>
  </div>
  )
}  