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
            <h1 style={{fontSize: '40px', marginBottom: '0px'}}>Welcome to Hanbit Kang's Portfolio!</h1>
            <br/>
            <b style={{fontSize: '12px', margin: '0px', marginBottom: '50px'}}> *** I have recently started developing 
            this website so please be on the lookout for more changes in the near future! ***</b>
            <br/>
            <h2 style={{ textDecorationLine: 'underline', marginBottom: '0px'}}> Who Am I? </h2>
            <p>
                Hello! My name is Hanbit Kang and I graduated from Texas A&M University in 2023 with a B.S. degree in Computer Science.
            </p>
            <p>
                I would like to welcome you to my portfolio where I can show off my projects and works. Although this website is still 
                in development, all the new updates and things I will implement will be in the 'Events' section.
            </p>
            <p>
                Also, submit any feedbacks about my website in the 'Feedbacks' section. Anything will be very appriciated! :)
            </p>
            <div style={{position: 'absolute', bottom: 0, left: 0}}>
                <b>First Published: June 26, 2023</b>
                <br/>
                <b>Most Recent Update: July 14, 2023</b>
            </div>
        </div>
        <img style={{ aspectRatio: 3/4, maxWidth: '80%', maxHeight: '80%', float: 'left', margin: '20px' }} src={profile_picture} alt="profile_picture" />
    </div>
);
};

export default Home;
