'use client';

import LoginBox from '@/components/pages/login/LoginBox';
import LoginTypeButtonList from '@/components/pages/login/LoginTypeButtonList';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const typeSearchParam = searchParams.get('type');
  const hasTypeParam = !!typeSearchParam;

  const handleNavigate = (route: string) => {
    router.push(route);
  };

  return (
    <div>
      <div className="flex flex-col gap-6">
        <h1 className="text-lg font-semibold text-center">로그인</h1>
        <hr className="border-b-gray-300" />
        <div className="text-xl md:text-2xl font-semibold">
          쉽게 가입하고 간편하게 로그인하세요.
        </div>
      </div>
      <div className="text-sm text-gray-500 mt-2">
        SNS 계정을 이용해서 로그인 또는 회원가입 해주세요.
      </div>
      {hasTypeParam ? (
        <LoginBox onNavigate={handleNavigate} />
      ) : (
        <LoginTypeButtonList onNavigate={handleNavigate} />
      )}
      <div className="flex items-center justify-end mt-4">
        <button
          className="text-gray-500 text-sm underline"
          onClick={() => handleNavigate('/signup')}
        >
          회원가입
        </button>
      </div>
    </div>
  );
}
