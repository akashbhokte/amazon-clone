import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {

    return (
        <div className='home'>
            <img
                className='home_image'
                src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/ComicstaanwithPDstyle/3000x1200_Hero-Tall_NP._CB633299139_.jpg'
                alt=''
            />
            <div className='home_row'>
                <Product
                    id="1"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                    price={512.00}
                    rating={3}
                    image='https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg'
                />
                <Product
                    id="2"
                    title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
                    price={292.00}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SX330_BO1,204,203,200_.jpg'
                />

            </div>
            <div className='home_row'>
                <Product
                    id="3"
                    title="boAt Rockerz 255 with Upto 8 Hours Playback, Secure Fit, IPX5, Magnetic Earbuds, and Voice Assistant v5.0 Bluetooth Wireless in Ear Earphones with Mic (Active Black)"
                    price={1299.00}
                    rating={3}
                    image='https://m.media-amazon.com/images/I/51Re0QcVSDL._SX522_.jpg'
                />
                <Product
                    id="4"
                    title="OnePlus Nord 2T 5G (Gray Shadow, 12GB Storage, 256GB Storage)"
                    price={33990.00}
                    rating={5}
                    image='https://images-eu.ssl-images-amazon.com/images/I/41qLZhKF5ZL._SX300_SY300_QL70_FMwebp_.jpg'
                />
                <Product
                    id="5"
                    title="MSI Katana GF66 11UC - 477IN 15.6 inches FHD Gaming Laptop I Notebook Black - Intel Core i7-11800H I 8GB (3200MHz) I 512GB I RTX 3050, GDDR6 4GB I Windows 10 Home I Single Backlight KB(Red), 2.25kg"
                    price={82990.00}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/51WHrgD-jQL._SX679_.jpg'
                />

            </div>
            <div className='home_row'>
                <Product
                    id="6"
                    title="AmazonBasics 127 cm (50 inches) 4K Ultra HD Smart LED Fire TV AB50U20PS (Black)"
                    price={29990.00}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/81GXpJ36t0L._SX522_.jpg'
                />

            </div>

        </div>
    )
}

export default Home