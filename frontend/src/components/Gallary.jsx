import React from 'react'

const Gallary = () => {
    return (
        <div className="flex flex-col self-center px-9 py-12 bg-white w-full">
            <div className="container">
                <div className="gallery">
                    <div className="gallery__item gallery__item--hor">
                        <img src="https://source.unsplash.com/random/500x500" alt=""/>
                    </div>
                    <div className="gallery__item">
                        <img src="https://source.unsplash.com/collection/190727/300x300" alt=""/>
                    </div>
                    <div className="gallery__item">
                        <img src="https://source.unsplash.com/user/erondu/600x600" alt=""/>
                    </div>
                    <div className="gallery__item gallery__item--vert">
                        <img src="https://source.unsplash.com/user/timmarshall/300x300" alt=""/>
                    </div>
                    <div className="gallery__item gallery__item--lg">
                        <img src="https://source.unsplash.com/user/randomlies/300x300" alt=""/>
                    </div>
                    <div className="gallery__item">
                        <img src="https://source.unsplash.com/user/joannecaselynsuarez/300x300" alt=""/>
                    </div>
                    <div className="gallery__item">
                        <img src="https://source.unsplash.com/user/liamsimpson/600x600" alt=""/>
                    </div>
                    <div className="gallery__item">
                        <img src="https://source.unsplash.com/user/stephanvancephoto/300x300" alt=""/>
                    </div>
                    <div className="gallery__item">
                        <img src="https://source.unsplash.com/user/beataratuszniak/300x300" alt=""/>
                    </div>
                    <div className="gallery__item">
                        <img src="https://source.unsplash.com/user/tonill/300x300" alt=""/>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Gallary
