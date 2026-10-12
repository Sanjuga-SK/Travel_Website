import { ArrowBigRight, ArrowRightFromLine, ArrowUpRight, Snowflake } from 'lucide-react'
import React from 'react'
import SnowImage from '../assets/snow-image.png'
import IonicanImage from '../assets/ionian-image.png'
import MountImage from '../assets/mount-image.png'
import CraterImage from '../assets/crater-image.png'
import ExpeditionCard from '../components/ui/ExpeditionCard'
import Button from '../components/ui/Button'

const About = () => {
    return (
        <section className='bg-[#0C0F14] text-white p-12 py-20 '>
            <div className='flex flex-col lg:flex-row justify-between  pb-10 border-b-1 border-white/10 '>
                <div>
                    <h1 className='text-amber-300'> CURATED ODYSSEYS</h1>
                    <h1 className='text-[48px] font-serif'>Signature Expeditions of 2025</h1>
                </div>
                <div className='flex flex-col lg:flex-row gap-3 items-baseline-last'>
                    <p className='w-full lg:max-w-[800px]'>Exclusively chartered, uncrowded landscapes crafted with seamless continuity, Michelin dining, and master historians.</p>
                    <Button text="View Master" variant="noborder"/>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-5 mt-5 max-w-[1440px] mx-auto '>
                <ExpeditionCard image={SnowImage} location="Norway & Finnish Lapland" title="The Nordic Aurora & Fjord Odyssey" description="Private geothermal glass villas overlooking the Lyngen Alps, coupled with chartered ice-class explorer yachting through deep glacial fjords and master-guided Arctic sky viewings." includes="Includes: Arctic Superyacht, Polar Heli-Excursions, Michelin Chef" span="md:col-span-3" /> 
                <ExpeditionCard image={CraterImage} location="Crater Landscapes" title="The Volcanic Wonders Expedition" description="Explore dramatic volcanic landscapes and discover remarkable natural wonders." includes="Includes: Guided Exploration, Private Transfers" span="md:col-span-2" /> 
                <ExpeditionCard image={IonicanImage} location="Ionian Islands" title="The Mediterranean Escape" description="Discover beautiful coastlines, clear waters, and unforgettable island experiences." includes="Includes: Island Tours, Luxury Transfers" span="md:col-span-2" /> 
                <ExpeditionCard image={MountImage} location="Mountain Escapes" title="The Alpine Adventure" description="Experience breathtaking mountain scenery and peaceful luxury stays." includes="Includes: Mountain Excursions, Private Guides" span="md:col-span-3" />
            </div>
        </section>
    )
}

export default About