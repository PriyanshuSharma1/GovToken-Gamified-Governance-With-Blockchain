import {
  HomeIcon,
  GiftIcon,
  CurrencyDollarIcon,
  BellAlertIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Rewards",
    href: "/rewards",
    icon: <GiftIcon />,
  },
  {
    name: "Points",
    href: "/points",
    icon: <CurrencyDollarIcon />,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: <BellAlertIcon />,
  },
  {
    name: "Find Friends",
    href: "/findfriends",
    icon: <MagnifyingGlassCircleIcon />,
  },
];

export default function Navbar() {
  return (
    <nav>
      <div className="shadow-lg">
        <ul className="flex p-3">
          {navItems.map((item) => {
            return (
              <a href={item.href}>
                <div className="flex flex-col items-center  hover:bg-gray-200 px-2 py-2 rounded-lg">
                  <div className="w-7 h-7 text-orange-500">{item.icon}</div>
                  <li className="text-orange-500 p-4">{item.name}</li>
                </div>
              </a>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
