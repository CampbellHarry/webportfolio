export default function RichText({content}: {content: string}){
    return (
        <div className='flex flex-col gap-1'>
            <div className='prose prose-headings:text-blue-600 prose-a:text-blue-400 prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg text-sm font-medium break-all'>
                <div className='content prose' dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
}