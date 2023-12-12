import { APIGetContent } from '@/lib/api/content/content';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const content = await APIGetContent(Number(params.id));

  if (!content) {
    return notFound();
  }

  return {
    title: content?.name,
    description: content.name
  };
}

export default function ContentDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="pt-4 min-h-screen w-full">{children}</div>
    </Suspense>
  );
}
