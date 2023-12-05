import SubmitButton from '@/components/common/button/SubmitButton';
import { SERVER_ERROR_MESSAGE } from '@/constants';
import { RESPONSE_CODE } from '@/lib/api/response';
import { Crediential } from '@/utils/authOptions';
import { checkEmailPattern } from '@/utils/regex';
import clsx from 'clsx';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  onNavigate: (route: string) => void;
}

export default function LoginBox({ onNavigate }: Props) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({ defaultValues: { username: '' } });

  const onSubmit: SubmitHandler<{ username: string }> = (data: { username: string }) => {
    const username = data.username;

    setLoading(true);
    signIn(Crediential.LOGIN, {
      redirect: false,
      username
    }).then((res) => {
      setLoading(false);

      if (res && res.status === RESPONSE_CODE.OK) {
        console.log(res);
        onNavigate('/');
      } else {
        setError('username', { message: res?.error ?? SERVER_ERROR_MESSAGE });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-16">
      <div>
        <input
          placeholder="아이디"
          {...register('username', {
            required: '아이디를 입력해주세요',
            pattern: {
              value: checkEmailPattern,
              message: '유효한 이메일 형식을 입력해주세요'
            }
          })}
          className={clsx(
            'w-full rounded-lg border bg-white px-4 py-3 text-sm text-black placeholder:text-neutral-500 focus:none outline-none',
            {
              'border-red-500': !!errors.username
            }
          )}
        />
        {errors.username && <p className="mt-2 text-sm text-red-400">{errors.username.message}</p>}
      </div>
      <SubmitButton text="로그인" type="submit" loading={loading} disabled={loading} />
    </form>
  );
}
