import React from 'react';
import './videoAboutMe.scss'

const VideoAboutMe = () => {
    return (
        <div className={'video-block'}>
            <div className={'video-content'}>
                <h2>Как я работаю</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad amet beatae dolorem eius fugit maiores necessitatibus nisi nulla officiis omnis, pariatur quae quasi qui, quidem sapiente similique soluta.</span>
                <iframe
                    className={'iframe-video'}
                    name={'Video about me'}
                    src={'https://www.youtube.com/embed/bmVKaAV_7-A'}
                    width={'90%'}
                    height={'100%%'}
                />
            </div>
        </div>
    );
};

export default VideoAboutMe;