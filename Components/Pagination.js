const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  console.log(pages, pageSize, currentPage, pagesCount, "newpage");

  return (
    <div>
      <ul className="pagination">
        {pages.map((page) => (
          <li className="page_section" key={page}>
            <a className="pageLink" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
