import { IContent } from '@/lib/api/content/content.types';
import Content from '.';

interface Props {
  label: string;
  contents: IContent[];
}

export default function ContentListWithLabel({ label, contents }: Props) {
  return (
    <>
      <h3 className="font-semibold text-2xl mb-6">{label}</h3>
      <ul className="flex items-center gap-4 flex-wrap">
        {contents.map((content) => (
          <li key={`${content.id}`} className="flex">
            <Content id={content.id} name={content.name} />
          </li>
        ))}
      </ul>
    </>
  );
}
