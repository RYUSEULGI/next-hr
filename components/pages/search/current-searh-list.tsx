import { CURRENT_SEARCH_KEY } from '@/constants';
import { XCircleIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { deleteCurrentSearch } from './action';

interface Props {
  items: string[];
  onRefresh: () => void;
}

export default function CurrentSearchList({ items, onRefresh }: Props) {
  const handleDelete = (item: string) => {
    deleteCurrentSearch(CURRENT_SEARCH_KEY, item);
    onRefresh();
  };

  return (
    <ul className="max-h-[300px] overflow-y-scroll pl-5 pr-5">
      {items.map((item, index: number) => (
        <li
          key={`current-search-${index}`}
          className="w-full flex items-center justify-between gap-4 first:pt-0 pt-2 last:pb-0 pb-2"
        >
          <Link href={`/search?q=${item}`} className="w-full text-sm text-black truncate">
            {item}
          </Link>
          <button onClick={() => handleDelete(item)} className="w-5 h-5 text-neutral-200">
            <XCircleIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}
