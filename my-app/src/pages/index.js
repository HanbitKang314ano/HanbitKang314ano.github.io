import React from 'react';
import profile_picture from '../images/intro_pic.jpg';

const Home = () => {
return (
    <div>
        <div
        style={{
            display: 'flex',
            justifyContent: 'Left',
            alignItems: 'Left',
            height: '100vh',
            fontFamily: 'Courier, monospace'
        }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'Left',
                    alignItems: 'Left',
                    height: '100vh',
                    fontFamily: 'Courier, monospace'
                }}
                >
                <h1>Welcome to Hanbit Kang's Portfolio!</h1>
                <p>
                    Hello! My name is Hanbit Kang and I graduated from Texas A&M University in 2023 with a B.S. degree in Computer Science.
                </p>
                <p>
                    I would like to welcome you to my portfolio where I can show off my projects and works. Although this website is still 
                    in development, all the new updates and things I will implement will be in the 'Events' section.
                </p>
                <p>
                    Also, any feedback about my website will be very appriciated!
                </p>
            </div>
            <img style={{ width: '800px', height: 'auto', float: 'left', margin: '20px' }} src={profile_picture} alt="profile_picture" />
        </div>
    </div>
);
};

export default Home;
