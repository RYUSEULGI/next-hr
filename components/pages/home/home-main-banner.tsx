import Carousel from '@/components/common/Carousel';

export default function HomeMainBanner() {
  const testItems = [
    {
      id: 1,
      image: '배너 캐러셀 넣기',
      uri: ''
    },
    {
      id: 2,
      image: '',
      uri: ''
    }
  ];

  return <Carousel items={testItems} />;
}
