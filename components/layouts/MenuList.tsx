import Link from 'next/link';

const className = 'text-neutral-500 underline-offset-4 hover:text-black hover:underline';

export default function MenuList() {
  return (
    <ul className="hidden gap-6 text-sm md:flex md:items-center">
      <li>
        <Link href="/search" className={className}>
          전체보기
        </Link>
      </li>
      <li>
        <Link href="/cv" className={className}>
          이력서
        </Link>
      </li>
    </ul>
  );
}
