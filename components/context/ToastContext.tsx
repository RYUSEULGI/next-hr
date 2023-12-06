import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
type ToastType = 'success' | 'error';

interface ToastContextProps {
  show: (message: string) => void;
}

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<ToastType>('success');

  const show = (message: string, type?: ToastType) => {
    setToastMessage(message);
    setToastType(type || 'success');
  };

  const onCloseToast = () => {
    setToastMessage(null);
  };

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      {toastMessage && <Toast type={toastType} message={toastMessage} onClose={onCloseToast} />}
    </ToastContext.Provider>
  );
}

function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed right-4 top-4 transform translate-x-full p-4 w-full max-w-xs opacity-0 bg-white rounded-md animate-slide-in shadow">
      <div className="flex items-center gap-2">
        <div
          className={clsx(
            'flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-lg',
            {
              'border-red-500': type === 'error',
              'bg-red-100': type === 'error'
            }
          )}
        >
          <div className="w-5 h-5">
            {type === 'success' ? <CheckCircleIcon /> : <InformationCircleIcon />}
          </div>
        </div>
        <p className="ms-3 text-sm font-normal text-gray-500">{message}</p>
      </div>
    </div>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('toast error');
  }

  return context;
}
