import { LoginType } from '@/lib/api/user/user.types';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LoginTypeButtonList() {
  const pathname = usePathname();

  const handleClickGoogle = () => {
    signIn('google', { callbackUrl: '/' });
  };

  return (
    <div className="flex flex-col gap-5 mt-16">
      <Link href={`${pathname}?type=${LoginType.이메일}`}>
        <button
          type="button"
          className="w-full relative border border-gray-700 rounded-md py-3 text-sm hover:bg-black/5 text-center font-semibold"
        >
          이메일로 시작하기
        </button>
      </Link>

      <button
        type="button"
        onClick={handleClickGoogle}
        className="relative border border-gray-700 rounded-md py-3 text-sm hover:bg-black/5 text-center font-semibold"
      >
        구글로 시작하기
      </button>
    </div>
  );
}
