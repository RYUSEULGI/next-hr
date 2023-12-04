'use client';

import AddressInput from '@/components/layouts/input/AddressInput';
import { IUser } from '@/interface/user';
import { checkEmailPattern } from '@/utils/regex';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function SignUpPage() {
  const router = useRouter();
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = async (data: IUser) => {
    await fetch(`/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(async (res) => {
      console.log(res);
      if (res.status === 200) {
      } else {
        const { error } = await res.json();
        console.log(error);
      }
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-6">
        <h1 className="text-lg font-semibold text-center">회원가입</h1>
        <hr className="border-b-gray-300" />
      </div>
      <div className="flex flex-col gap-5 mt-16">
        <form onSubmit={handleSubmit(onSubmit)} className="relative w-full">
          <div className="mb-10">
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
            {errors.username && (
              <p className="mt-2 text-sm text-red-400">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-10">
            <input
              placeholder="이름"
              {...register('name', { required: '이름을 입력해주세요' })}
              className={clsx(
                'w-full rounded-lg border bg-white px-4 py-3 text-sm text-black placeholder:text-neutral-500 focus:none outline-none',
                {
                  'border-red-500': !!errors.name
                }
              )}
            />
            {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>}
          </div>
          <div className="mb-20">
            <AddressInput
              register={register}
              setValue={setValue}
              error={errors.address}
              address={watch('address')}
            />
          </div>
          <div className="flex items-center justify-center gap-x-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="w-full  text-sm font-semibold leading-6 text-black"
            >
              뒤로가기
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
