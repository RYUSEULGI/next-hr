export function convertBigIntResponse(data: any) {
  const convert = JSON.stringify(data, (_, value) =>
    typeof value === 'bigint' ? Number(value) : value
  );
  return JSON.parse(convert);
}
