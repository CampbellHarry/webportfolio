import React, { useMemo } from 'react';

export function CheckForHeadings(content: any) {
    const contenter = content?.content?.data?.merged?.filter((item: any) => item.type === 'Rich text')[0]?.value || content;
    const h1Matches = contenter ? contenter.match(/<h1>(.*?)<\/h1>/g) : null;
    const h2Matches = contenter ? contenter.match(/<h2>(.*?)<\/h2>/g) : null;
    
    const h1Texts = h1Matches ? h1Matches.map((h1: string) => h1.replace(/<\/?h1>/g, '')) : [];
    const h2Texts = h2Matches ? h2Matches.map((h2: string) => h2.replace(/<\/?h2>/g, '')) : [];

    console.log(h1Texts, h2Texts);
    
    const contentsHtml = `
        <div class='flex flex-col gap-1 border-b px-4 py-4 w-full h-full'>
            <h1 class="!mt-0 !pt-0 !text-[30px] !border-none !font-semibold">Contents</h1>
            <ul class="list-disc list-inside">
                ${h1Texts.map((text: string) => `<li>${text}</li>`).join('')}
                ${h2Texts.map((text: string) => `<li class="ml-4">${text}</li>`).join('')}
            </ul>
        </div>
    `;
    
    return { h1Texts, h2Texts, contentsHtml };
}

export default function RichText({ content }: { content: any }) {
    const { contentsHtml } = useMemo(() => CheckForHeadings(content), [content]);

    console.log(contentsHtml);
    console.log(content);

    return (
        <div className='flex flex-col gap-1'>
            <div
                className='custom-prose break-words text-sm font-medium break-all'
                dangerouslySetInnerHTML={{ __html: contentsHtml }}
            />
            <div
                className='custom-prose break-words text-sm font-medium break-all'
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}
