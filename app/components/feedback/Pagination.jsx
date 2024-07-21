import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Icons } from "../Icons";

function PaginatedItems({ data }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {currentItems.map((item) => {
          const { id, name, feedback, active } = item;
          return (
            <li
              key={id}
              className={`${active ? "bg-[#4F771C] text-background" : "bg-[#F0F5EA]"} space-y-2 rounded-sm p-4`}
            >
              <Icons.Quote fill={`${active ? "#fff" : "#224F34"}`} />

              <h3 className={`${active ? "" : "text-[#224F34]"}`}>{name}</h3>
              <p className="text-sm leading-6">{feedback}</p>
            </li>
          );
        })}
      </ul>

      <ReactPaginate
        breakLabel="..."
        nextLabel={<FaAngleRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        // pageCount={pageCount}
        previousLabel={<FaAngleLeft />}
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-center gap-10"
        previousClassName="shadow-md py-2 px-3 flex items-center justify-center"
        nextClassName="text-xl border bg-[#4F771C] text-background py-2 px-3 font-normal rounded"
      />
    </>
  );
}

export default PaginatedItems;
