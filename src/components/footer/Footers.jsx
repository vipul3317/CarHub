import './Footer.css';  // Keep the CSS import
import { IoCall } from "react-icons/io5";
import { RiWhatsappLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <>
      {/* Notification Bar */}
      <div className="notification flex space-x-20 text-lg text-gray-800 justify-center bg-white mb-10">
        <span className="flex items-center space-x-2 ad_design_wrapper text-center">
          <a href="tel:+917256095121" target="Contact for service" rel="noopener noreferrer">
            <IoCall style={{ color: 'green' }} />
          </a>
          <span>Call Now</span>
        </span>

        <span className="flex items-center space-x-2">
          <a href="https://wa.me/7256095121" target="Whatsapp Number" rel="noopener noreferrer">
            <RiWhatsappLine style={{ color: 'green' }} />
          </a>
          <span>WhatsApp</span>
        </span>

        <span className="flex items-center space-x-2">
          <a href="mailto:hrithik3317@gmail.com" target="Email" rel="noopener noreferrer">
            <MdOutlineMail style={{ color: 'green' }} />
          </a>
          <span>Email</span>
        </span>
      </div>

      {/* Footer Main Section */}
      <div className='Footer-parent container bg-green-400 flex flex-col justify-center w-full relative'>
        {/* Promo Banner */}
        <div className="w-full flex flex-col items-center bg-pink-500">
          <div className="outer bg-black p-3 text-white flex justify-center items-center absolute">
            <span className='text-2xl'>
              UNBEATABLE CAR SERVICING PRICES.
              <a href="/get-quote" className="Lineone text-white ml-2 underline-offset-5">Get a free quote</a>
            </span>
          </div>
        </div>

        {/* Brands Section */}
        <div className='footer-below max-h-fit'>
          <div className="brandname bg-red-150 w-96 h-32 flex justify-center items-center relative z-10">
            <h3 className="text-white text-2xl ml-5">Brands We Serve</h3>
          </div>
          <hr className='brandNameLine' />

          {/* Car Brands List */}
          <div className='carnamesdetails flex flex-row mr-3 w-full h-full text-left'>
            {/* Group 1 */}
            <div className="car-list h-full">
              <ul className="">
                <li><a href="#" className="text-white">Acura</a></li>
                <li><a href="#" className="text-white">Alfa Romeo</a></li>
                <li><a href="#" className="text-white">Audi</a></li>
                <li><a href="#" className="text-white">BMW</a></li>
                <li><a href="#" className="text-white">Buick</a></li>
                <li><a href="#" className="text-white">Cadillac</a></li>
                <li><a href="#" className="text-white">Chevrolet</a></li>
                <li><a href="#" className="text-white">Chrysler</a></li>
                <li><a href="#" className="text-white">Dodge</a></li>
                <li><a href="#" className="text-white">Ford</a></li>
                <li><a href="#" className="text-white">Genesis</a></li>
                <li><a href="#" className="text-white">GMC</a></li>
                <li><a href="#" className="text-white">Honda</a></li>
              </ul>
            </div>

            {/* Group 2 */}
            <div className="car-list">
              <ul className="">
                <li><a href="#" className="text-white">Hyundai</a></li>
                <li><a href="#" className="text-white">Infiniti</a></li>
                <li><a href="#" className="text-white">Jaguar</a></li>
                <li><a href="#" className="text-white">Jeep</a></li>
                <li><a href="#" className="text-white">Kia</a></li>
                <li><a href="#" className="text-white">Lamborghini</a></li>
                <li><a href="#" className="text-white">Land Rover</a></li>
                <li><a href="#" className="text-white">Lexus</a></li>
                <li><a href="#" className="text-white">Lincoln</a></li>
                <li><a href="#" className="text-white">Mazda</a></li>
                <li><a href="#" className="text-white">McLaren</a></li>
                <li><a href="#" className="text-white">Mercedes-Benz</a></li>
                <li><a href="#" className="text-white">Mini</a></li>
              </ul>
            </div>

            {/* Group 3 */}
            <div className="car-list">
              <ul className="">
                <li><a href="#" className="text-white">Mitsubishi</a></li>
                <li><a href="#" className="text-white">Nissan</a></li>
                <li><a href="#" className="text-white">Porsche</a></li>
                <li><a href="#" className="text-white">Ram</a></li>
                <li><a href="#" className="text-white">Range Rover</a></li>
                <li><a href="#" className="text-white">Rolls-Royce</a></li>
                <li><a href="#" className="text-white">Saab</a></li>
                <li><a href="#" className="text-white">Subaru</a></li>
                <li><a href="#" className="text-white">Tesla</a></li>
                <li><a href="#" className="text-white">Toyota</a></li>
                <li><a href="#" className="text-white">Volkswagen</a></li>
                <li><a href="#" className="text-white">Volvo</a></li>
              </ul>
            </div>

            {/* Group 4 */}
            <div className="car-list">
              <ul className="pb-40">
                <li><a href="#" className="text-white">Aston Martin</a></li>
                <li><a href="#" className="text-white">Bentley</a></li>
                <li><a href="#" className="text-white">Bugatti</a></li>
                <li><a href="#" className="text-white">Citroën</a></li>
                <li><a href="#" className="text-white">Daewoo</a></li>
                <li><a href="#" className="text-white">Daihatsu</a></li>
                <li><a href="#" className="text-white">Ferrari</a></li>
                <li><a href="#" className="text-white">Fiat</a></li>
                <li><a href="#" className="text-white">Geely</a></li>
                <li><a href="#" className="text-white">Hummer</a></li>
                <li><a href="#" className="text-white">Isuzu</a></li>
                <li><a href="#" className="text-white">Koenigsegg</a></li>
              </ul>
            </div>

            {/* Group 5 */}
            <div className="car-list">
              <ul className="">
                <li><a href="#" className="text-white">Lancia</a></li>
                <li><a href="#" className="text-white">Lotus</a></li>
                <li><a href="#" className="text-white">Maserati</a></li>
                <li><a href="#" className="text-white">Maybach</a></li>
                <li><a href="#" className="text-white">MG</a></li>
                <li><a href="#" className="text-white">Opel</a></li>
                <li><a href="#" className="text-white">Pagani</a></li>
                <li><a href="#" className="text-white">Peugeot</a></li>
                <li><a href="#" className="text-white">Pontiac</a></li>
                <li><a href="#" className="text-white">Proton</a></li>
                <li><a href="#" className="text-white">Renault</a></li>
                <li><a href="#" className="text-white">Scion</a></li>
              </ul>
            </div>

            {/* Group 6 */}
            <div className="car-list">
              <ul className="">
                <li><a href="#" className="text-white">Seat</a></li>
                <li><a href="#" className="text-white">Škoda</a></li>
                <li><a href="#" className="text-white">Smart</a></li>
                <li><a href="#" className="text-white">SsangYong</a></li>
                <li><a href="#" className="text-white">Suzuki</a></li>
                <li><a href="#" className="text-white">Tata</a></li>
                <li><a href="#" className="text-white">Trabant</a></li>
                <li><a href="#" className="text-white">Triumph</a></li>
                <li><a href="#" className="text-white">TVR</a></li>
                <li><a href="#" className="text-white">Vauxhall</a></li>
                <li><a href="#" className="text-white">Wiesmann</a></li>
                <li><a href="#" className="text-white">Yugo</a></li>
              </ul>
            </div>
          </div>

          {/* Business Details */}
          <div className='footer-child-group flex gap-56'>
            <div className='footer-child-one'>
              <div className='text-black text-start ml-1'>
                <h3 className='pl-12'>Buisness Details</h3>
                <hr className="second-line" />
                <div className="ml-9">


                  <a
                    href="https://www.google.com/maps/dir//CAR+HUB+:+Multi+brand+Car+Service+Center+in+Patna,+Kanti+Factory+Rd,+near+PNB,+New+Colony,+Kankarbagh,+Kumhrar,+Patna,+Bihar+800020/@25.6070436,85.1241652,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39ed59ec466af1a1:0x3148e418a2b3e593!2m2!1d85.1696688!2d25.5990988?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
                    className="no-underline flex"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <FaLocationDot style={{ color: 'red', margin: '10px', marginBottom: '-20px', marginLeft: '6px', marginRight: '1px' }} />
                    <span className="ml-2 text-white">PLOT-1# Kanti Factory Road Near PNB<br /> Kankarbagh Patna Bihar-20</span>
                  </a>


                  <a
                    href="https://www.google.com/maps/dir//BOSCH+Authorized+Car+Service+Center-+Carhub,+Naya+Tola,+near+Patna,+Daud+Bigha,+Sadar+BLOCK,+Kumhrar,+Patna,+Bihar+800026/@25.6003289,85.1765085,17.84z/data=!4m16!1m7!3m6!1s0x39ed5964fae1c253:0x691ed0544c6f27e9!2sBOSCH+Authorized+Car+Service+Center-+Carhub!8m2!3d25.6001896!4d85.1783446!16s%2Fg%2F11wv03xlry!4m7!1m0!1m5!1m1!1s0x39ed5964fae1c253:0x691ed0544c6f27e9!2m2!1d85.1783446!2d25.6001896?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
                    className="no-underline flex pt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <FaLocationDot style={{ color: 'red', margin: '10px', marginBottom: '-20px', marginLeft: '6px', marginRight: '1px' }} />
                    <span className="ml-2 text-white">PLOT-2# Naya Tola, Sadar BLOCK, Kumhrar,<br /> Patna, Bihar 800026</span>
                  </a>


                  <div className='buttons flex flex-col relative mt-3 ml-2'>
                    <a href="tel:+917256095121" className="btn btn-warning text-white w-24" role="button">Call</a>
                    <button type="button" className="btn btn-danger btn-lg mt-2 w-48">Dial-Booking</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='footer-child-two'>
              <div className='text-black '>
                <h3>Quick Links</h3>
                <hr className="third-line" />
                <ul className="footer-quick-links text-left ">
                  <li><a href="#" className="text-white">Home</a></li>
                  <li><a href="#" className="text-white">Working</a></li>
                  <li><a href="#" className="text-white">Service</a></li>
                  <li><a href="#" className="text-white">Brands</a></li>
                  <li><a href="#" className="text-white">Contact</a></li>
                  <li><a href="https://ap.boschcarservice.com/in/en/" className="text-white">Bosch Service</a></li>
                  <li><a href="https://g.co/kgs/kWxxbmA" className="text-white">Car Hub Service</a></li>
                  <li><a href="#" className="text-white">Terms & Condition</a></li>
                </ul>
              </div>
            </div>
          </div >

          <hr className="four-line " />
          <div className='footer-last-child bg-amber'>
            <p className='rights-reserved '>© 2019-2025 Car Hub Patna. All Rights Reserved.</p>
            {/* <div className='social-media-icons'> */}
            <a href="https://www.instagram.com" className="your-class-name  justify-center " target="_blank" rel="noopener noreferrer"><InstagramIcon style={{ color: 'red' }} /></a>
            <a href="https://www.facebook.com" className="your-class-name" target="_blank" rel="noopener noreferrer"><FacebookIcon style={{ color: 'blue' }} /></a>


            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
