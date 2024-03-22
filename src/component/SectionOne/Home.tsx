import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
import Image from 'next/image';
export const Home = () => {
    const [game, setGame] = useState([])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 3
    };
    const fetchData = async () => {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
            params: {
                tag: '3d.mmorpg.fantasy.pvp',
                platform: 'pc'
            },
            headers: {
                'X-RapidAPI-Key': '091ca4667cmsh2b6c1aa56138301p161c82jsn704b776789d2',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);

            console.log(response.data);
            setGame(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>

<div className="p-10 w-full lg:w-[100%] bg-black text-green-800 grid grid-cols-12 gap-2">
  <div className="col-span-12 lg:col-span-4 rounded p-5">
    <div className='flex flex-col'>
      <div>
        <h5>EXPLORE A NEW DIMENSION</h5>
        <h4 className='text-4xl text-white mb-10'>Ready to unlock your potentials in a world of fun?</h4>
        <button className='btn'>Get Started</button>
      </div>
    </div>
  </div>
  <div className="col-span-12 lg:col-span-8 rounded p-5 slider-container">
    {/* <div className=""> */}
    <Slider {...settings}>
      {game?.slice(0,6)?.map((item)=>(
        <div>
          <Image alt='image_thumbnail' src={item?.thumbnail} width={400} height={400}/>
        </div>
      ))}
    </Slider>
    {/* </div> */}
  </div>
</div>


        </>
    )
}
