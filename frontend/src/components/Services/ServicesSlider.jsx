import Slider from 'react-slick';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + ` block !bg-quaternary border-2 !border-quaternary rounded-full`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + ` block !bg-quaternary border-2 !border-quaternary rounded-full`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

export default function ServicesSlider({ services }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    if (!services) return;

    return (
        <Slider {...settings}>
            {services && services.map((service) => {
                return (
                    <div key={service.id} className='my-5 px-2 md:px-5 text-center'>
                        <div className='flex flex-col justify-center h-20 lg:py-6 rounded-t-2xl bg-quaternary'>
                            <h3 className='align-middle text-secondary font-semibold md:text-xl'>{service.name}</h3>
                        </div>
                        <div className='bg-secondary rounded-b-2xl'>
                            <p className='px-2 md:px-6 py-6 text-sm md:text-base xl:text-lg leading-relaxed'>
                                {service.description}
                            </p>
                        </div>
                    </div>
                )
            })}

        </Slider>
    );
}
