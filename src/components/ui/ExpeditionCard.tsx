import React from 'react'
import {Snowflake} from 'lucide-react';
import {ArrowUpRight} from 'lucide-react';
import Button from './Button';

interface ExpeditionCardProps {
    image:string;
    title:string;
    location:string;
    description:string;
    includes:string;
    span:string;
}


const ExpeditionCard = ({image,title,location,description,includes,span}:ExpeditionCardProps) => {
  return (

        <div className={`flex flex-col ${span} bg-[#120D08] w-full rounded-2xl overflow-hidden`}>
                    <div className='w-full h-[300px] rounded-2xl'>
                        <img
                            src={image}
                            alt={title}
                            className='w-full h-full object-cover rounded-t-2xl' />
                    </div>
                    <div className=' flex flex-col justify-end  w-full h-full pb-3 p-2 gap-3'>
                        <h1 className='text-amber-300 flex gap-2'>
                            <Snowflake />
                            {location}
                        </h1>
                        <h1 className='text-[32px] font-serif'>
                            {title}
                        </h1>
                        <p>
                            {description}
                        </p>
                        <div className='flex flex-row justify-between gap-5 mt-3 p-2 border-t-1 border-white/20 w-full flex-wrap'>
                            <h1 className='flex-1 min-w-[250px]'>{includes}</h1>
                        <Button text="View Dossier" variant ="noborder"/>
                        </div>
                    </div>
                </div>
  )
}

export default ExpeditionCard