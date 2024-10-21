import React from 'react'
import { useDispatch } from 'react-redux'
import { handleCustModal } from '../../store/handle/handleSlice'

const CreateCostomer = () => {
  const dispatch = useDispatch()
  return (
    <div className='w-full h-full fixed top-0 left-0 bg-black/50 backdrop-blur flex items-center justify-center'>
      <div className='bg-white rounded w-[60%]'>
        <div className='px-5 py-5 font-bold text-xl border-b flex justify-between'>Add customer <span onClick={() => dispatch(handleCustModal())} className='text-red-500 cursor-pointer'>X</span></div>
        <div className='h-[500px]'>
          hello world
        </div>
      </div>
    </div>
  )
}

export default CreateCostomer
