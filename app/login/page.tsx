'use client';

import LoginBox from '@/components/pages/login/login-box';
import LoginTypeButtonList from '@/components/pages/login/login-type-button-list';
import Link from 'next/link';

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function LoginPage({ searchParams }: Props) {
  const { type } = searchParams as { [key: string]: string | undefined };
  const hasTypeParam = !!type;

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
      {hasTypeParam ? <LoginBox /> : <LoginTypeButtonList />}
      <Link href={'/signup'} className="flex items-center justify-end mt-4">
        <button type="button" className="text-gray-500 text-sm underline">
          회원가입
        </button>
      </Link>
    </div>
  );
}
