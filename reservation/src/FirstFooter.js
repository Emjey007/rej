import './FirstFooter.css';

const FirstFooter = () => {
    return ( 
        <footer className="footer">
            <div className="footer-links-left">
                <div className='contacts'>
                    <p>Contacts</p>
                </div>
                <ul className="footer-contacts-links">
                    <li><a href="#">Address</a></li>
                    <li><a href="#">Contact Number</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </div>
            <div className="footer-title">
                <h1>iReserba</h1>
                </div>
            <div className="footer-links-right">
                <div className='footer-right-left-links'>
                    <ul className="footer-links-no1">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Facilities</a></li>
                    </ul>
                </div>
                <div className='footer-right-right-links'>
                    <ul className="footer-links-no2">
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}
 
export default FirstFooter;
