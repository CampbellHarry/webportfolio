import React, { useMemo } from 'react';

export function CheckForHeadings(content: any) {
    const contenter = content?.content?.data?.merged?.filter((item: any) => item.type === 'Rich text')[0]?.value || content;
    const h1Matches = contenter ? contenter.match(/<h1>([\s\S]*?)<\/h1>/g) : null;
    const h2Matches = contenter ? contenter.match(/<h2>([\s\S]*?)<\/h2>/g) : null;
    
    const h1Texts = h1Matches ? h1Matches.map((h1: string) => h1.replace(/<\/?h1>/g, '').replace(/<br\s*\/?>/g, ' ').replace(/\s+/g, ' ').trim()) : [];
    const h2Texts = h2Matches ? h2Matches.map((h2: string) => h2.replace(/<\/?h2>/g, '').replace(/<br\s*\/?>/g, ' ').replace(/\s+/g, ' ').trim()) : [];
    const filteredH1Texts = h1Texts.filter((text: string) => text.trim() !== '');
    const filteredH2Texts = h2Texts.filter((text: string) => text.trim() !== '');

    const contentsHtml = `
        <div class='flex flex-col gap-1 border-b px-4 py-4 w-full h-full'>
            <h1 class="!mt-0 !pt-0 !text-[30px] !border-none !font-semibold">Contents</h1>
            <ul class="list-disc list-inside">
                ${filteredH1Texts.map((text: string) => `<li>${text}</li>`).join('')}
                ${filteredH2Texts.map((text: string) => `<li class="ml-4">${text}</li>`).join('')}
            </ul>
        </div>
    `;
    
    return { h1Texts, h2Texts, contentsHtml };
}

export default function RichText({ content }: { content: any }) {
    const { contentsHtml } = useMemo(() => CheckForHeadings(content), [content]);


    const contents = content
        .replace(
            /<h([1-6])>(.*?)<\/h\1>/gi,
            '<h$1 class="custom-heading">$2</h$1>'
        )
        .replace(/&nbsp;/g, ' ')

    return (
        <div className='flex flex-col gap-1'>
            <div
                className='custom-prose text-sm font-medium'
                dangerouslySetInnerHTML={{ __html: contentsHtml }}
                style={{ wordBreak: 'keep-all' }}
            />
            <div
                className='custom-prose w-full text-sm font-normal'
                dangerouslySetInnerHTML={{ __html: contents }}
                style={{ wordBreak: 'keep-all' }}
            />
        </div>
    );
}
