import React from 'react'

interface InputProps{
  name: string;
  type: string;
  placeholder: string;

}

const Input = ({name,type,placeholder}:InputProps) => {
  return (
     <div>
                        <label className='mb-2 block' >{name}</label>
                        <input 
                        type={type}
                        placeholder={placeholder}
                        className='w-full rounded border border-white/20 bg-white/5 px-5 py-3 outline-none '
                         />
                    </div>
  )
}

export default Input