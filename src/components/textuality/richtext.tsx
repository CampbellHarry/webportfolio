export default function RichText({ content }: { content: string }) {
    return (
        <div className='flex flex-col gap-1'>
            <div
                className='custom-prose break-words text-sm font-medium break-all'
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}
