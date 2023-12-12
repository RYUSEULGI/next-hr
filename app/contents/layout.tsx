import { Suspense } from 'react';

export const metadata = {
  title: 'Next-ott search',
  description: '검색 결과 페이지'
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-20 pb-6 text-black">
        <div className="min-h-screen w-full">{children}</div>
      </div>
    </Suspense>
  );
}
