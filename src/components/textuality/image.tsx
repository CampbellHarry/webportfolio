export default function Image({image}: {image: any}) {
    return (
        <div className='flex flex-row gap-2 mt-2'>
            <img src={image} alt="Image" className="rounded-lg w-full h-auto object-cover" />
        </div>
    )
}