import { Compass } from 'lucide-react'
import React from 'react'

const Delivery = () => {
    return (
        <section className=' bg-[#0C0F14] text-white p-10 grid lg:grid-cols-2 pt-20 gap-5'>
            <div >
                <div>
                    <h1 className='text-amber-300'>THE AURELIA STANDARD</h1>
                    <h1 className='text-[48px] font-serif'>Rare Privileges.<span className='text-amber-300'>Flawless Delivery.</span></h1>
                    <p>True luxury is not merely fine upholstery; it is the absolute absence of friction, unlisted access to cultural monuments after public departure, and private security protocols executed with quiet elegance.</p>
                </div>
                <div className='bg-[#201A15] border border-[#E9C349]/20 p-4 gap-2 mt-5 rounded-md'>
                    <i>"Aurelia operates where ultra-wealth advisory meets high-touch exploration. They unlock gates that do not have locks, only handshakes."</i>
                    <div className='flex gap-2 mt-3'>
                        <h1 className='flex bg-[#E9C349]/30 rounded items-center justify-center text-amber-300 w-[32px] h-[32px]'>FT</h1>
                        <div className='flex flex-col text-[11px] '>
                            <p>Financial Times</p>
                            <p>How to spent it - Reviewer</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='grid sm:grid-cols-2 gap-5  '>
                <div className='bg-[#201A15] border border-[#E9C349]/20 p-4 gap-2 rounded-xl'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='flex bg-[#E9C349]/30 rounded items-center justify-center text-amber-300 w-[32px] h-[32px] p-2'><Compass/></h1>
                        <div className='flex flex-col text-[11px]  '>
                            <h1>100% Tailored Architecture</h1>
                            <p>Every minute of your expedition is
                                created bespoke from zero. No cookie-
                                cutter packages, pre-sold allotments,
                                or compromises on personal rhythm.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#201A15] border border-[#E9C349]/20 p-4 gap-2 rounded-xl'>
                    <div className='flex flex-col gap-2 '>
                        <h1 className='flex bg-[#E9C349]/30 rounded items-center justify-center text-amber-300 w-[32px] h-[32px] p-2'><Compass/></h1>
                        <div className='flex flex-col text-[11px]  '>
                            <h1>100% Tailored Architecture</h1>
                            <p>Every minute of your expedition is
                                created bespoke from zero. No cookie-
                                cutter packages, pre-sold allotments,
                                or compromises on personal rhythm.</p>
                        </div>
                    </div>
                    

                </div>
                <div className='bg-[#201A15] border border-[#E9C349]/20 p-4 gap-2 rounded-xl'>
                    <div className='flex flex-col gap-2 '>
                        <h1 className='flex bg-[#E9C349]/30 rounded items-center justify-center text-amber-300 w-[32px] h-[32px] p-2'><Compass/></h1>
                        <div className='flex flex-col text-[11px]  '>
                            <h1>100% Tailored Architecture</h1>
                            <p>Every minute of your expedition is
                                created bespoke from zero. No cookie-
                                cutter packages, pre-sold allotments,
                                or compromises on personal rhythm.</p>
                        </div>
                    </div>
                    

                </div>
                <div className='bg-[#201A15] border border-[#E9C349]/20 p-4 gap-2 rounded-xl'>
                    <div className='flex flex-col gap-2 '>
                        <h1 className='flex bg-[#E9C349]/30 rounded items-center justify-center text-amber-300 w-[32px] h-[32px] p-2'><Compass/></h1>
                        <div className='flex flex-col text-[11px]  '>
                            <h1>100% Tailored Architecture</h1>
                            <p>Every minute of your expedition is
                                created bespoke from zero. No cookie-
                                cutter packages, pre-sold allotments,
                                or compromises on personal rhythm.</p>
                        </div>
                    </div>
                    

                </div>

            </div>


        </section>


    )
}

export default Delivery