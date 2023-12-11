import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Logo from '../common/Logo';
import SearchInput from '../common/input/SearchInput';
import MenuList from './MenuList';

export default function Navbar() {
  const { data } = useSession();

  console.log(data?.user);
  const handleLogout = () => {
    signOut();
  };

  return (
    <nav className="relative w-full flex items-center justify-between pt-4 pb-4 pl-20 pr-20">
      <div className="flex">
        <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
          <Logo />
          <div className="ml-2 flex-none text-sm font-medium uppercase">Next-ott</div>
        </Link>
        <MenuList />
      </div>
      <div className="flex items-center gap-4">
        <SearchInput />
        {data?.user ? (
          <button
            onClick={handleLogout}
            className="py-2 px-3 rounded-lg border bg-white text-blue-500 font-medium text-xs"
          >
            로그아웃
          </button>
        ) : (
          <Link
            href="/login"
            className="py-2 px-3 rounded-lg border bg-white text-blue-500 font-medium text-xs"
          >
            로그인
          </Link>
        )}
      </div>
    </nav>
  );
}
