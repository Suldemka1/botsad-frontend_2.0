import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {useCallback} from "react";
import Link from "next/link";
import MyCarousel from "../MyCarousel/MyCarousel";

export default function NewsCarousel(params, sliderLinks) {

    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="flex xs:flex-col md:flex-row justify-between">

            <div className="xs:w-full md:w-4/5">
                <MyCarousel content={params.content}/>
            </div>

            {/*<div className="flex xs:flex-row md:flex-col justify-between xs:w-full md:w-1/5 min-w-40 min-h-40">*/}

            {/*    {*/}
            {/*        sliderLinks.map((item) => {*/}
            {/*            return (*/}
            {/*                <Link href={item.url} key={item.id} className="min-w-60 min-h-60 cursor-pointer">*/}
            {/*                    <Image*/}
            {/*                        src={`${process.env.APIpath}${item.images.url}`}*/}
            {/*                        alt="First slide"*/}
            {/*                        width={200}*/}
            {/*                        height={200}*/}
            {/*                        // layout={"responsive"}*/}
            {/*                        // objectFit={"contain"}*/}
            {/*                        className="min-w-40 min-h-40 dark:grayscale cursor-pointer"*/}
            {/*                    />*/}
            {/*                </Link>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    )
}


{/*<div className="overflow-hidden" ref={emblaRef}>*/
}
{/*    <div className="flex">*/
}
{/*        {*/
}
{/*            params.map((item) =>*/
}

{/*                <div key={item.id} className="flex-[0_0_100%]">*/
}
{/*                    <Image*/
}
{/*                        src={`${process.env.APIpath}${item.image.url}`}*/
}
{/*                        alt="First slide"*/
}
{/*                        width={960}*/
}
{/*                        height={720}*/
}
{/*                        layout="responsive"*/
}
{/*                        objectFit='cover'*/
}
{/*                        priority*/
}
{/*                        className='dark:grayscale'*/
}
{/*                    />*/
}
{/*                </div>*/
}
{/*            )*/
}
{/*        }*/
}
{/*    </div>*/
}
{/*</div>*/
}