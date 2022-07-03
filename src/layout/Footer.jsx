import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="page-footer red lighten-4">
                <div className="footer-copyright">
                    <div className="container">
                        @{new Date().getFullYear()} Copyright Text
                        <a href="https://bboygevorg.github.io/react-shop" className="grey-text text-lighten-4 right" rel="noreferrer" target="_blank">Repo</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;