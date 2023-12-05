import { LoginType } from '@/lib/api/user/user.types';
import { signIn } from 'next-auth/react';
import { usePathname } from 'next/navigation';

interface Props {
  onNavigate: (route: string) => void;
}

export default function LoginTypeButtonList({ onNavigate }: Props) {
  const pathname = usePathname();

  const handleClickGoogle = () => {
    signIn('google');
  };

  const handleClickEmail = () => {
    onNavigate(`${pathname}?type=${LoginType.이메일}`);
  };

  return (
    <div className="flex flex-col gap-5 mt-16">
      <button
        type="button"
        onClick={handleClickEmail}
        className="relative border border-gray-700 rounded-md py-3 text-sm hover:bg-black/5 text-center font-semibold"
      >
        이메일로 시작하기
      </button>
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
