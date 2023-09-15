import './Footer.css'

function Footer() {
    return(
        <div className="footer">
            <div className="socialMedia">
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
            <div className="terms">
                <p> Condition of Use</p>
                <p> Privacy and Policy</p>
                <p>Press Room</p>
            </div>
            <div className="copyright">
                <p> &copy; {new Date().getFullYear()} MovieBox By Philip Udofia</p>
            </div>
        </div>
    )
}

export default Footer;
