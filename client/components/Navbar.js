const navItems = [
  {
    name: "Home",
    href: "/",
    icon: "HomeIcon",
  },
  {
    name: "Rewards",
    href: "/rewards",
    icon: "GiftIcon",
  },
  {
    name: "Points",
    href: "/points",
    icon: "",
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: "",
  },
  {
    name: "Find Friends",
    href: "/findfriends",
    icon: "",
  },
];

export default function Navbar() {
  return (
    <nav>
      <div className="shadow-lg">
        <ul className="flex p-4">
          {navItems.map((item) => {
            return (
              <a href={item.href}>
                <div>
                  <li className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                    {item.name}
                  </li>
                </div>
              </a>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
