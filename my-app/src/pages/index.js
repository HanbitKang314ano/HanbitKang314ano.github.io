import React, {useEffect} from 'react';
import profile_picture from '../images/intro_pic.jpg';
/*
import {
    NavLink,
} from '../components/Navbar/NavbarElements';
*/

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
        color: 'white',
        marginLeft: '50px' 
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
                    justifyContent: 'center',
                    height: '100vh',
                    fontFamily: 'Courier, monospace',
                    color: 'white'
                }}
                >
                <h1 style={{fontSize: '60px', marginBottom: '0px',}}>Hello, I'm Hanbit Kang</h1>
                <br/>
                <h1 style={{ fontSize: '20px', marginBottom: '0px'}}> Degree: B.S. in Computer Science at Texas A&M University </h1>
                <h1 style={{ fontSize: '20px', marginBottom: '0px'}}> Quantity Surveyor at Samsung E&C America Inc. in Taylor, Texas </h1>
                <br/>
            </div>
            <img style={{ aspectRatio: 3/4, maxWidth: '70%', maxHeight: '80%', float: 'right', margin: '50px' }} src={profile_picture} alt="profile_picture" />
        </div>
    </div>
);
};

export default Home;
