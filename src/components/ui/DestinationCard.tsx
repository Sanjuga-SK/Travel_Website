import React from 'react'
import { MapPin, Compass, Plane } from "lucide-react";

interface DestinationCardProps {
    heading: string;
    title: string;
    places: string;
    icon: "map" | "compass" | "plane" ;

}

const DestinationCard = ({ heading, title, places,icon }: DestinationCardProps) => {
    const Icon = icon === "map"? MapPin : icon === "compass" ? Compass : Plane ; 
    return (
        <div className='flex p-8 border border-white/10 bg-[#120D08] rounded-md'>
            <div>
                <h1 className='text-[10px] text-amber-300'>{heading}</h1>
                <h2>{title}</h2>
                <p>{places}</p>
            </div>
            <Icon size={16} />

        </div>
    )
}

export default DestinationCard