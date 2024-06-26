import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navbar max-w-full lg:max-w-7xl mx-auto">
        <div className="navbar-start">
          
          <a className="btn btn-ghost text-xl">E-commerce Site</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
             <Link href='/products'>Products</Link>
              <div className="border-b w-1 ml-4 rounded-none"/>
            </li>
            <li>
              <Link href='/cart'>Cart</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary w-24 hidden uppercase lg:flex mr-3">Login</a>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
