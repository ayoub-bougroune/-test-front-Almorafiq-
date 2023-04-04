import React from 'react';
import flower from '../../assets/flower.png';
import umbrella from '../../assets/umbrella.png';
import clock  from '../../assets/clock.png';
import lightbulb  from '../../assets/lightbulb.png';
import earth  from '../../assets/earth.png';
import write  from '../../assets/write.png';



import './styles.css';

export type IContentProps = {
    
}

const Content: React.FC<IContentProps> = ({ }) => {
    return (
        <>
        <section className="content">
            <div className="title">
                <label className="text-1">Our Valued services</label>
                <label className="text-2">What We Offer</label>
            </div>
            <div className="box-container">
                <div className="box">
                    <img src={flower} alt='' className='img'/>
                    <h3>Unlimited Features</h3>
                    <p>Keep away from people who try to belittle your ambitions.Small people always do that but the really great</p>
                </div>
                <div className="box">
                    <img src={umbrella} alt='' className='img'/>
                    <h3>Creative Design</h3>
                    <p>Keep away from people who try to belittle your ambitions.Small people always do that but the really great</p>
                </div>
                <div className="box">
                    <img src={clock} alt='' className='img'/>
                    <h3>Responsive Design</h3>
                    <p>Keep away from people who try to belittle your ambitions.Small people always do that but the really great</p>
                </div>
                <div className="box">
                    <img src={lightbulb} alt='' className='img'/>
                    <h3>Responsive Design</h3>
                    <p>Keep away from people who try to belittle your ambitions.Small people always do that but the really great</p>
                </div>
                <div className="box">
                    <img src={earth} alt='' className='img'/>
                    <h3>Responsive Design</h3>
                    <p>Keep away from people who try to belittle your ambitions.Small people always do that but the really great</p>
                </div>
                 <div className="box">
                    <img src={write} alt='' className='img'/>
                    <h3>Responsive Design</h3>
                    <p>Keep away from people who try to belittle your ambitions.Small people always do that but the really great</p>
                </div>
            </div>
        </section>
          <div className="footer">
                <label className="text-1">Unleash Your creative potential with BizOne</label>
                <label className="text-2">Looking For Exclusive Digital services?</label>
                <button className="btn-footer">Let's Talk</button> 
            </div>
        </>
    );
}

export { Content };