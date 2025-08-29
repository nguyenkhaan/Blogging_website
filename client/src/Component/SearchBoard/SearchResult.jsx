import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SearchResultsItem from "./SearchResultsItem";
function SearchResult({ searchInput, dataShow }) {
    return (
        <>
            <span className="mt-3 mb-3 block w-full text-right italic text-sm text-gray-600">{`${dataShow.length} kết quả phù hợp với ${searchInput}`}</span>
            <div className='px-6 lg:px-0 flex-1 w-full min-h-80 gap-4 flex flex-col items-start justify-start divide-y divide-gray-300 pr-6"'>
                {dataShow.map((data) => {
                    return <SearchResultsItem blogData={data} />;
                })}
            </div>
        </>
    );
}
export {SearchResult}