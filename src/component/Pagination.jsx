import React from 'react'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    

    const goToNextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <div className='flex justify-center items-center mt-5'>
          <button className='w-[40px] h-[40px] mx-1 p-3 bg-white rounded shadow text-[#FD6E6A] hover:bg-[#FD6E6A] hover:text-white' onClick={goToPrevPage}>
            <SlArrowLeft />
          </button>
          {pageNumbers.map(pgNumber => (
              <button key={pgNumber} className= {`w-[40px] h-[40px] mx-1 rounded shadow ${currentPage == pgNumber ? 'active bg-[#FD6E6A] text-white' : 'bg-white text-[#FD6E6A]'} hover:bg-[#FD6E6A] hover:text-white`} onClick={() => setCurrentPage(pgNumber)}>
                {pgNumber}
              </button>
          ))}
          <button className='w-[40px] h-[40px] mx-1 p-3 bg-white rounded shadow text-[#FD6E6A] hover:bg-[#FD6E6A] hover:text-white' onClick={goToNextPage}>
            <SlArrowRight />
          </button>
        </div>
    )
}

export default Pagination