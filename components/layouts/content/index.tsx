import Link from 'next/link';

interface Props {
  id: number;
  name: string;
}

export default function Content({ id, name }: Props) {
  return (
    <Link href={`/contents/${id}`} className="w-56 h-60 border rounded-lg">
      <div className="w-full h-full flex items-center justify-center">{name}</div>
    </Link>
  );
}
