import React from 'react'

const RadioButton = ({ title, active }: { title: string, active: boolean }) => {
    return (
        <div className='flex flex-row items-center gap-2'>
            <div className={`w-4 h-4 border ${active ? 'border-primary-1' : 'border-primary-3'} rounded-full flex items-center justify-center`}>
                {
                    active ?
                        <div className='bg-primary-1 w-[10px] h-[10px] rounded-full' />
                        : null
                }
            </div>
            <span className={`font-shabnamMedium text-[14px] ${active ? 'text-primary-1' : 'text-primary-3'}`}>{title}</span>
        </div>
    )
}

export default RadioButton