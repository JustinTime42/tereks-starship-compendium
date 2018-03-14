import React from 'react';

const Footer = () => {
    return (
        <footer style={{clear: 'both'}} class="footer">
            <div class="container">
                <div class="row">
                    <nav class="footer-nav">
                        <ul>
                            <li><a href="https://www.creative-tim.com" target="_blank">Creative Tim</a></li>
                            <li><a href="https://blog.creative-tim.com" target="_blank">Blog</a></li>
                            <li><a href="https://www.creative-tim.com/license" target="_blank">Licenses</a></li>
                        </ul>
                    </nav>
                    <div class="credits ml-auto">
                        <span class="copyright" >
                            © <script>document.write(new Date().getFullYear())</script>, made with <i class="fa fa-heart heart"></i> by <a href="https://www.creative-tim.com" target="_blank"> Creative Tim </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;