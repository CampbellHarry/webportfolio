export default function Tags({tags}: {tags: string[]}) {
    return (
        <div className='flex flex-row gap-2'>
            {tags.map((tag, index) => (
                <p key={index} className='text-xs dark:text-gray-400 bg-gray-200 dark:bg-gray-800 rounded-md p-1'>{tag}</p>
            ))}
        </div>
    );
}