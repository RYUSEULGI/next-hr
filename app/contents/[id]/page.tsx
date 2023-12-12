import TextLabel from '@/components/common/label/text-label';
import { APIGetContent } from '@/lib/api/content/content';
import { APIGetContentCategory } from '@/lib/api/content/content.category';

interface Props {
  params: { id: string };
}

export default async function ContentsDetailPage({ params }: Props) {
  const { id: paramId } = params;
  const id = Number(paramId) || 0;

  const content = await APIGetContent(id);
  const categories = await APIGetContentCategory();

  const categoryName = categories.find((category) => category.id === id)?.name ?? '';

  return (
    <div className="flex items-center justify-between gap-8">
      <div className="flex flex-col">
        <h2 className="text-8xl font-semibold">{content.name}</h2>
        {content.enName && (
          <h4 className="mt-4 mb-2 text-gray-600 font-medium">{content.enName}</h4>
        )}

        <div className="flex items-center gap-2 mb-6">
          <TextLabel>{content.year}</TextLabel>
          <TextLabel>{content.nation}</TextLabel>
          {categoryName && <TextLabel>{categoryName}</TextLabel>}
        </div>

        {content.directors && <p className="mb-1 text-sm text-black">감독 | {content.directors}</p>}
        <p className="max-w-md text-sm text-black">
          대한민국 최고의 명문 로스쿨 교수와 학생들이 전대미문의 사건에 얽히게 되면서 펼쳐지는
          캠퍼스 미스터리와 더불어, 피, 땀, 눈물의 살벌한 로스쿨 생존기를 통해 예비 법조인들이
          진정한 법과 정의를 꺠닫는 과정을 담은 드라마
        </p>
      </div>

      <div className="w-1/3 h-60 border rounded-lg" />
    </div>
  );
}
