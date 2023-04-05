export const paginate = (items, pageNumber, pageSize) => {
  console.log(items?.results, "testing");
  const startIndex = (pageNumber - 1) * pageSize;
  console.log(startIndex, pageNumber, pageSize);
  const result = items?.articles?.results?.slice(
    startIndex,
    startIndex + pageSize
  );
  console.log(result, "new");
  return result;
  // 0, 9
};
