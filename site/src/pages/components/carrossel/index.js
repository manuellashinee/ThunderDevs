import './index.scss'
import FilmeC from '../filmesc';
import  Carousel  from  "react-multi-carousel" ; 
import  "react-multi-carousel/lib/styles.css" ; 

export default function Carrossel(props) {
    
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
                    //autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    //showDots={true}
                    //customTransition="all .5"
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                    //dotListClass="custom-dot-list-style"
                    //itemClass="carousel-item-padding-40-px"
                    >

                
                    <div><img className='sasuke' src={props.imagem} alt='dest' /></div>
                    <div><img className='sasuke' src='/images/amizade.jpg' alt='dest' /></div>
                    <div><img className='sasuke' src='/images/amizade.jpg' alt='dest' /></div>
                    <div><img className='sasuke' src='/images/amizade.jpg' alt='dest' /></div>
                    <div><img className='sasuke' src='/images/amizade.jpg' alt='dest' /></div>
                    <div><img className='sasuke' src='/images/amizade.jpg' alt='dest' /></div>
                </Carousel>
        </section>
    )
}
