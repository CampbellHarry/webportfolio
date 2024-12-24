import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDaysIcon } from 'lucide-react';

export default function BlogTitle({data: blogs, filedata: fileget, wholedata, author}: {data: any, filedata: any, wholedata: any, author: any}) {
    console.log(author);
    return(
    <div className='flex font-bold text-3xl mt-2 dark:text-white text-black flex-col gap-1'>
        <p>{fileget?.title}</p>
        <div className="flex flex-row gap-2 mt-2">
            <Avatar>
                <AvatarImage src={author?.imageUrl} />
                <AvatarFallback className="h-10 w-10 rounded-full">{fileget?.authorid?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-between">
                <p className="font-normal text-sm">
                    <span className='dark:text-gray-400'>By: <b className='text-foreground'>{author?.firstName} {author?.lastName}</b></span> 
                </p>
                <div className="flex flex-row gap-2 items-center"><p className="font-normal text-xs dark:text-gray-400">{readTimeCalculation(wholedata?.map((item: any) => item.value).join(' ') || '')}  minute read</p>
                    <p>·</p>
                    <p className="font-normal text-xs dark:text-gray-400 flex items-center justify-center flex-row gap-0.5">
                        <CalendarDaysIcon height={18} /> {new Date(fileget?._creationTime).toDateString()}
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

function readTimeCalculation(text: string) {
    let words = text.split(' ').length;
    let minutes = words / 200;
    return Math.ceil(minutes);
}