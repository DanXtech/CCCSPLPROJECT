import React from "react";
import logo from "../assets/ccc-logo.png";
import Helmet from "../components/Helmet"
const Login = () => {
    return (
        // <div className="bg-blue-400 bg-opacity-35 w-full h-[100vh]">
        <Helmet title="Login Page">
            <div className=" bg-ttuPatterny w-full   bg-cover py-20 sm:py-2 ">
                <div className="bg-blue-900 sm:h-[700px]  mix-blend-multipl bg-opacity-60">
                    <div className=" w-full mx-auto  container ">
                        <div className=" w-full flex flex-col lg:flex-row   items-center lg:justify-between gap-10 sm:gap-2 pt-5 lg:pt-10">
                            <div className="m-3">
                                <div className="flex items-center justify-center">
                                    <img
                                        src={logo}
                                        className="w-[200px] lg:w-[300px] pb-4 sm:mt-5"
                                        alt=""
                                    />
                                </div>
                                <h1 className="text-3xl font-bold text-center lg:text-left ">
                                    Welcome{" "}
                                    <span className="text-primary animate-pulse group-hover:scale-105 duration-200 pb-2">
                                        Back!!!
                                    </span>
                                </h1>
                                <p className="text-2xl font-semibold text-center lg:text-left">
                                    For we are the peculiar people Peculiar treasure
                                </p>
                            </div>
                            <div>
                                <form>
                                    <div className="w-[350px] lg:w-[500px] m-3 bg-white p-5 py-10 rounded-2xl customShadow">
                                        <div className="grid mt-2">
                                            <label className="font-bold capitalize text-slate-700">
                                                Your Full Name
                                            </label>

                                            <div className="bg-slate-100 p-2">
                                                <input
                                                    type="text"
                                                    placeholder="Enter text"
                                                    // step 8
                                                    name="name"
                                                    className="w-[100%] lg:w-[450px]outline-none bg-transparent"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="grid mt-2">
                                            <label className="font-bold capitalize text-slate-700">
                                                Your Email
                                            </label>

                                            <div className="bg-slate-100 p-2">
                                                <input
                                                    type="email"
                                                    placeholder="Enter email"
                                                    // step 8
                                                    name="email"
                                                    className="w-[100%] lg:w-[450px]  outline-none bg-transparent"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="grid mt-2">
                                            <label className="font-bold capitalize text-slate-700">
                                                Your PassWord
                                            </label>

                                            <div className="bg-slate-100 p-2">
                                                <input
                                                    type="password"
                                                    placeholder="Enter Password"
                                                    // step 8
                                                    name="password"
                                                    className="w-[100%] lg:w-[450px] outline-none bg-transparent"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="grid">
                                            <button className="w-full bg-blue-700 py-3 mt-4 text-white font-semibold">
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Login;

// import React from "react";

// const Login = () => {
//   return (
//     <div className="bg-custom-image bg-cover bg-center p-2 w-full h-[100vh]">
//       <div className="w-full mx-auto form-container">
//         <div className="bg-red-300 bg-opacity-75 w-full flex items-center justify-between gap-10 p-5 rounded-lg">
//           <div className="text-white">text content</div>
//           <div className="text-white">form box with input</div>
//         </div>
//       </div>
//     </div>
//   );
// };
