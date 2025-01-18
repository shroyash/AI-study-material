import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  const menuList = [
    { id: 1, name: 'Dashboard', path: '/dashboard' },
    { id: 2, name: 'Update', path: '/update' },
    { id: 3, name: 'Profile', path: '/profile' },
  ];

  return (
    <div className="sideNavBar text-black md:h-screen shadow rounded-md hidden md:w-64 md:block">
      <div className="logo p-4">
        <Image src="/img/logo.png" alt="Logo" width={100} height={50} />
      </div>

      <div className="menuList mt-4">
        <ul className="space-y-2">
          {menuList &&
            menuList.map((menu) => (
              <li key={menu.id} className="text-lg hover:text-blue-500">
                <Link href={menu.path}>{menu.name}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;