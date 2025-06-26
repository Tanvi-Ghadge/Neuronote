import { Link } from "react-router-dom";
import { useAuthStore } from "../store/userauthstore";
import { LogOut, MessageSquare } from "lucide-react";
import Logo from "../assets/Logo.png";
const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    // <header
    //   className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    // backdrop-opacity-0 bg-base-100/80"
    // >
    //   <div className="container mx-auto px-4 h-16">
    //     <div className="flex items-center justify-between h-full">
         
    //       <div className="flex items-center gap-8">
    //         <Link
    //           to="/"
    //           className="flex items-center gap-2.5 hover:opacity-80 transition-all"
    //         >
    //           <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shadow">
    //             <img
    //               src={Logo}
    //               alt="NeuroNote Logo"
    //               className="w-8 h-8 object-contain"
    //             />
    //           </div>
    //           <span className="text-xl font-semibold text-purple-800">
    //             NeuroNote
    //           </span>
    //         </Link>
    //       </div>
    //       <div className="flex items-center gap-2">
    //         {authUser && (
    //           <>
    //             <button className="flex gap-2 items-center" onClick={logout}>
    //               <LogOut className="size-5" />
    //               <span className="hidden sm:inline">Logout</span>
    //             </button>
    //           </>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <nav className=" mx-auto px-6 w-screen py-6 fixed top-0 z-40 bg-white">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shadow">
                  <img
                      src={Logo}
                      alt="NeuroNote Logo"
                      className="w-8 h-8 object-contain"
                    />
                </div>
                <span className="text-2xl font-bold text-slate-700">NeuroNote</span>
              </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            
            {!authUser && (<Link to={"/login"}>
                <button className="bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 px-6 py-2 rounded-full font-medium transition-all shadow-sm">
                  Login
                </button>
            </Link>)}
            
       {authUser && (
              <>
                <button className=" bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 px-6 py-2 rounded-full font-medium transition-all shadow-sm" onClick={logout}>
                  Logout
                </button>
              </>
            )}
          {/* </div> */}
          </div>
        </div>
      </nav>
  );
};
export default Navbar;
