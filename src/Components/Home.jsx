import React from 'react'
import "./Home.css"
import Testimonials from './Testimonials/Testimonials'
import Navbar from './Navbar'

const Home = () => {
    return (
        <>
        <Navbar/>
        <div className='Home'>
            <div className='box-1'>
                <div className='heading-1'>
                    Platform for creators to showcase
                </div>

                <div className='heading-2 underlined'>
                    Digital products

                    
                </div>



                <div className='heading-3'>
                    <p>Create your Wall to recommend & share APPS, COURSES, E-BOOKS, GAMES, PODCASTS AND MUCH MORE!​</p>
                </div>

                <div className='btn'>
                    <button class="button-74" role="button">Build your Wall</button>
                </div>

                <div className='hero-img'>
                    <div className='hero-img1'>
                        <img src="https://s3-alpha-sig.figma.com/img/b636/b97b/96f20bd86bbea141d83ed6814ffd24f4?Expires=1691971200&Signature=btuJCl69oqn-ShUd4HGGXu3Dc-AUUhYWK5N5ORcWFLl6MzsSvDv86jwCPfUsVsdcTXjM7Lnp~f~Wz25v8YPFrmmjpfSN6uVTNNeMaU9kGVoLtpx-YmoWqabrbQBGHR0lquIzOkHhgS0aYex-mt9s~m061MCXWqfvfo1g3-ZDNLW5npW6Lbk03got6yox8aTnpeC3XLjxIQfDkW5RYMphlPr3BFzT7UhjZkcxRgqnyrG1zDXL50kmGLDNrdV60-HPqevzKOJElr1ymhAAGgsp49Fvfn7PA9dbZORDpiuQVlv~0PaPsyADoG4PyNVmui7OzlC9S~tFfmw5x7B8pH0pvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    </div>
                    <div className='hero-img2'>
                    <img src="https://s3-alpha-sig.figma.com/img/5d0b/bcb8/9135e48c1ad06abe48b2896229436fe1?Expires=1691971200&Signature=jbZuFsZ7Kai-N~3PvLaMPJeVhjCBnyuehIsu1y7qKzdyC4sZk~vNzFq1bBogdLuHn9er8S5r1nkV87nisR1FnI8ectSgOSC1eMYSUhsq2it3o3VxKVjt2dV6~T9cHDizu2iCWe8y-NFbWp~QHXQanNHE~cHJbXqachwwHRFw8bVRUqmqDKsjaYKxxhJf2vmyWgKXCdEZk0Ryxo~x0SZQc3M0EjmghPIhWL-zkN~JXweWQVmi4X7iYVpxDEbtBMNklHnYmSBWrQ3FpLB09ZT-y2tqqTbViGDeiffRamJLZ~ejS4D8ncBb2qw7gUzzkKfXHCcPOgNBZwwVqGopBypGtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    </div>
                    <div className='hero-img3'>
                    <img src="https://s3-alpha-sig.figma.com/img/d8d9/2c1e/6092b837ea43d25b99227c2a0ceefc64?Expires=1691971200&Signature=QItmGauilzrI4VJ8k6lmMNeiXIoDajzkDgZ8B0qBuTqOpSDPYTsybzZEC9DpygyKamqtx5xiZvfshSjbkukxyZriHAdIiFXyEIH3FThtSb6yP0JFbQjW6ykqV-BAc-edXxNKpomDGV68wRtOpVCKJurNCXeeA~tA5Ke0ZTstyslAnCKJIk24c5WPU~49aH7Q~Crq3edT~T-Dug66otZPg6zkJ9ZEHgBWvwQhAarz11yxkqHwEKZCh9Dc-b6VD0KonEm2qfgg6Q8Wv4VQY7TkWUGXjcuF3uUaHL0oupTj-0ISp5UfRUj49vGrQPqx456qvgzxSkJHRi8n3xFctZO5Hw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    </div>
                    <div className='hero-img4'>
                    <img src="https://s3-alpha-sig.figma.com/img/2fd1/b894/32821cc58e0316acca170073ae934115?Expires=1691971200&Signature=VKFwws6G7S2XHswrIC47ql4N6zqELtNJn-C7OTFX3F9oo4i5s4jyECvZo~tSzJHE-RQz9cnH4fGyh5U0fMe~yfE3abOTSSju8hbj4ITIFQGYhHSVv~pUqnZRxvMjKxFX9NlPn8S2iGzBT-HFqv8KEQj-o~F6XQowbJRahfoCZCZqoFWDRpxThG25dHlTWnHSpnWW3HzZ-5dLhm1T1JQvkZG2B1~4-KoIwYbtMekKXkg2MIWV1rV52z3Ac7Spe5fpGYL2z6JNgLPvaNSz8fOLbv40re9z1o5NPBIXnOWkKiRkNAAEXiPSv8F5VnUtHN-LE73gu2J04FZiOgtYWHUbzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    </div>
                </div>
            </div>

            <div className='box-2'>
                <img className="vector" alt="Vector" src="https://generation-sessions.s3.amazonaws.com/02ff601bbf202bcac15493f151c72198/img/vector.svg" />
            </div>
        </div>
        <Testimonials/>
        </>
    )
}

export default Home