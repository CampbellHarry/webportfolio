import React from "react"

export default function DateTime({ date }: { date: string }) {
    return (
        <div>
            <p>
                <span className='font-semibold'>
                    {new Date(date).toLocaleString([], { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </span>
            </p>
        </div>
    )
}