import React from 'react';

const BannerItem = ({slide}) => {
    const {id, image, prev, next} = slide;
    return (
        <div id={`slide${id}`}className="carousel-item relative w-full">
        <div className='rounded-xl bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-300'>
            <img alt="" src={image} className="rounded-xl  object-cover mix-blend-overlay" />
        </div>
        <div className="absolute transform -translate-y-1/2 left-32 top-1/2">
            <p className="text-6xl text-white font-bold">Affordable <br /> Price For Car <br /> Servicing</p>
            <p className="text-white text-xl mt-12">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            <div className="mt-12">
                <button className="btn btn-accent mr-5">Discover More</button>
                <button className="btn btn-outline btn-accent">Latest Project</button>
            </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
            <a href={`#slide${prev}`} className="btn btn-outline btn-accent text-bold bg-slate-800 btn-circle mr-5">❮</a>
            <a href={`#slide${next}`} className="btn btn-outline btn-accent text-bold bg-slate-800 btn-circle">❯</a>
        </div>
    </div>
    );
};

export default BannerItem;