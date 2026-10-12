import React from 'react'
import SnowImage from '../assets/snow-image.png'
import MountImage from '../assets/mount-image.png'
import CraterImage from '../assets/crater-image.png'
import FleetCard from '../components/ui/FleetCard'

const Fleet = () => {
    return (
        <div className='bg-[#120D08] text-white p-10 py-20 flex flex-col gap-5'>
            <div>
                <h1 className='text-amber-300'>DOOR-TO-SANCTUARY TRANSIT</h1>
                <h1 className='text-[48px] font-serif'>RPrivate Aviation & Maritime Fleet</h1>
                <p>Eliminate public terminals, customs delays, and commercial schedules. Our bespoke fleet guarantees seamless, peerless movement across air, land, and water.</p>
            </div>
            <div>
                <div className='  grid md:grid-cols-3 gap-5'>
                    <FleetCard
                        image={CraterImage}
                        title='Gulfstream G650 & Global Express'
                        icon='plane'
                        description='Ultra-long-range jets capable of non-stop journeys between continents, crewed by two pilots and supported by a flight attendant.'
                        specs={[{ label: 'Capacity:', value: '12–16 Passengers' },
                        { label: 'Crew:', value: '2 Pilots' },
                        { label: 'Range:', value: 'Long Range' },
                        { label: 'Service:', value: 'Private Charter' },]}
                    />
                    <FleetCard
                        image={MountImage}
                        title='Gulfstream G650 & Global Express'
                        icon='ship'
                        description='Ultra-long-range jets capable of non-stop journeys between continents, crewed by two pilots and supported by a flight attendant.'
                        specs={[{ label: 'Capacity:', value: '12–16 Passengers' },
                        { label: 'Crew:', value: '2 Pilots' },
                        { label: 'Range:', value: 'Long Range' },
                           { label: 'Service:', value: 'Private Charter' },]}
                    />
                    <FleetCard
                    image={SnowImage}
                    title='Gulfstream G650 & Global Express'
                        icon='car'
                        description='Ultra-long-range jets capable of non-stop journeys between continents, crewed by two pilots and supported by a flight attendant.'
                        specs={[{ label: 'Capacity:', value: '12–16 Passengers' },
                        { label: 'Crew:', value: '2 Pilots' },
                        { label: 'Range:', value: 'Long Range' },
                        { label: 'Service:', value: 'Private Charter' },]}
                    />

                </div>
            </div>
        </div>
    )
}

export default Fleet