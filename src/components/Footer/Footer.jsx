import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from '../../assets/payments.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium magni, nam eius cum quibusdam quaerat saepe ab dolore quidem consequuntur, aliquam non beatae facere? Laudantium aliquid qui dolore deserunt velit?</div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">Chandigarh, India</div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0797 391 0034</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: abhishek.aggarwal836@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theaters</span>
                    <span className="text">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms and Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">Made with &#10084;&#65039; by Abhishek Aggarwal</span>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
