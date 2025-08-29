import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import userProfilePlaceholder from "../assets/user-profile-placeholder.png";

const NavBar = ({onSearch}) => {

  const [notificationSymbol, setNotificationSymbol] = useState(true);
  const options = ["All", "WatchList", "Favorite"];
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  }

  return (
    <div className="h-[60px] w-full flex items-center text-white px-8 mb-6">
      <div className="relative z-10 text-sm text-left">

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-[#2b2b2b] rounded shadow-lg">
          <ul>
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 hover:bg-[#212121] cursor-pointer text-xs"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
      <div className="flex items-center justify-center gap-2 m-auto">
        <form onSubmit={handleSubmit}>
          <div className="h-[40px] flex relative sm:w-40 md:w-[550px] lg:w-[600px]
          transition-all duration-300">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Search" 
            className="text-white px-5 h-full w-full rounded-2xl text-[14px] outline-none bg-[#2b2b2b]"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={handleSubmit}
            className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-5"
          />
        </div>
        </form>
        <div className="py-2 px-3.5 bg-[#2b2b2b] rounded-full relative">
            <FontAwesomeIcon icon={faBell} />
            {notificationSymbol ? <div className="p-1 bg-[#2b2b2b] rounded-full absolute top-1.5 right-2.5">
              <div className="w-1 h-1 bg-red-600 rounded-full"></div>
            </div>:null}
        </div> 
      </div>
      <div className="flex justify-center items-center gap-2 py-1.5 pl-1.5 pr-3   bg-[#2b2b2b] rounded-full">
        <div className="h-[30px] w-[30px] rounded-full border-1 border-white">
          <img
            src={userProfilePlaceholder}
            alt=""
            className="w-full h-full rounded-full"
          />
        </div>
        <p className="text-[10px]">Profile</p>
      </div>
    </div>
  );
};

export default NavBar;
