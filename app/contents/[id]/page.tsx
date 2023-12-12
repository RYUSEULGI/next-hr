import ContentListWithLabel from '@/components/layouts/content/list-with-label';
import ContentInfoBox from '@/components/pages/contents/content-info-box';
import { APIGetContentList } from '@/lib/api/content/content';

interface Props {
  params: { id: string };
}

export default async function ContentsDetailPage({ params }: Props) {
  const { id: paramId } = params;
  const id = Number(paramId) || 0;

  const similarContent = await APIGetContentList({ page: 1, categoryId: id });

  return (
    <div>
      <section className="pt-4 pb-4 flex items-center justify-between gap-8">
        <ContentInfoBox id={id} />
        <div className="w-1/3 h-60 border rounded-lg" />
      </section>

      <hr className="border-b-gray-300" />

      {similarContent.items.length > 0 && (
        <section className="pt-4">
          <ContentListWithLabel label="비슷한 콘텐츠" contents={similarContent.items} />
        </section>
      )}
    </div>
  );
}
