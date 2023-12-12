'use client';

import SubmitButton from '@/components/common/button/SubmitButton';
import { SERVER_ERROR_MESSAGE } from '@/constants';
import { RESPONSE_CODE } from '@/lib/api/response';
import { Credentials } from '@/utils/authOptions';
import { checkEmailPattern } from '@/utils/regex';
import clsx from 'clsx';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function LoginBox() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({ defaultValues: { email: '' } });

  const onSubmit: SubmitHandler<{ email: string }> = (data: { email: string }) => {
    const email = data.email;

    setLoading(true);
    signIn(Credentials.LOGIN, {
      redirect: false,
      email
    }).then((res) => {
      setLoading(false);

      if (res && res.status === RESPONSE_CODE.OK) {
        router.push('/');
      } else {
        setError('email', { message: res?.error ?? SERVER_ERROR_MESSAGE });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-16">
      <div>
        <input
          placeholder="아이디"
          {...register('email', {
            required: '아이디를 입력해주세요',
            pattern: {
              value: checkEmailPattern,
              message: '유효한 이메일 형식을 입력해주세요'
            }
          })}
          className={clsx(
            'w-full rounded-lg border bg-white px-4 py-3 text-sm text-black placeholder:text-neutral-500 focus:none outline-none',
            {
              'border-red-500': !!errors.email
            }
          )}
        />
        {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>}
      </div>
      <SubmitButton text="로그인" type="submit" loading={loading} disabled={loading} />
    </form>
  );
}
