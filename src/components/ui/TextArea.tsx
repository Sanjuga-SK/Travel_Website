import React from 'react'

interface InputProps{
  name: string;
  placeholder: string;

}

const TextArea = ({name,placeholder}:InputProps) => {
  return (
     <div>
                        <label className='mb-2 block' >{name}</label>
                        <textarea 
                        placeholder={placeholder}
                        className='w-full rounded border border-white/20 bg-white/5 px-5 py-3 outline-none '
                         />
                    </div>
  )
}

export default TextArea