import '../components-styles/footer.scss';
import React from 'react';

const footer = (props) => {
    return (
        <footer className={'footer-' + props.footerClass}>
            <p>Made with ♥ by <a href="https://www.linkedin.com/in/osama-hanoun/">Osama Hanoun</a> </p>
        </footer>
    )
};

export default footer;