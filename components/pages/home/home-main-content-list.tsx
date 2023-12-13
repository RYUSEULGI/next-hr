import ContentListWithLabel from '@/components/layouts/content/list-with-label';
import { APIGetContentAll } from '@/lib/api/content/content';
import React from 'react';

export default async function HomeMainContentList() {
  const contents = await APIGetContentAll();

  return (
    <div className="flex flex-col gap-y-14">
      {contents.map((content, index: number) => (
        <ContentListWithLabel
          key={`home-content-list-${index}`}
          carousel
          type={content.type}
          label={content.title}
          contents={content.items}
        />
      ))}
    </div>
  );
}
