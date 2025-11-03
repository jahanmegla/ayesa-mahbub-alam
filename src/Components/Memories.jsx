import React from 'react';
// If using local images, you would import them here like this:
// import yearOneImage from './assets/year-one.jpg';
// import yearTwoImage from './assets/year-two.png';
// ...and so on for all 7 images

// Define the data for the 7 images, now themed by year/milestone
const IMAGE_DATA = [
    { 
        id: 1, 
        text: "Year One", 
        // OPTION 1: Use a direct URL
        // imageUrl: "https://yourwebsite.com/images/anniversary/year-one.jpg" 
        // OPTION 2: Use a local image import (uncomment the import statement above too!)
        // imageUrl: yearOneImage 
        // For now, keeping placehold.co so it still works if you don't add your images immediately
        imageUrl: "https://i.postimg.cc/jdKSR4bc/Screenshot-20251103-212924-Whats-App.jpg"
    },
    { 
        id: 2, 
        text: "Year Two", 
        imageUrl: "https://i.postimg.cc/sgLzGptL/Screenshot-20251103-213011-Whats-App.jpg"
       
    },
    { 
        id: 3, 
        text: "Year Three", 
        imageUrl: "https://i.postimg.cc/hPyWNLPG/Screenshot-20251103-213033-Whats-App.jpg"

    },
    { 
        id: 4, 
        text: "Year Four", 
        // imageUrl: "https://yourwebsite.com/images/anniversary/year-four.jpg"
        imageUrl: "https://i.postimg.cc/SQnKZxGM/20250418-154307.jpg"
    },
    { 
        id: 5, 
        text: "Year Five", 
 imageUrl: "https://i.postimg.cc/XqB7XsJn/GKk-Fkgjgm-GYSUla-GXDCRl-ZHc-Kn-S.webp"
    },
    { 
        id: 6, 
        text: "Year Six", 
        imageUrl: "https://i.postimg.cc/L8Dqc0gv/GIJkmw-Vqkii-JDTsb-KBDwz-Mi-Sv0e.webp"
    },
    { 
        id: 7, 
        text: "Year Seven", 

        imageUrl: "https://i.postimg.cc/ZqJQR0R0/Screenshot-20251103-213101-Whats-App.jpg"
    },
];

/**
 * ImageCard Component: Renders a single image with responsive aspect ratio and hover effects.
 */
const ImageCard = ({ data }) => {
    const { id, imageUrl, text } = data; // Now directly using imageUrl from data
    const errorUrl = `https://placehold.co/600x450/cccccc/333333?text=Load+Error`;

    return (
        // image-container class enforces the 4:3 aspect ratio using padding-top
        <div className="image-container shadow-xl transition duration-300 hover:shadow-2xl">
            <img
                src={imageUrl} // Using the provided imageUrl
                alt={`Anniversary image for ${text}`}
                className="rounded-xl object-cover transform hover:scale-105 transition duration-500"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = errorUrl; }}
            />
        </div>
    );
};

/**
 * Memories Component: The main component for the responsive gallery.
 */
const Memories = () => {
    return (
        <>
            {/* Custom styles for the 4:3 aspect ratio trick and font */}
            <style jsx="true">{`
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #f7f7f7;
                }
                /* Enforce image height and prevent layout shift */
                .image-container {
                    width: 100%;
                    padding-top: 75%; /* 4:3 Aspect Ratio (3/4) */
                    position: relative;
                    overflow: hidden;
                }
                .image-container img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            `}</style>

            <div className="p-4 md:p-8 min-h-screen">
                <header className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-800 p-2 mb-2">
                        Happy Anniversary!
                    </h1>
                    
                    <p className="text-xl text-gray-700 font-semibold mb-4">
                        Seven wonderful years of beautiful memories, and a lifetime more to come!
                    </p>
                    
                    <p className="text-lg text-gray-500">
                        A collection of our favorite moments, adapting perfectly for every screen.
                    </p>
                </header>

                <main className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {IMAGE_DATA.map(image => (
                            <ImageCard key={image.id} data={image} />
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
};

export default Memories;