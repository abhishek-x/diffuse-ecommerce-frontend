import "./Banner.scss";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>NEW IN</h1>
                    {/* <p>
                    Fall-Winter 22/23 must-haves for a foolproof look. Go for women’s T-shirts, jeans, dresses, sweatshirts or ankle.
                    </p> */}
                    <div className="cta">
                        <div className="banner-cta v2">Shop Now</div>
                        <div className="banner-cta">Read More</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
