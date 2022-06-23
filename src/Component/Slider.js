import React from 'react';
import './Style/slider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Slider = () => {
    return (
        <div className='slider_container'>
           <div className="container">
           <div className="row d-flex align-item-center">
                <div className="col">
                    <Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay={true} centerMode={false}>
                        <div className='item'>
                            <h1><span className='tag_line'>Sale 20% Off</span>  <br /> On Everything</h1>
                            <p>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae
                                earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                            <button className='btn btn-danger'>Shop Now</button>
                        </div>
                        <div className='item'>
                            <h1><span className='tag_line'>Sale 20% Off</span>  <br /> On Everything</h1>
                            <p>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae
                                earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                            <button className='btn btn-danger'>Shop Now</button>
                        </div>
                        <div className='item'>
                            <h1><span className='tag_line'>Sale 20% Off</span>  <br /> On Everything</h1>
                            <p>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae
                                earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                            <button className='btn btn-danger'>Shop Now</button>
                        </div>
                    </Carousel>
                </div>
                <div className="col">

                </div>
            </div>
           </div>
        </div>
    );
};

export default Slider;