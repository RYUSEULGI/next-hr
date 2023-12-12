'use client';

import CurrentSearchList from '@/components/pages/search/current-searh-list';
import {
  deleteAllCurrentSearch,
  getCurrentSearchList,
  setCurrentSearch
} from '@/components/pages/search/action';
import { CURRENT_SEARCH_KEY } from '@/constants';
import useClickOutside from '@/hooks/useClickOutside';
import { createUrl } from '@/utils/urls';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useRef, useState } from 'react';

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchRef = useRef<HTMLFormElement>(null);

  const [show, setShow] = useState(false);
  const [items, setItems] = useState<string[]>([]);

  useClickOutside(searchRef, () => setShow(false));

  const hasSearchList = items.length > 0;
  const defaultValue = searchParams.get('q') ?? '';

  const handleClickInput = () => {
    setShow(true);
    handleRefresh();
  };

  const handleRefresh = async () => {
    setItems(getCurrentSearchList(CURRENT_SEARCH_KEY));
  };

  const handleDelteAll = () => {
    deleteAllCurrentSearch(CURRENT_SEARCH_KEY);
    handleRefresh();
  };

  const searchSubmitHandler = (value: string) => {
    if (!value.trim()) {
      return;
    }

    setCurrentSearch(CURRENT_SEARCH_KEY, value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const search = target.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set('q', search.value);
    } else {
      newParams.delete('q');
    }

    searchSubmitHandler(search.value);
    router.push(createUrl('/search', newParams));

    setShow(false);
  };

  return (
    <form
      ref={searchRef}
      onClick={handleClickInput}
      onSubmit={handleSubmit}
      className="w-80 relative"
    >
      <input
        name="search"
        placeholder="검색어를 입력해주세요"
        autoComplete="off"
        defaultValue={defaultValue}
        className="bg-white w-full border rounded-full py-2 pl-7 pr-3 text-xs focus:outline-none focus:border-blue-500 placeholder:text-neutral-500"
      />
      <div className="absolute right-2 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4 text-neutral-500" />
      </div>

      {show && (
        <div className="absolute bg-white w-80 h-auto shadow-md pb-5">
          <div className="flex items-center justify-between p-5">
            <span className="font-semibold">최근 검색어</span>
            <button onClick={handleDelteAll} className="text-xs text-neutral-400">
              전체삭제
            </button>
          </div>
          {hasSearchList ? (
            <CurrentSearchList items={items} onRefresh={handleRefresh} />
          ) : (
            <p className="py-6 flex items-center justify-center text-sm text-gray-400">
              최근 검색어가 없습니다
            </p>
          )}
        </div>
      )}
    </form>
  );
}
