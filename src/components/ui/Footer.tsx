import { Globe, MailOpen, PhoneCall } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#120D08] text-white font-serif p-3'>
            <div className='flex flex-row items-center border-b border-white/15 p-10 gap-5 flex-wrap justify-between'>
                <div className='flex flex-col gap-3 w-full max-w-[700px]'>
                    <h1 className='text-[32px]'>AURELIA EXPEDITIONS</h1>
                    <p className='font-light font-sans '>Private Aviation, Bespoke Maritime Charters & Sovereign Territory Expeditions. Curated with unyielding discretion for high-net-worth families, cultural patrons, and discreet collectors.</p>
                </div>
                <div className='flex gap-5'>
                    <a href="sanjugask@gmail.com"><MailOpen size={32} /></a>
                    <a href="9344313466"><PhoneCall size={32} /></a>
                    <a href=""><Globe size={32} /></a>
                </div>
            </div>
            <div className='flex flex-row sm:justify-around p-10 w-full h-full flex-wrap gap-5 justify-start'>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-amber-300'>JOURNEYS & FLEET</h2>
                    <ul className='gap-5 lowercase'>
                        <li>CURATED ITINERARIES</li>
                        <li>MARITIME</li>
                        <li>AVIATION</li>
                        <li>SOVEREIGN EXPERIENCES</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-5'>
                    <h2 className='text-amber-300'>JOURNEYS & FLEET</h2>
                    <ul className='gap-5 lowercase'>
                        <li>CURATED ITINERARIES</li>
                        <li>MARITIME</li>
                        <li>AVIATION</li>
                        <li>SOVEREIGN EXPERIENCES</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-5'>
                    <h2 className='text-amber-300'>JOURNEYS & FLEET</h2>
                    <ul className='gap-5 lowercase'>
                        <li>CURATED ITINERARIES</li>
                        <li>MARITIME</li>
                        <li>AVIATION</li>
                        <li>SOVEREIGN EXPERIENCES</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-5'>
                    <h2 className='text-amber-300'>JOURNEYS & FLEET</h2>
                    <div className='w-[250px]'>Berkeley Square, Mayfair, London
                        Madison Avenue, New York City
                        Rue du Rhône, Geneva
                        Ginza Six, Chuo-ku, Tokyo</div>
                </div>

            </div>
            <div className='text-center p-5 border-t border-white/15'>
                <h1 className='font-light text-[14px]'>© 2025 Aurelia Expeditions Ltd. All Rights Reserved. Private Aviation & Maritime Charter Bureau.</h1>
            </div>

        </footer>
    )
}

export default Footer