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
        fontFamily: 'Courier, monospace'
    }}
    >
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
                <h1 style={{fontSize: '40px', marginBottom: '0px', textAlign: 'center',}}>Hanbit Kang's Portfolio</h1>
                <br/>
                <h2 style={{}}>Introduction</h2>
                <p style={{ marginBottom: '0px'}}> Hello! My name is Hanbit Kang and I graduated from Texas A&M University in May 2023 with a B.S. degree in Computer Science. 
                I am currently working at Samsung E&C America Inc. as a Document Controller (QS) in Taylor, Texas. </p>
                <br/>
                <div style={{width: '50%', alignSelf: 'center', marginTop: '20px'}}>
                    <NavLink to='/events' style={{height: '5%'}}>
                        View website progress in the 'Events' section.
                    </NavLink>
                </div>
                <br/>
            </div>
            <img style={{ aspectRatio: 3/4, maxWidth: '80%', maxHeight: '80%', float: 'left', margin: '20px' }} src={profile_picture} alt="profile_picture" />
        </div>
        <div style={{position: 'relative', bottom: '0', left: '0', width: '100%', textAlign: 'center', padding: '10px'}}>
            <p>
                Please submit any feedbacks about my website in the 'Feedbacks' section. Anything will be very appriciated!
            </p>
            <div style={{fontSize: '10px'}}>
                <b>First Published: June 26, 2023</b>
                <br/>
                <b>Most Recent Update: September 3, 2023</b>
            </div>
        </div>
    </div>
);
};

export default Home;
