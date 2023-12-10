import Link from 'next/link';

export default function HomeLiveBox() {
  const testItems = [
    {
      id: 1,
      image: '',
      uri: ''
    },
    {
      id: 2,
      image: '',
      uri: ''
    }
  ];

  return (
    <div>
      <ul className="flex items-center gap-4 flex-wrap">
        {testItems.map((recommend, index: number) => (
          <li key={`${recommend.id}`} className="flex items-end">
            <Link href="" className="w-56 h-60 border rounded-lg" />
          </li>
        ))}
      </ul>
    </div>
  );
}
