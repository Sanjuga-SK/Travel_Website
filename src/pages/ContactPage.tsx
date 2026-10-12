import { ArrowRight, ShieldEllipsisIcon } from 'lucide-react'
import React from 'react'
import Input from '../components/ui/Input'
import TextArea from '../components/ui/TextArea'
import Dropdown from '../components/ui/Dropdown'
import Button from '../components/ui/Button'

const Contact = () => {
    return (
        <div className='p-20 bg-[#0C0F14] text-white'>
            <div className='bg-gradient-to-br from-[#120D08] via-[#201A15] to-[#120D08] w-full p-10 rounded-2xl'>
                <div>
                    <h1 className='text-amber-300'> DIRECT CONSULTATION</h1>
                    <h1 className='text-[48px] font-serif'>Speak with a Private Expedition Architect</h1>
                    <p>Our senior journey architects hold private consultations in London (Mayfair), New York (Madison Ave), Geneva, and Tokyo. Or request a confidential digital dossier callback.</p>
                </div>
                <form className='grid md:grid-cols-2 gap-5 my-10 pb-10 border-b border-white/10'>
                    <Input
                        name='Full Name'
                        type='text'
                        placeholder='Enter your name'
                    />
                    <Input
                        name='Email ID'
                        type='email'
                        placeholder='Enter your email'
                    />
                    <Input
                        name='Phone Number'
                        type='tel'
                        placeholder='Enter your number'
                    />
                    <Dropdown
                        title='Concierge Preference'
                        opt={[
                            { label: 'Private Consultation' },
                            { label: 'Digital Dossier' },
                            { label: 'Digital Solution' }
                        ]}
                    />
                    <div className='md:col-span-2'>
                        <TextArea
                            name='Address'
                            placeholder='Enter your full address'
                        />
                    </div>

                </form>
                <div className='flex justify-between items-center flex-wrap gap-3'>
                    <p className='flex gap-2'><ShieldEllipsisIcon className='text-amber-300' size={24} />All communications protected under Aurelia Non-Disclosure Protocol.</p>
                    <Button text="Submit Application" variant='primary' />

                </div>
            </div>

        </div>
    )
}

export default Contact