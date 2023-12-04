'use client';

import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();

  const handleClickGoogle = () => {};

  const handleClickEmail = () => {};

  const handleClickRegister = () => {
    router.push('/signup');
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
      <div className="flex items-center justify-end mt-4">
        <button className="text-gray-500 text-sm underline" onClick={handleClickRegister}>
          회원가입
        </button>
      </div>
    </div>
  );
}
