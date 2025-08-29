import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div
      className="h-full w-[230px] bg-[#2b2b2b] text-[#c5c7c6] overflow-hidden transition-all duration-100 ease-in-out flex flex-col justify-between py-3 rounded-tr-2xl rounded-br-2xl fixed z-10"
      style={{ width: extended ? "220px" : "60px" }}
      onMouseEnter={() => {
        setExtended(true);
        setShow(true);w
      }}
      onMouseLeave={() => {
        setExtended(false);
        setShow(true);
      }}
    >
      <div className="flex flex-col">
        <div className="flex flex-nowrap justify-center items-center gap-2 h-[40px] cursor-pointer">
          <FontAwesomeIcon icon={faVideo} className="text-[#60dbcb] text-xl" />
          {extended ? (
            <h1 className="text-[18px]">
              <span className="font-bold text-[#60dbcb]">RSM</span> watch
            </h1>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 font-medium">
          <Link to={"/"}>
            <div className="flex items-center border-l-0 gap-2 py-3 px-5 cursor-pointer transition-all duration-75 ease-in hover:border-l-3 hover:border-[#60dbcb]">
            <FontAwesomeIcon icon={faHome} />
            <h1 className={`
                text-xs
                transition-all duration-100 delay-75
                ${
                  extended
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }
            `} style={{ whiteSpace: "nowrap" }}>
              Home
            </h1>
          </div>
          </Link>
          <Link to={"watchlist"}>
            <div className="flex items-center border-l-0 gap-2 py-3 px-5 cursor-pointer transition-all duration-75 ease-in hover:border-l-3 hover:border-[#60dbcb]">
            <FontAwesomeIcon icon={faListCheck} />
            <h1 className={`
                text-xs
                transition-all duration-100 delay-75
                ${
                  extended
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }
            `} style={{ whiteSpace: "nowrap" }}>Watch List</h1>
          </div>
          </Link>
          <Link to={"favorite"}>
            <div className="flex items-center border-l-0 gap-2 py-3 px-5 cursor-pointer transition-all duration-75 ease-in hover:border-l-3 hover:border-[#60dbcb]">
            <FontAwesomeIcon icon={faHeart} />
                <Link to={"favorite"}>
                <h1 className={`
                text-xs
                transition-all duration-100 delay-75
                ${
                  extended
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }
            `} style={{ whiteSpace: "nowrap" }}>Favorites</h1></Link>
          </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 py-3 px-5 transition-all duration-75 ease-in hover:border-l-3 hover:border-[#60dbcb] cursor-pointer">
            <FontAwesomeIcon icon={faRightFromBracket}/>
            <p className={`
                text-xs
                transition-all duration-100 delay-75
                ${
                  extended
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }
            `} tyle={{ whiteSpace: "nowrap" }}>
                Logout
            </p>
        </div>
        <div className="flex items-center gap-2 py-3 px-5 transition-all duration-75 ease-in hover:border-l-3 hover:border-[#60dbcb] cursor-pointer">
            <FontAwesomeIcon icon={faGear}/>
            <p className={`
                text-xs
                transition-all duration-100 delay-75
                ${
                  extended
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }
            `} tyle={{ whiteSpace: "nowrap" }}>
                Settings
            </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
