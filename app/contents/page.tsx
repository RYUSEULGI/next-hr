import Grid from '@/components/layouts/Grid';
import CategoryButtonList from '@/components/pages/contents/content-category-button-list';
import { APIGetContentList } from '@/lib/api/content/content';
import Link from 'next/link';

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function SearchPage({ searchParams }: Props) {
  const { page: pageParam, category: categoryParam } = searchParams as {
    [key: string]: string | undefined;
  };

  const page = Number(pageParam) || 1;
  const categoryId = Number(categoryParam) || 0;

  const contents = await APIGetContentList({ page, categoryId });

  return (
    <div className="w-full">
      <div className="pt-4 pb-4">
        <CategoryButtonList categoryId={categoryId} />
      </div>

      <section className="pt-10">
        {contents.items.length > 0 ? (
          <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {contents.items.map((item) => (
              <Grid.Item
                key={`content-list-item-${item.id}-${item.name}`}
                className="flex items-center justify-center border rounded-lg animate-fadeIn"
              >
                <Link href={`/contents/${item.id}`}>{item.name}</Link>
              </Grid.Item>
            ))}
          </Grid>
        ) : (
          <p className="flex items-center justify-center text-sm text-gray-500">
            리스트가 없습니다.
          </p>
        )}
      </section>
    </div>
  );
}
