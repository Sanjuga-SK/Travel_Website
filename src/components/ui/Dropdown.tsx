import React from 'react'

interface DropdownProps {
    title: string;
    opt: {
        label: string;
    }[];
}

const Dropdown = ({ title, opt }: DropdownProps) => {
    return (
        <div>
            <label className='mb-2 block' >{title}</label>
            <select
                className='w-full rounded border border-white/20 bg-white/5 px-5 py-3 outline-none '
            >
                {
                    opt.map((ops, index) => (
                        <div key={index}>
                            <option className='text-black/70 '>{ops.label}</option>
                        </div>

                    ))
                }
            </select>
        </div>
    )
}

export default Dropdown