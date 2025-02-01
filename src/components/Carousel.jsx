"use client"; // Fix Next.js SSR issue
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
import Button from "react-bootstrap/Button";

function MyCustomCarousel() {
    return (
        <Carousel className='mx-5 px-5'>
            <Carousel.Item interval={1000}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '80vh', padding: '20px', textAlign: 'center' }}>
                    <div style={{ flex: 1 }}>
                        <h2>All our top programs include Generative AI Components</h2>
                        <hr style={{ width: '50%', borderTop: '4px solid #00AEEF', margin: '10px auto' }} />
                        <h3>Be a leader in your field</h3>
                        <h3>Change, Adapt and Build with AI</h3>
                        <Button variant="warning" style={{ marginTop: '20px', padding: '10px 20px' }}>Explore Programs</Button>
                    </div>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src="/Images/banner_revamp_01.avif" alt="Icon 1" width={300} height={300} />
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '80vh', padding: '20px', textAlign: 'center' }}>
                    <div style={{ flex: 1 }}>
                        <h2>Empower Your Learning with AI</h2>
                        <hr style={{ width: '50%', borderTop: '4px solid #00AEEF', margin: '10px auto' }} />
                        <h3>Enhance Your Skills with Cutting-Edge Technology</h3>
                        <Button variant="warning" style={{ marginTop: '20px', padding: '10px 20px' }}>Learn More</Button>
                    </div>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src="/Images/banner_revamp_02.avif" alt="Icon 2" width={300} height={300} />
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '80vh', padding: '20px', textAlign: 'center' }}>
                    <div style={{ flex: 1 }}>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repudiandae.</h2>
                        <hr style={{ width: '50%', borderTop: '4px solid #00AEEF', margin: '10px auto' }} />
                        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                        <Button variant="warning" style={{ marginTop: '20px', padding: '10px 20px' }}>Learn More</Button>
                    </div>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src="/Images/banner_revamp_03.avif" alt="Icon 2" width={300} height={300} />
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default MyCustomCarousel;