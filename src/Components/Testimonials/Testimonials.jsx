import React from 'react'
import "./Testimonials.css"
import { Icon } from '@iconify/react';

const Testimonials = () => {
    return (
        <div className='box'>
            <div className='testi'>
                <h1>Testimonials</h1>
            </div>

            <div className='testi-grid'>
                <div>
                    <div className='margin'>
                    <div id='d-1'>
                        <div>
                            <p>100%</p>
                        </div>
                    </div>

                    <div id='text'>
                            <p>
                                of influencers reported a boost in their links.
                            </p>
                        </div>
                    </div>
                </div>

                <div id='d-2'>
                    <div className='margin'>
                        <div id='icon'>
                            <Icon icon="fe:quote-left" />
                        </div>

                        <div id='text'>
                            <p>
                                Whether it's my latest YouTube videos, course links, or social media profiles, brings it all
                                together in one place, allowing my audience a seamless browsing experience.
                            </p>
                        </div>
                    </div>
                </div>

                <div id='d-3-grid'>
                    <div className='margin'>
                        <div id='d-3'>
                            <div id='icon'>
                                <Icon icon="fe:quote-left" />
                            </div>

                            <div id='text-2'>
                                <p>customizable features allow me to showcase my work in an enticing manner. No more boring links in bio lists!</p>
                            </div>
                        </div>

                        <div className='img-3'>
                            <div id='d-3-img'>
                                <img src="https://www.figma.com/file/5rK9EzajabBsYYsmVWBs5q/image/2fd1b89432821cc58e0316acca170073ae934115" alt="" />
                            </div>

                            <div>
                                <p className='username'>Amit Singh</p>
                                <p className='userLastname'>Tech Creator</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div>
                    <div id='icon'>
                        <Icon icon="fe:quote-left" />
                    </div>
                </div> */}

                <div id='d-2'>
                    <div className='margin'>
                        <div id='icon'>
                            <Icon icon="fe:quote-left" />
                        </div>

                        <div id='text'>
                            <p>
                                My Wall truly feels like an extension of my personal brand with so many link options to add. The statistics provided by add valuable insights into my audience's preferences, enabling me to deliver exactly what they crave.
                            </p>
                        </div>

                        <div className='img'>
                            <div id='d-3-img'>
                                <img src="https://www.figma.com/file/5rK9EzajabBsYYsmVWBs5q/image/b1043132d5dd579fd6572a87cc0caaf29ef77932" alt="" />
                            </div>

                            <div>
                                <p className='username'>Vidhi Kumar</p>
                                <p className='userLastname'>Lifestyle Creator</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div>
                    <div id='icon'>
                        <Icon icon="fe:quote-left" />
                    </div>
                </div> */}

                <div id='d-2'>
                    <div className='margin'>
                        <div id='icon'>
                            <Icon icon="fe:quote-left" />
                        </div>

                        <div id='text'>
                            <p>
                                My Wall truly feels like an extension of my personal brand with so many link options to add. The statistics provided by add valuable insights into my audience's preferences, enabling me to deliver exactly what they crave.
                            </p>
                        </div>

                        <div className='img'>
                            <div id='d-3-img'>
                                <img src="https://www.figma.com/file/5rK9EzajabBsYYsmVWBs5q/image/b1043132d5dd579fd6572a87cc0caaf29ef77932" alt="" />
                            </div>

                            <div>
                                <p className='username'>Shalini Verma</p>
                                <p className='userLastname'>Lifestyle Creator</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div>
                    <div id='icon'>
                        <Icon icon="fe:quote-left" />
                    </div>
                </div> */}

                <div id='d-2'>
                    <div className='margin-1'>
                        <div id='grid'>

                            <div id='grid-1'>
                                <div id='icon'>
                                    <Icon icon="fe:quote-left" />
                                </div>

                                <div id='text'>
                                    <p>
                                        Whether it's my latest YouTube videos, course links, or social media profiles, brings it all
                                        together in one place, allowing my audience a seamless browsing experience.
                                    </p>
                                </div>

                                <div className='img-1'>
                                    <div id='d-3-img'>
                                        <img src="https://s3-alpha-sig.figma.com/img/fc5c/2045/9b8b1c0c6c9ed509a4b00d349a0096d4?Expires=1691971200&Signature=Id~zAZOXif9rcbD8UX6uJA2o-5MZudX3-hIiFDqytWyI44I05mSaG76PmnGOOZ-nGjVVzvFTi8dJtL~gc9S-bA8lF-9VE35XEaeoEBlytOTzgqgsquMIIBKFVb7vyGvRW28tmGK6N9HywrHNrJ1rPyKmtzLWaax75ACdyKR0lhT0BtcEATKUDXm31a3K1h3M~gMA0q~2k6KfeqxVdjqqFzDWwvTm6ojaEwtMfgZXP3aULTettCB2LEd0U1uNduaZ7gI40N49eA5b8IbMqXYwBV5tDXhaJYvsOHfa1O~gl7X81SeuFzKmKgbWQKqm74QEYsVnc-JLfPoJ890WbHswTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                                    </div>

                                    <div >
                                        <p className='username'>Vikash Singh</p>
                                        <p className='userLastname'>Beauty Creator</p>
                                    </div>
                                </div>
                            </div>

                            <div id='grid-img'>
                                <img src="https://s3-alpha-sig.figma.com/img/0a7e/f285/a155c06898c7af4bea8c0c0a011d3bd1?Expires=1691971200&Signature=Kycg0iLjj1cqsjbszqtEVorCpIkw5pY6MvjJExC~WZHTM-D2BRNzsBax~Gk4hIpgt8G17aUSG2uGFX7zvnsCQ-4BbSlmjjMzTMDL4uVV8zY0uyCbZIOC9YGbcbBlcF3Mb4s8a4mW66MwNvXQZMh0DTVzU4yNE9UdAHwWZwpO~DxX0YVCauAWpOH0yyKIr~V~ln~6SUGkfivzg4Tt1wQu-OUGn1Vjj62Mm0JBy6F-ns-3xQ23MqSQUtbL1JVFvYaxlNlBCu4Do4yEhuIRzMGmBXkGK5XaI~XhspdfDLNiR9lVNbeHoiF6hsrpMhzxIlVIhJP~HbZW00-7CcdSf8TlkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                            </div>

                        </div>
                    </div>
                </div>

                {/* <div></div> */}
            </div>
        </div>
    )
}

export default Testimonials