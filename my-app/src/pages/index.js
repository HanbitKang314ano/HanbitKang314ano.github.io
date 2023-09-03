import React, {useEffect} from 'react';
import profile_picture from '../images/intro_pic.jpg';

const Home = () => {
    useEffect(() => {
        document.title = "Hanbit's Portfolio";
    }, []);
return (
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
            <h1 style={{fontSize: '40px', marginBottom: '0px'}}>Hanbit Kang's Portfolio!</h1>
            <br/>
            <h2 style={{ marginBottom: '0px'}}> Hello! My name is Hanbit Kang and I graduated from Texas A&M University in 2023 with a B.S. degree in Computer Science. I am currently working at Samsung E&C America Inc. as a Document Controller (QS). </h2>
            <br/>
            <p style={{ width: '50%'}}>
                I would like to welcome you to my portfolio where I can show off my projects and works. Although this website is still 
                in development, all the new updates and things I will implement will be in the 'Events' section.
            </p>
            <br/>
            <div style={{position: 'absolute', bottom: 0, left: 0}}>
                <p>
                    Please submit any feedbacks about my website in the 'Feedbacks' section. Anything will be very appriciated!
                </p>
                <b>First Published: June 26, 2023</b>
                <br/>
                <b>Most Recent Update: September 3, 2023</b>
            </div>
        </div>
        <img style={{ aspectRatio: 3/4, maxWidth: '80%', maxHeight: '80%', float: 'left', margin: '20px' }} src={profile_picture} alt="profile_picture" />
    </div>
);
};

export default Home;
