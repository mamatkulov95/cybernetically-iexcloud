import { RingLoader } from "react-spinners";
import { useState } from "react";
import { Link } from "react-router-dom";

import data from "../../assets/data.json";
import { NavMenu } from "../../assets/interfaces";
import companyLogo from "../../assets/photos/company-logo.png";

function Header(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingFinish = () => {
    setIsLoading(false);
  };

  const handleLoadingStart = () => {
    setIsLoading(true);
    setTimeout(handleLoadingFinish, 600);
  };

  const { navMenus }: { navMenus: NavMenu[] } = data;

  return (
    <div className="flex justify-between bg-[#14162e] p-3 text-white sticky z-10 top-0">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <RingLoader color="#d337d2" loading={isLoading} size={80} />
        </div>
      )}

      <Link to="/" onClick={handleLoadingStart}>
        <img
          className="md:block cursor-pointer sm:hidden"
          src={companyLogo}
          alt="company-logo"
          width={250}
        />
      </Link>

      <ul
        className={`flex items-center gap-3 px-4 ${
          isLoading ? "opacity-25 pointer-events-none" : ""
        }`}
      >
        {navMenus.map(({ label, path }: NavMenu, index: number) => (
          <li className="hover:text-lime-600 transition-all" key={index}>
            <Link to={path} onClick={handleLoadingStart}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
