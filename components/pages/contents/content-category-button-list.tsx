import LineButton from '@/components/common/button/LineButton';
import { APIGetContentCategory } from '@/lib/api/content/content.category';
import Link from 'next/link';

interface Props {
  categoryId: number;
}

export default async function CategoryButtonList({ categoryId }: Props) {
  const categories = await APIGetContentCategory();

  return (
    <ul className="w-full flex items-center gap-4">
      {categories.map((category) => (
        <li key={`category-list-filter-${category.id}`}>
          <Link href={`/search?category=${category.id}`}>
            <LineButton active={categoryId === category.id} text={category.name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
