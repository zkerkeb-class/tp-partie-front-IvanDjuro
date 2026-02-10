import "./index.css";
import { t } from "../../i18n/ui.js";

const PageList = ({ pagination, onPageChange, language = "french" }) => {
  if (!pagination) return null;

  const {
    currentPage,
    totalPages,
    hasNextPage,
    hasPreviousPage,
  } = pagination;

  const goTo = (p) => {
    if (p < 1 || p > totalPages) return;
    onPageChange(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPagesToShow = () => {
    const delta = 2;
    const start = Math.max(1, currentPage - delta);
    const end = Math.min(totalPages, currentPage + delta);
    const pages = [];
    for (let i = start; i <= end; i++) pages.push(i);
    return { start, end, pages };
  };

  const { start, end, pages } = getPagesToShow();

  return (
    <div className="page-list">
      <button 
        onClick={() => goTo(currentPage - 1)} 
        disabled={!hasPreviousPage}
        className="nav-button"
        aria-label={t(language, "ariaPrev")}
      >
        {t(language, "prevShort")}
      </button>

      {start > 1 && (
        <>
          <button 
            onClick={() => goTo(1)} 
            className={currentPage === 1 ? "active" : ""}
            aria-label={t(language, "ariaPage", 1)}
          >
            1
          </button>
          {start > 2 && <span className="dots">⋯</span>}
        </>
      )}

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => goTo(p)}
          className={p === currentPage ? "active" : ""}
          aria-current={p === currentPage ? "page" : undefined}
          aria-label={t(language, "ariaPage", p)}
        >
          {p}
        </button>
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className="dots">⋯</span>}
          <button
            onClick={() => goTo(totalPages)}
            className={currentPage === totalPages ? "active" : ""}
            aria-label={t(language, "ariaPage", totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      <button 
        onClick={() => goTo(currentPage + 1)} 
        disabled={!hasNextPage}
        className="nav-button"
        aria-label={t(language, "ariaNext")}
      >
        {t(language, "nextShort")}
      </button>
    </div>
  );
};

export default PageList;
