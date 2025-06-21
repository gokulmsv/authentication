import bgregister from "../assets/bgregister.png"
import { Link } from "react-router-dom";

export default function Register() {
    return (
     <div>
  <div className="min-h-screen flex items-center justify-center h-screen w-screen bg-gradient-to-tl from-lime-200 via-sky-500 to-violet-500">
    <div className="flex w-[800px] h-[500px] rounded-2xl overflow-hidden shadow-lg m-5">
      
     
      <div className="w-1/2 bg-white">
        <h1 className="text-center p-10 text-2xl">Sign Up</h1>
        <input className="border solid ml-15 p-1 w-65" placeholder="First Name" type="text" /> 
        <input className="border solid ml-15 mt-3 p-1 w-65" placeholder="Last Name" type="text" />
        <input className="border solid ml-15 mt-3 p-1 w-65" placeholder="Enter Gmail"  type="email" name="" id="" />
        <input className="border solid ml-15 mt-3 p-1 w-65" placeholder="Password"  type="password" name="" id="" />
        <input className="border solid ml-15 mt-3 p-1 w-65" placeholder="Re-Enter Password"  type="password" name="" id="" />

        <button className="border solid p-2 m-5 ml-40 bg-blue-500 cursor-pointer text-white hover:bg-blue-600 hover:text-white rounded-xl">Sign Up</button>
      </div>

      
      <div className="w-1/2 bg-blue-600">
        <h1 className="text-center mt-30 pt-10 text-2xl text-white font-[poppins]">Hello Welcome</h1>
        <p className="text-center text-white">Please Sign Up to Continue</p>

        <p className="text-center mt-35 text-white">If you have an account <span><Link className='font-poppins underline' to="/login">Login</Link></span> to Continue</p>
      </div>
    </div>
  </div>
</div>

);
}
