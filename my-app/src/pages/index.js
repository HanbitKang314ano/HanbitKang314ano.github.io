import React, {useEffect} from 'react';
import profile_picture from '../images/intro_pic.jpg';
import {
    NavLink,
  } from '../components/Navbar/NavbarElements';

const Home = () => {
    useEffect(() => {
        document.title = "Hanbit's Portfolio";
    }, []);
return (
    <div
    style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'Left',
        alignItems: 'Left',
        height: '100vh',
        fontFamily: 'Courier, monospace',
        color: 'white'
    }}
    >
        <div
        style={{
            display: 'flex',
            justifyContent: 'Left',
            alignItems: 'Left',
            height: '100vh',
            fontFamily: 'Courier, monospace',
            color: 'white'
        }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'Left',
                    alignItems: 'Left',
                    height: '100vh',
                    fontFamily: 'Courier, monospace',
                    color: 'white'
                }}
                >
                <h1 style={{fontSize: '70px', marginBottom: '0px',}}>Hello, I'm Hanbit Kang</h1>
                <br/>
                <h1 style={{ fontSize: '25px', marginBottom: '0px'}}> B.S. in Computer Science at Texas A&M University </h1>
                <h1 style={{ fontSize: '25px', marginBottom: '0px'}}> Quantity Surveyor at Samsung E&C America Inc. in Taylor, Texas. </h1>
                <br/>
            </div>
            <img style={{ aspectRatio: 3/4, maxWidth: '90%', maxHeight: '80%', float: 'right', margin: '50px' }} src={profile_picture} alt="profile_picture" />
        </div>
        <div style={{position: 'relative', bottom: '0', left: '0', width: '100%', textAlign: 'center', padding: '10px'}}>
            <p>
                Please submit any feedbacks about my website in the 'Feedbacks' section. Anything will be very appriciated!
            </p>
            <div style={{fontSize: '10px'}}>
                <b>First Published: June 26, 2023</b>
                <br/>
                <b>Most Recent Update: March 16, 2024</b>
            </div>
        </div>
    </div>
);
};

export default Home;
