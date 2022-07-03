import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="page-footer red lighten-4">
                <div className="footer-copyright">
                    <div className="container">
                        @{new Date().getFullYear()} Copyright Text
                        <a href="#!" className="grey-text text-lighten-4 right">Repo</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;