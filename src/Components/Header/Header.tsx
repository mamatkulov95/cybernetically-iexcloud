import companyLogo from "../../assets/photos/company-logo.png";
import data from "../../assets/data.json";
import NavMenu from "../../assets/interfaces";

export default function Header(): JSX.Element {
  const { navMenus }: { navMenus: NavMenu[] } = data;

  return (
    <div className="flex justify-between bg-[#14162e] p-3 w-screen text-white">
      <img
        className="md:block cursor-pointer sm:hidden"
        src={companyLogo}
        alt="company-logo"
        width={250}
      />
      <ul className="flex items-center gap-3 px-4 cursor-pointer">
        {navMenus.map(({ label }: NavMenu, index: number) => (
          <li className="hover:text-lime-600 transition-all" key={index}>
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}