'use client';

import SubmitButton from '@/components/common/button/SubmitButton';
import AddressInput from '@/components/common/input/AddressInput';
import { useToast } from '@/components/context/ToastContext';

import { APIUserRegister } from '@/lib/api/user/user';
import { IUser } from '@/lib/api/user/user.types';
import { checkEmailPattern } from '@/utils/regex';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function SignUpPage() {
  const router = useRouter();
  const toast = useToast();

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = async (data: IUser) => {
    const isSuccess = await APIUserRegister(data);

    if (!isSuccess) {
      return;
    }

    toast.show(`${data.name}님 환영합니다~`);
    router.replace('/login');
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
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
              text="회원가입"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
