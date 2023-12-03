import React from 'react'
import img from '../../assets/inna.jpg'
import { AiFillCalendar } from 'react-icons/ai'
import TimelineElement from './TimelineElement';
const TimelineComp = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const data = [
        {
            eventName: "Inna KONSERİ",
            eventHour: "11:00",
            eventDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, esse!",
            eventLocation: "Hayal Kahvesi, İzmit/Kocaeli",
            attendanceList: [{
                artistName: "INNA",
                artistPhoto: img,
            }]
        },
        {
            eventName: "Inna KONSERİ",
            eventHour: "11:00",
            eventDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, esse!",
            eventLocation: "Hayal Kahvesi, İzmit/Kocaeli",
            attendanceList: [{
                artistName: "INNA",
                artistPhoto: img,
            }]
        },
        {
            eventName: "Inna KONSERİ",
            eventHour: "11:00",
            eventDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, esse!",
            eventLocation: "Hayal Kahvesi, İzmit/Kocaeli",
            attendanceList: [{
                artistName: "INNA",
                artistPhoto: img,
            }]
        },
        {
            eventName: "Inna KONSERİ",
            eventHour: "11:00",
            eventDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, esse!",
            eventLocation: "Hayal Kahvesi, İzmit/Kocaeli",
            attendanceList: [{
                artistName: "INNA",
                artistPhoto: img,
            }]
        },
    ]
    return (
        <div className='my-8 min-h-[600px] flex flex-col'>
            <div className='flex gap-3 sm:gap-0 flex-col sm:flex-row items-center justify-between mb-8 sm:mb-24'>
                <div className='sm:w-[200px] text-xl sm:text-3xl font-bold'>| <span className='text-orange-500'>Today's</span> Schedule</div>
                <div className='sm:w-[200px] text-md sm:text-2xl font-bold justify-center flex items-center'><AiFillCalendar className='me-3 w-6 h-6 sm:h-11 sm:w-11' /> <span className='text-orange-500'>{day}</span>/{month}/{year}</div>
                <div className='sm:w-[200px] font-bold text-lg sm:text-3xl sm:text-start'> <a href=""><span className='text-orange-500'>|</span> See All<span className='text-orange-500'> Events</span></a></div>
            </div>
            <div className='w-full flex justify-center'>
                <div className='sm:w-[86%] relative sm:flex justify-between sm:m-auto'>
                    <div className='w-[4px] sm:w-[90%] sm:translate-x-[-50%] bg-black bottom-[50%] sm:translate-y-0 translate-y-[50%] h-[78%] sm:h-[4px] absolute sm:bottom-20 z-0 left-[15%] sm:left-[50%]'></div>
                    {data.map((event, i) => {
                        return (<TimelineElement key={i} event={event} />
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default TimelineComp