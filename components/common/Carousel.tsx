'use client';

import useInterval from '@/hooks/useInterval';
import { useRef, useState } from 'react';

interface Props {
  bullet?: boolean;
  items: { id: number; image: string; uri: string }[];
  onPress?: (id: number) => void;
}

export default function Carousel({ bullet = false, items }: Props) {
  const scrollRef = useRef<HTMLUListElement>(null);

  const [interval, setInterval] = useState(1);
  const [intervals, setIntervals] = useState(1);
  const [width, setWidth] = useState(0);

  useInterval(() => {
    if (!scrollRef.current) {
      return;
    }

    let activeInterval = 1;

    if (interval >= items.length) {
      activeInterval = 1;
    } else {
      activeInterval = interval + 1;
    }

    setInterval(activeInterval);
    scrollRef.current.scrollTo({ left: 1200 * (activeInterval - 1), behavior: 'smooth' });
  }, 400);

  const init = (newWidth: number) => {
    setWidth(newWidth);
    setIntervals(Math.ceil(items.length));
  };

  const getInterval = (offset: number) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset < (width / intervals) * i) {
        return i;
      }
      if (i === intervals) {
        return i;
      }
    }
  };

  return (
    <ul ref={scrollRef} className="w-full border rounded-lg h-80">
      {items.map((item) => {
        return <li key={`carousel-list-${item.id}`}></li>;
      })}
    </ul>
  );
}
