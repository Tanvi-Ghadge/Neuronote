
// /components/HamburgerMenu.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // 🧠 Collapse when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className=" top-25 fixed left-5 z-50" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 rounded-lg bg-white/70 shadow-md hover:shadow-lg transition"
      >
        <Menu className="text-purple-700" size={24} />
      </button>

      {open && (
        <div className="mt-3 backdrop-blur-md bg-white/90 border border-purple-100 rounded-xl shadow-2xl p-5 w-64 space-y-4 animate-fadeIn">
          <h3 className="text-purple-800 font-semibold text-lg mb-1">
            📂 Explore NeuroNote
          </h3>

          <div className="space-y-2 text-sm">
             <Link
              to="/"
              className="flex items-center gap-2 hover:bg-purple-50 p-2 rounded-md transition text-purple-700"
            >
              📓 Start Journaling
            </Link>
            <Link
              to="/entries"
              className="flex items-center gap-2 hover:bg-purple-50 p-2 rounded-md transition text-purple-700"
            >
              📓 My Journal Journey
            </Link> 
            <Link
              to="/prompt"
              className="flex items-center gap-2 hover:bg-purple-50 p-2 rounded-md transition text-purple-700"
            >
              ✨ Gentle Writing Prompt
            </Link>
            <Link
              to="/chart"
              className="flex items-center gap-2 hover:bg-purple-50 p-2 rounded-md transition text-purple-700"
            >
              📊 Mood Insights
            </Link>
            
            <Link
              to="/summary"
              className="flex items-center gap-2 hover:bg-purple-50 p-2 rounded-md transition text-purple-700"
            >
              🧠 Weekly Reflection
            </Link>
            <Link
              to="/therapy"
              className="flex items-center gap-2 hover:bg-purple-50 p-2 rounded-md transition text-purple-700"
            >
              🧘 Mindful Exercises
            </Link>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
