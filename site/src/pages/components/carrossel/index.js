import './index.scss'

import  Carousel  from  "react-multi-carousel" ; 
import  "react-multi-carousel/lib/styles.css" ; 

//<div><img src='/images/destaque1.png' alt='dest' /></div>
//<div><img src='/images/destaque2.png' alt='dest' /></div>
//<div><img src='/images/destaque4.png' alt='dest' /></div>
//<div><img src='/images/destaque5.png' alt='dest' /></div>
//<div><img src='/images/destaque6.png' alt='dest' /></div>
//<div><img src='/images/destaque7.png' alt='dest' /></div>
//<div><img src='/images/destaque8.png' alt='dest' /></div>
//<div><img src='/images/destaque9.png' alt='dest' /></div>



export default function Carrossel() {
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
    };

    return (
        <section className='carrosel-destaques'>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    //showDots={true}
                    //customTransition="all .5"
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                    //dotListClass="custom-dot-list-style"
                    //itemClass="carousel-item-padding-40-px"
                    >

                    <div><img className='sasuke' src='/images/amizade.jpg' alt='dest' /></div>
                    <div><img src='/images/amizade.jpg' alt='dest' /></div>
                    <div><img src='/images/amizade.jpg' alt='dest' /></div>
                    <div><img src='/images/amizade.jpg' alt='dest' /></div>
                    <div><img src='/images/amizade.jpg' alt='dest' /></div>
                    <div><img src='/images/amizade.jpg' alt='dest' /></div>
                    <div><img src='/images/amizade.jpg' alt='dest' /></div>
                    
                </Carousel>
        </section>
    )
}
