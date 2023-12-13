import { ContentSortType, IContent } from '@/lib/api/content/content.types';
import clsx from 'clsx';
import Content from '.';

interface Props {
  label: string;
  type?: ContentSortType;
  carousel?: boolean;
  contents: IContent[];
}

export default function ContentListWithLabel({ type, label, carousel = false, contents }: Props) {
  return (
    <div>
      <h3 className="font-semibold text-2xl mb-6">{label}</h3>
      <ul
        className={clsx('flex items-center gap-4 flex-wrap', {
          'flex-nowrap overflow-hidden': carousel
        })}
      >
        {contents.map((content, index: number) => (
          <li key={`${content.id}`} className="flex items-end">
            {type === ContentSortType.RANK && (
              <span className="text-black text-8xl text-bold">{index + 1}</span>
            )}
            <Content id={content.id} name={content.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
