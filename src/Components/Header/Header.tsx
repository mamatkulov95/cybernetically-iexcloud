import { useState } from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../assets/photos/company-logo.png";
import data from "../../assets/data.json";
import { NavMenu } from "../../assets/interfaces";
import { RingLoader } from "react-spinners";

export default function Header(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);

  const { navMenus }: { navMenus: NavMenu[] } = data;

  const handleNavClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  const handleLogoClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="flex justify-between bg-[#14162e] p-3 text-white sticky z-10 top-0">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <RingLoader color="#d337d2" loading={isLoading} size={80} />
        </div>
      )}
      <Link to="/">
        <img
          className="md:block cursor-pointer sm:hidden"
          src={companyLogo}
          alt="company-logo"
          width={250}
          onClick={handleLogoClick}
        />
      </Link>
      <ul
        className={`flex items-center gap-3 px-4 ${
          isLoading ? "opacity-25 pointer-events-none" : ""
        }`}
      >
        {navMenus.map(({ label, path }: NavMenu, index: number) => (
          <li className="hover:text-lime-600 transition-all" key={index}>
            <Link to={path} onClick={handleNavClick}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
