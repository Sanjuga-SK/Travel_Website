import { Car, Plane, Ship } from 'lucide-react';
import React from 'react'
import Button from './Button';

interface FleetCardProps {
    image: string;
    title: string;
    description: string;
    icon: "plane" | "ship" | "car";
    specs: {
        label: string;
        value: string;
    }[];

}

const FleetCard = ({ image, title, description, icon, specs }: FleetCardProps) => {
    const Icon = icon === 'plane' ? Plane : icon === 'ship' ? Ship : Car;
    return (
        <div>
            <div className=' p-3 border border-white/10 bg-[#201A15]/60'>
                <div className='w-full h-[300px] p-5'>
                    <img
                        src={image}
                        alt={title}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='border-b border-white/10 p-2 pb-5 '>
                    <div className='flex gap-2 justify-between text-[28px] items-center'>
                        <h1>{title}</h1>
                        <Icon color='yellow' />
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-2 p-2 py-5 border-b border-white/10 '>
                    {specs.map((spec, index) => (
                        <div key={index}>
                            <h1 className='font-semibold'>{spec.label}</h1>
                            <p>{spec.value}</p>
                        </div>
                    ))}
                </div>
                <div className='p-2 py-5'>
                    <Button text="Request Aircraft Manifest" variant='outline' />
                </div>


            </div>
        </div>
    )
}

export default FleetCard