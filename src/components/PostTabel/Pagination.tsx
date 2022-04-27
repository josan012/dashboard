import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
import "./page.scss";
const Pagination = (props: any) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage =
    paginationRange && paginationRange[paginationRange.length - 1];

  const calcPages = (current: number, total: number) => {
    let range = [];
    let pageLimit = total;
    let upperLimit = current;
    let lowerLimit = current;

    for (let b = 1; b < pageLimit && b < total; ) {
      if (lowerLimit > 1) {
        lowerLimit--;
        b++;
      }
      if (b < pageLimit && upperLimit < total) {
        upperLimit++;
        b++;
      }
    }

    for (let i = lowerLimit; i <= upperLimit; i++) {
      range.push(i);
    }

    return range;
  };

  console.log(calcPages(8, 3));
  return (
    <ul
      className={classnames("pagination--container", {
        [className]: className,
      })}
    >
      <li
        className={classnames("pagination--item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="sageata stanga" />
      </li>
      {paginationRange?.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="pagination--item puncte">&#8230;</li>;
        }

        return (
          <li
            className={classnames("pagination--item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames("pagination--item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="sageata dreapta" />
      </li>
    </ul>
  );
};

export default Pagination;
