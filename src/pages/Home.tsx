import React from 'react'
import {CheckCircle, MapPin } from "lucide-react";
import Image from "../assets/bg-image.png";
import DestinationCard from '../components/ui/DestinationCard';

const Home = () => {
    return (
        <div className='bg-cover bg-center'  style={{backgroundImage: `url(${Image})`}}>
        <div className='w-full min-h-screen justify-center gap-1 flex flex-col items-center text-white p-12 bg-[#0C0F14]/50'>


            <div className='border border-amber-300 p-1 rounded-2xl pl-2 pr-2 '>
                <h1 className='text-amber-300 lowercase text-center '>MEMBERSHIP PRIVILEGE & DISCREET PASSAGE</h1>
            </div>
            <h1 className='lg:text-[64px] text-[42px] font-normal font-serif text-center'>Transcending the Ordinary.</h1>
            <h1 className='lg:text-[64px] text-[42px] font-normal font-serif text-center'><i className='text-amber-300'>Tailored Private Expeditions</i> for the Discerning Traveler.</h1>
            <p className='text-[18px] font font-sans text-center mt-2 max-w-[800px]'>Handcrafted journeys to the world's most secluded sanctuaries, accompanied by world-
                class private aviation, maritime charters, and 24/7 bespoke concierge care.</p>

            <div className='flex flex-col sm:p-6 lg:flex-row lg:gap-6 max-w-5xl gap-2 items-center justify-around mt-5 p-4  flex-wrap'>
                <DestinationCard heading="SANCTUARY / DESTINATION" title="Amalfi & Capri Islets" places="Kyoto, Serengeti, Antarctica" icon='map'/>
                <DestinationCard heading="SANCTUARY / DESTINATION" title="Amalfi & Capri Islets" places="Kyoto, Serengeti, Antarctica" icon='compass'/>
                <DestinationCard heading="SANCTUARY / DESTINATION" title="Amalfi & Capri Islets" places="Kyoto, Serengeti, Antarctica" icon='plane'/>
                
            </div>
            <div className='flex flex-col lg:flex-row gap-5 items-center p-2'>
                <h1 className='flex gap-2'><span><CheckCircle/></span>BY DIRECT INVITATION & REFERRAL</h1>
                <h1 className='flex gap-2'><span><CheckCircle/></span>BY DIRECT INVITATION & REFERRAL</h1>
                <h1 className='flex gap-2'><span><CheckCircle/></span>BY DIRECT INVITATION & REFERRAL</h1>

            </div>
            </div>
        </div>
    )
}

export default Home