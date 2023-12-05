import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Logo from '../common/Logo';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { redirect } from 'next/navigation';

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  const handleLogout = () => {
    signOut();
  };

  if (session) {
    return redirect('/');
  }

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <Logo />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              Next-hr
            </div>
          </Link>
          {/* {menus.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menus.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null} */}
        </div>
        {/* <div className="hidden justify-center md:flex md:w-1/3">
          <Search />
        </div> */}
        {session ? (
          <button onClick={handleLogout} className="flex justify-end md:w-1/3">
            로그아웃
          </button>
        ) : (
          <Link href="/login" className="flex justify-end md:w-1/3">
            로그인
          </Link>
        )}
      </div>
    </nav>
  );
}
