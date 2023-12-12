import HomeLiveBox from '@/components/pages/home/HomeLiveBox';
import HomeMainBanner from '@/components/pages/home/HomeMainBanner';
import HomeRecommendList from '@/components/pages/home/HomeRecommendList';
import { useSession } from 'next-auth/react';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <div>
      <section className="pl-10 pr-10 pt-6 pb-6">
        <Suspense>
          <HomeMainBanner />
        </Suspense>
      </section>
      <section className="pl-10 pr-10 pt-6 pb-6">
        <h3 className="font-semibold text-2xl mb-6">오늘의 TOP 20</h3>
        <HomeRecommendList />
      </section>
      {/* {data?.user && (
        <section className="p-6">
          <h3 className="font-semibold text-2xl mb-6">{data.user.name}님이 시청하는 콘텐츠</h3>
          <HomeLiveBox />
        </section>
      )} */}
    </div>
  );
}
