import React from "react";
import './footer.styles.css';

export const Footer = () => (
    <div className="container footer-container">
        <div>Copyright &copy;2021.</div>
        <div className="text-right">
            Built with <span className="red">&hearts;</span> by
            <a href="https://animepahe.com" target="_blank" rel="noreferrer">
                React Documentation
            </a>
        </div>
    </div>
);