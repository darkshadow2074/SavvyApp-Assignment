import { useMemo } from "react";

export const DOTS = "...";

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const pageRangeToShow = Math.min(totalPageCount, 10);

    if (pageRangeToShow <= 1) {
      return [];
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = pageRangeToShow;

    // Case 1: No dots needed
    if (!shouldShowLeftDots && !shouldShowRightDots) {
      return Array.from({ length: pageRangeToShow }, (_, i) => i + 1);
    }

    // Case 2: Only right dots needed
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const rightRange = Array.from(
        { length: pageRangeToShow - 1 },
        (_, i) => i + 2
      );
      return [firstPageIndex, ...rightRange, DOTS];
    }
    // Case 3: Only left dots needed
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const leftRange = Array.from(
        { length: pageRangeToShow - 1 },
        (_, i) => totalPageCount - pageRangeToShow + 1 + i
      );
      return [DOTS, ...leftRange, lastPageIndex];
    }

    // Case 4: Both left and right dots needed
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Array.from(
        { length: pageRangeToShow - 2 },
        (_, i) => leftSiblingIndex + i
      );
      return [DOTS, ...middleRange, DOTS];
    }

    return [];
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
