
import React from 'react';

export default function NumberRater({ number, type }: { number: number; type: string }) {
    const field = { fieldappearance: type, _id: number };
    const fieldValues: { [key: number]: number } = { [number]: number };
    const index = number;

    if (field.fieldappearance === "rating") {
        // star rating
        const rating = fieldValues[field._id] || 0;
        return (
            <div key={index} className='flex flex-col gap-1'>
                {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={star <= rating ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className={`w-6 h-6 ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
                        aria-label={`${star} star${star > 1 ? 's' : ''}`}
                    >
                        <title>{`${star} star${star > 1 ? 's' : ''}`}</title>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                    </svg>
                ))}
            </div>
        );
    } else if (field.fieldappearance === "number") {
        return (
            <div key={index} className='flex flex-col gap-1'>
                <p>{fieldValues[field._id]}</p>
            </div>
        );
    } else {
        return null;
    }
}