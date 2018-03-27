import React from 'react';

const Footer = () => {
    return (
        <footer style={{clear: 'both'}} className="footer grid-footer">
            <div className="container">
                <div className="row">
                    <nav className="footer-nav">
                        <ul>
                            <li><a href="https://www.creative-tim.com" target="_blank">Creative Tim</a></li>
                            <li><a href="https://blog.creative-tim.com" target="_blank">Blog</a></li>
                            <li><a href="https://www.creative-tim.com/license" target="_blank">Licenses</a></li>
                        </ul>
                    </nav>
                    <div className="credits ml-auto">
                        <span className="copyright" >
                            © 2018, made by <a href="Justin Schneider" target="_blank"> Justin Schneider </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;