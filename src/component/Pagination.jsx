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
          <button className='w-[40px] h-[40px] mx-1 p-3 bg-white rounded border border:white shadow text-[#B40100] hover:bg-[#B40100] hover:text-white' onClick={goToPrevPage}>
            <SlArrowLeft />
          </button>
          <div className='max-w-[50%] overflow-x-auto'>
            <div className='flex items-center justify-between w-max sp:mt-[5px]'>
                {pageNumbers.map(pgNumber => (
                    <button key={pgNumber} className= {`w-[40px] h-[40px] rounded mx-1 border border:white shadow ${currentPage == pgNumber ? 'active bg-[#B40100] text-white' : 'bg-white text-[#B40100]'} hover:bg-[#B40100] hover:text-white`} onClick={() => setCurrentPage(pgNumber)}>
                      {pgNumber}
                    </button>
                ))}
            </div>
          </div>
          <button className='w-[40px] h-[40px] mx-1 p-3 bg-white rounded border border:white shadow text-[#B40100] hover:bg-[#B40100] hover:text-white' onClick={goToNextPage}>
            <SlArrowRight />
          </button>
        </div>
    )
}

export default Pagination