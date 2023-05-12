import Link from "next/link";
import { FaHome, FaSearch } from "react-icons/fa";

export const Sidebar = () => {
  const size = 25;
  const color = "#f1f1f1";

  return (
    <aside className={`fixed max-w-[65px] w-auto text-center h-screen pt-10 text-white bg-black`}>
      <nav className={`bg-blue`}>
        <div
          className={`p-[20px] text-center hover:bg-[#2c2c2c] text-[lightblue] hover:cursor-pointer`}
        >
          <Link href="/">
            <FaHome size={size} color={color} />
          </Link>
        </div>
        {/*<div className="item">
          <Link href="/movies">
            <FaVideo size={size} color={color} />
          </Link>
        </div>
        <div className="item">
          <Link href="/">
            <FaCameraRetro size={size} color={color} />
          </Link>
        </div>
        */}
        <div
          className={`p-[20px] text-center hover:bg-[#2c2c2c] text-[lightblue] hover:cursor-pointer`}
        >
          <Link href="/search">
            <FaSearch size={size} color={color} />
          </Link>
        </div>
      </nav>
    </aside>
  );
};
