import Modal from '@/components/common/Modal';
import { IUser } from '@/lib/api/user/user.types';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState } from 'react';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import { FieldError, UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface Props {
  address: string;
  setValue: UseFormSetValue<IUser>;
  register: UseFormRegister<IUser>;
  error?: FieldError;
}

export default function AddressInput({ address, setValue, register, error }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDaumPostModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseDaumPostModal = () => {
    setIsOpen(false);
  };

  const handleComplete = (data: Address) => {
    const { roadAddress, jibunAddress } = data;

    setValue('address', roadAddress || jibunAddress);
    handleCloseDaumPostModal();
  };

  return (
    <>
      <div onClick={handleOpenDaumPostModal} className="relative">
        <input
          readOnly
          placeholder="주소"
          {...register('address', { required: '주소를 입력해주세요' })}
          className={clsx(
            'w-full rounded-lg border bg-white px-4 py-3 text-sm text-black placeholder:text-neutral-500 focus:none outline-none',
            {
              'border-red-500': !!error && !address
            }
          )}
        />
        <div className="absolute right-2 top-0 mr-3 flex h-full items-center">
          <MagnifyingGlassIcon className="h-4 text-neutral-500" />
        </div>
      </div>
      {!!error && <p className="mt-2 text-sm text-red-400">{error.message}</p>}
      <Modal isOpen={isOpen} onClose={handleCloseDaumPostModal}>
        <DaumPostcodeEmbed style={{ width: 400, height: 500 }} onComplete={handleComplete} />
      </Modal>
    </>
  );
}
