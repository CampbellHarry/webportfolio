import BlogTitle from "./title";
import RichText from "./richtext";
import Tags from "./tags";
import Location from "./location";
import Image from "./image";
import NumberRater from "./number";
import DateTime from "./dateTime";
import React from "react";

export default function Gatherer(blogs: any, setHeadings: void) {
    return (
        <div key={blogs?.blogs?.data?.merged?.id}>
            {blogs?.blogs?.data?.merged
                ?.sort((a: any, b: any) => a.fieldposition - b.fieldposition)
                ?.map((item: any, index: number) => {
                    switch (item.type) {
                        case "Title":
                            return (
                                <BlogTitle
                                    data={item}
                                    wholedata={blogs?.blogs?.data?.merged}
                                    author={blogs?.blogs?.author}
                                    filedata={blogs?.blogs?.data?.fileget}
                                />
                            );
                        case "Rich text":
                            return <RichText key={index} content={item.value} />;
                        case "Tags":
                            return <Tags key={index} tags={item.value} />;
                        case "Short Text":
                            return <p key={index}>{item.value}</p>;
                        case "Location":
                            return <Location key={index} location={item.value} />;
                        case "Media":
                            return <Image key={index} image={item.value} />;
                        case "Number":
                            return <NumberRater key={index} number={item.value} type={item.fieldappearance} />;
                        case "Date and Time":
                            return <DateTime key={index} date={item.value} />;

                        default:
                            return null;
                    }
                })}
        </div>
    );
}