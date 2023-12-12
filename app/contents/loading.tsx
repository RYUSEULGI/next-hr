import Grid from '@/components/layouts/Grid';

export default function SearchLoading() {
  return (
    <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
      {Array(12)
        .fill(0)
        .map((_, index) => {
          return <Grid.Item key={index} className="animate-pulse bg-neutral-100" />;
        })}
    </Grid>
  );
}
