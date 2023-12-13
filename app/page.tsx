'use client';

import ContentListWithLabel from '@/components/layouts/content/list-with-label';
import HomeMainBanner from '@/components/pages/home/home-main-banner';
import { APIGetContentAll } from '@/lib/api/content/content';
import { Suspense } from 'react';

export default async function Home() {
  const contents = await APIGetContentAll();

  return (
    <div>
      <Suspense>
        <section className="px-20 py-6">
          <HomeMainBanner />
        </section>
      </Suspense>

      <Suspense>
        <section className="px-20 py-6 flex flex-col gap-y-14">
          {contents.map((content, index: number) => (
            <ContentListWithLabel
              key={`home-content-list-${index}`}
              carousel
              type={content.type}
              label={content.title}
              contents={content.items}
            />
          ))}
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
