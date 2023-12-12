import { ReactNode } from 'react';

export default function TextLabel({ children }: { children: ReactNode }) {
  return (
    <label className="border rounded-xl pt-1 pb-1 pl-3 pr-3 text-sm text-gray-500">
      {children}
    </label>
  );
}
