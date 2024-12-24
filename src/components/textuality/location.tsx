import { MapPin } from "lucide-react";

export default function Location({location}: {location: any}) {
    return (
        <div className='flex flex-row gap-2 mt-2'>
            <MapPin />
            <p>
            At:{" "}
            <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold  underline"
            >
                {location}
            </a>
        </p>
        </div>
    )
}