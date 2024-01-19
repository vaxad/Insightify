"use client"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imageArray = [
    { name: 'Some Title', filepath: 'https://images.pexels.com/photos/19518788/pexels-photo-19518788/free-photo-of-buddha-figur.jpeg', caption: 'Some long ass caption for the image' },
    { name: 'Some Title', filepath: 'https://images.pexels.com/photos/2206609/pexels-photo-2206609.jpeg', caption: 'Some long ass caption for the image' },
    { name: 'Some Title', filepath: 'https://images.pexels.com/photos/2289484/pexels-photo-2289484.jpeg', caption: 'Some long ass caption for the image' },
    { name: 'Some Title', filepath: 'https://images.pexels.com/photos/18111144/pexels-photo-18111144/free-photo-of-equipment-of-a-painter.jpeg', caption: 'Some long ass caption for the image' },
    { name: 'Some Title', filepath: 'https://images.pexels.com/photos/16133655/pexels-photo-16133655/free-photo-of-woman-painting-hills.jpeg', caption: 'Some long ass caption for the image' },
    { name: 'Some Title', filepath: 'https://images.pexels.com/photos/7291913/pexels-photo-7291913.jpeg', caption: 'Some long ass caption for the image' },
    { name: 'Some Title', filepath: 'https://images.pexels.com/photos/19518788/pexels-photo-19518788/free-photo-of-buddha-figur.jpeg', caption: 'Some long ass caption for the image' },
    { name: 'Some Title', filepath: 'https://images.pexels.com/photos/18148613/pexels-photo-18148613/free-photo-of-horses-running-in-a-shadow.jpeg', caption: 'Some long ass caption for the image' },
    { name: 'Some Title', filepath: 'https://images.pexels.com/photos/2206609/pexels-photo-2206609.jpeg', caption: 'Some long ass caption for the image' },
    { name: 'Some Title', filepath: 'https://images.pexels.com/photos/18111144/pexels-photo-18111144/free-photo-of-equipment-of-a-painter.jpeg', caption: 'Some long ass caption for the image' },
    { name: 'Some Title', filepath: 'https://images.pexels.com/photos/7291913/pexels-photo-7291913.jpeg', caption: 'Some long ass caption for the image' },
    { name: 'Some Title', filepath: 'https://images.pexels.com/photos/19518788/pexels-photo-19518788/free-photo-of-buddha-figur.jpeg', caption: 'Some long ass caption for the image' },
    { name: 'Some Title', filepath: 'https://images.pexels.com/photos/16133655/pexels-photo-16133655/free-photo-of-woman-painting-hills.jpeg', caption: 'Some long ass caption for the image' },
    { name: 'Some Title', filepath: 'https://images.pexels.com/photos/18111144/pexels-photo-18111144/free-photo-of-equipment-of-a-painter.jpeg', caption: 'Some long ass caption for the image' },
    { name: 'Some Title', filepath: 'https://images.pexels.com/photos/2206609/pexels-photo-2206609.jpeg', caption: 'Some long ass caption for the image' },
];

const Card = ({ item }) => {
    const imagePath = item.filepath;
    return (
        <div className='w-full h-[30vh] lg:h-[50vh] relative flex justify-center items-center md:h-[30vh]'>
            <img className='w-full h-full -z-0 absolute ' src={imagePath} alt={item.name} style={{ filter: "blur(2px)", WebkitFilter: "blur(2px)" }} />
            <img className='w-full z-10 ' src={imagePath} alt={item.name} />
            <div className={`w-full h-full flex justify-center items-end absolute z-30 bg-slate-950 bg-opacity-80 opacity-0 hover:opacity-100 transition-all`}>
                <div className={`w-full h-full flex flex-col justify-center items-center transition-all translate-y-[50px] hover:translate-y-0 `}>
                    <h1 className='text-white text-xl md:text-3xl font-bold text-center'>{item.name}</h1>
                    <h2 className='text-white text-sm md:text-xl font-medium text-center'>{item.caption}</h2>
                </div>
            </div>
        </div>
    );
};

const SliderSwiper = () => {
    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const sliderSettingsSm = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='p-5 md:p-8 flex flex-col gap-8 h-full w-full justify-between'>
            <Slider className=" hidden md:block rounded-lg overflow-hidden " {...sliderSettings}>
                {imageArray.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            item={item}
                        />
                    );
                })}
            </Slider>
            <Slider className=" md:hidden block rounded-lg overflow-hidden" {...sliderSettingsSm}>
                {imageArray.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            item={item}
                        />
                    );
                })}
            </Slider>
        </div>
    );
};

export default SliderSwiper;
