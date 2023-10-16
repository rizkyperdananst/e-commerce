import { useState } from 'react';
import BgHero from '../assets/images/bg-hero.jpg'

const Home = () => {
    const {isOpen, setIsOpen } = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div>
      <header className="bg-slate-100 p-4">
        <nav className="flex flex-wrap justify-between">
            <a href="#">
                <h1>Logo</h1>
            </a>
            <div className='max-sm:block md:hidden max-xl:hidden' onClick={function(){alert("hello")}}>
                <span className='w-8 h-1 block my-1 bg-blue-600'></span>
                <span className='w-8 h-1 block my-1 bg-blue-600'></span>
                <span className='w-8 h-1 block my-1 bg-blue-600'></span>
            </div>
            <ul className="list-none flex flex-wrap flex-row gap-4 max-sm:hidden">
                <li><a href="#home">Home</a></li>
                <li><a href="#product">Product</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className='max-sm:hidden'>
                <button className='p-2 bg-blue-600 text-white rounded-md'>Login</button>
            </div>
        </nav>
        <nav className="nav-second flex flex-col bg-shadow rounded-md bg-white p-2">
            <ul className="list-none">
                <li><a href="#home">Home</a></li>
                <li><a href="#product">Product</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
      </header>
      <main>
        <section className="w-full grid grid-cols-2 gap-4 max-sm:grid-cols-1" id="home">
            <div className="w-full p-36 max-sm:p-5">
                <h1 className="text-4xl font-bold">Get Your Product Here</h1>
                <p className="mt-2 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="p-3 bg-blue-600 mt-2 text-white rounded-md">Get Started</button>
            </div>
            <div className="w-full flex justify-center items-center max-sm:hidden">
                <img src={BgHero} className="w-96 rounded-md shadow-md" alt="Bg Hero" />
            </div>
        </section>
        <section className="w-full grid grid-cols-4 p-3 bg-gray-200 gap-4 max-sm:grid-cols-1" id="product">
            <h4 className="col-span-full text-center text-3xl">Products</h4>
            <div className="w-full p-2 shadow-md">
                <img src={BgHero} className="w-96 rounded-md shadow-md" alt="" />
                <h5 className="mt-3 text-lg font-bold">Product Name</h5>
                <small className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</small>
                <h6 className="font-semibold">Price $100</h6>
                <button className='p-2 bg-blue-600 mt-2 text-white rounded-md'>Add To Cart</button>
            </div>
            <div className="w-full p-2 shadow-md">
                <img src={BgHero} className="w-96 rounded-md shadow-md" alt="" />
                <h5 className="mt-3 text-lg font-bold">Product Name</h5>
                <small className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</small>
                <h6 className="font-semibold">Price $100</h6>
                <button className='p-2 bg-blue-600 mt-2 text-white rounded-md'>Add To Cart</button>
            </div>
            <div className="w-full p-2 shadow-md">
                <img src={BgHero} className="w-96 rounded-md shadow-md" alt="" />
                <h5 className="mt-3 text-lg font-bold">Product Name</h5>
                <small className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</small>
                <h6 className="font-semibold">Price $100</h6>
                <button className='p-2 bg-blue-600 mt-2 text-white rounded-md'>Add To Cart</button>
            </div>
            <div className="w-full p-2 shadow-md">
                <img src={BgHero} className="w-96 rounded-md shadow-md" alt="" />
                <h5 className="mt-3 text-lg font-bold">Product Name</h5>
                <small className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</small>
                <h6 className="font-semibold">Price $100</h6>
                <button className='p-2 bg-blue-600 mt-2 text-white rounded-md'>Add To Cart</button>
            </div>
        </section>
        <section className='w-full grid grid-cols-2 gap-4 mt-7 max-sm:grid-cols-1' id="about">
            <h4 className='col-span-full text-center text-3xl'>About</h4>
            <div className='flex justify-center items-center max-sm:hidden'>
                <img src={BgHero} className="w-96 rounded-md shadow-md" alt="" />
            </div>
            <div className='p-4'>
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="mt-2 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="p-3 bg-blue-600 mt-2 text-white rounded-md">Get Started</button>
            </div>
        </section>
        <section className='w-full grid grid-cols-2 gap-4 mt-7 max-sm:grid-cols-1' id="contact">
            <h4 className='col-span-full text-center text-3xl'>Contact</h4>
            <div className='w-full max-sm:hidden'>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.1467648830085!2d98.68892847392632!3d3.553631550535277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031306f0c08bfaf%3A0xa2cd1d5d2602f3f8!2sGg.%20Mas%2C%20Kota%20Medan%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1697468725913!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
            <div className='p-4'>
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="mt-2 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <form>
                    <input type="text" placeholder="Name" className="p-2 border rounded-md block w-full mb-3" />
                    <input type="email" placeholder='Email' className='p-2 border rounded-md block w-full mb-3' />
                    <textarea placeholder="Message" cols="30" rows="10" className='p-2 border rounded-md block w-full'></textarea>
                </form>               
            </div>
        </section>
      </main>
      <footer className='w-full grid grid-cols-3 gap-4 p-4 bg-indigo-900 max-sm:grid-cols-1'>
        <div className='flex justify-center items-center'>
            <img src={BgHero} className='w-96 rounded-xl' alt="" />
        </div>
        <ul className="list-disc p-5 text-white">
            <li>Medan Indonesia</li>
            <li>Jln Sakti Lubis Gg Mas</li>
            <li><a href="tel:+6281262842469">+6281262842469</a></li>
            <li><a href="mailto:riskiperdana345@gmail.com">riskiperdana345@gmail.com</a></li>
            <li><a href="https://github.com/riskiperdananst">github.com/riskiperdananst</a></li>
        </ul>
        <ul className="list-none p-5 text-white">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <p className="p-2 text-center text-white col-span-full">
            Copyright &copy; 2022 Rizky Perdana Nst
        </p>
      </footer>
    </div>
  );
};

export default Home;