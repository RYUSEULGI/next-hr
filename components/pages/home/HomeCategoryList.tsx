import Link from 'next/link';

export default function HomeCategoryList() {
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
            <span className="text-black text-6xl">{index + 1}</span>
            <Link href="" className="w-56 h-60 border rounded-lg" />
          </li>
        ))}
      </ul>
    </div>
  );
}
