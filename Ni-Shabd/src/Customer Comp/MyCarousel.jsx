import * as React from "react";
import farmer from '../assets/farmer.jpg';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Customer Comp/ui/carousel";

const MyCarousel = () => {
    const imageUrls = [
        farmer,
        "https://via.placeholder.com/1920x1080?text=Image+2",
        "https://via.placeholder.com/1920x1080?text=Image+3",
        "https://via.placeholder.com/1920x1080?text=Image+4",
        "https://via.placeholder.com/1920x1080?text=Image+5",
    ];

    return (
        <div className=" flex items-center justify-center">
            <div className="w-[70%] mt-10 overflow-hidden ">
                <Carousel className="w-full h-full flex items-center justify-center">
                    <CarouselContent className="w-full h-full">
                        {imageUrls.map((url, index) => (
                            <CarouselItem key={index} className="w-full h-full flex items-center justify-center">
                                <div className="w-full h-[200px]">
                                    <img
                                        src={url}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full" />
                    <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full" />
                </Carousel>
            </div>
        </div>
    );
};

export default MyCarousel;
