import React, { useState } from 'react';
// import { User, Mail, Lock } from 'lucide-react'; // Importing icons
// import User from '../../assets/person.png';
import user_icon from '../../assets/person.png';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';

export const Login = () => {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");       // Added state for name input
  const [email, setEmail] = useState("");     // Added state for email input
  const [password, setPassword] = useState(""); // Added state for password input

  return (
    <div>
        
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      <div className='container'>
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
          
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
          <div data-aos="zoom-in">
            <div className="max-w-[700px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover" >

      <div className="w-full max-w-md bg-orangered rounded-lg shadow-lg p-6">
      <div data-aos="zoom-in">
        <div className="flex flex-col items-center  gap-2 mb-8">
          <div className="text-3xl sm:text-4xl font-bold text-orange-500">{action}</div>
          <div className="w-16 h-1.5 bg-orange-500 rounded-full"></div>

        </div>
        <div className="space-y-6">
          {action === "Login" ? null : (
            <div className="flex items-center bg-gray-100 rounded-md p-2">
              {/* <User className="w-6 h-6 mr-2 text-gray-500" /> */}
              <img src={user_icon} alt="User Icon" className="h-5 w-5 mr-2" />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder:text-gray-500"
              />
            </div>
          )}
          <div className="flex items-center bg-gray-100 rounded-md p-2">
            {/* <Mail className="w-6 h-6 mr-2 text-gray-500" /> */}
            <img src={email_icon} alt="Email Icon" className="h-5 w-5 mr-2" />
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder:text-gray-500"
            />
          </div>
          <div className="flex items-center bg-gray-100 rounded-md p-2">
            {/* <Lock className="w-6 h-6 mr-2 text-gray-500" /> */}
            <img src={password_icon} alt="Password Icon" className="h-5 w-5 mr-2" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder:text-gray-500"
              />
          </div>
          {action === "Sign Up" ? null : (
            <div className="text-right mt-3 text-gray-600 text-sm">
              Lost Password?
              <span className="text-orange-500 cursor-pointer"> Click Here!</span>
            </div>
          )}
          <div className="flex justify-center gap-6 mt-8 ">
            <button
              onClick={() => setAction("Sign Up")}
              className={`w-48 py-3 rounded-full  text-lg font-semibold cursor-pointer
                         ${action === "Login" ? "bg-gray-200 text-gray-600 "  : "bg-orange-500 text-white"}`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setAction("Login")}
              className={`w-48 py-3 rounded-full text-lg font-semibold cursor-pointer
                         ${action === "Sign Up" ? "bg-gray-200 text-gray-600" : "bg-orange-500 text-white"}`}
            >
              Login
            </button>
          </div>
        </div>
        </div>
      </div>
      </div>
      </div>
                 
        </div>


      </div>

        </div>
      
      </div>

    </div>

    
  );
};

export default Login;
