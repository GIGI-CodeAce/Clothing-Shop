import React, { useEffect, useState } from 'react';
import './cloth.template.css';

export function TemplateHeader(props) {
    const headerStyle = {
        background: `url(${props.img}) repeat center`,
        backgroundColor: 'hsla(350, 100%, 80%, 0.5)',
        backgroundSize: 'cover'
    }
    return (
        <div className='categoryHeader' style={headerStyle}>
            <h1 id='productName'>{props.name}</h1>
        </div>
    );
}

export function Template(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function ManageSize() {
        return windowWidth >= 650 ? '100%' : '150%';
    }

    let imgStyle = {
        background: `url(${props.img1}) no-repeat center center`, 
        backgroundSize: '15em',
        backgroundColor: 'hsla(350, 100%, 80%, 0.5)'
    };
    
    let imgStyle2 = {
        background: `url(${props.img2}) no-repeat center center`, 
        backgroundColor: 'hsla(350, 100%, 88%, 0.5)',
        backgroundSize: ManageSize()
    };

    return (
        <main>
            <div className="categoryProduct">
            <div style={imgStyle} className='Product'>
                    <h1 id='productName'>{props.name}</h1>
                </div>
                <div className='Product' style={imgStyle2}>
                    <h1 id='productName'>{props.name}</h1>
                </div>
                <div className='Product' style={imgStyle}>
                    <h1 id='productName'>{props.name}</h1>
                </div>
            </div>
        </main>
    );
}