import HomeMainBanner from '@/components/pages/home/home-main-banner';
import HomeMainContentList from '@/components/pages/home/home-main-content-list';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      <Suspense>
        <section className="px-20 py-6">
          <HomeMainBanner />
        </section>
      </Suspense>

      <Suspense fallback={<>loading...</>}>
        <section className="px-20 py-6">
          <HomeMainContentList />
        </section>
      </Suspense>

      {/* {data?.user && (
        <section className="p-6">
          <h3 className="font-semibold text-2xl mb-6">{data.user.name}님이 시청하는 콘텐츠</h3>
          <HomeLiveBox />
        </section>
      )} */}
    </div>
  );
}
