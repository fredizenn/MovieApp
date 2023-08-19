import { Icon } from "@iconify/react";


const Nav = () => {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <Icon
                  icon="game-icons:pirate-captain"
                  className="w-10 h-10 text-gray-300"
                />
              </a>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
        </header>
    )
}

export default Nav
