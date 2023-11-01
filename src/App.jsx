import React from 'react'
import "./App.css"

import image1 from './Images/CW2.png'
import image2 from './Images/CW1.png'
import arrow from './Images/arrow.png'
import hyperlin from './Images/hyperlin.jpg'
import joseph from './Images/joseph.jpg'
import ntl from './Images/ntl.jpg'
import pod from './Images/pod.jpg'
import Rocket from './Images/Rocket.png'
import skills from './Images/skills.png'
import course from './Images/course.png'
import smaller from './Images/smaller.png'

const App = () => {
  return (
    <div>
      <div className="large-device">
      <div className="section-1">
        <div className="section-width">
        <div className="image-1">
       <img src={image1} alt="logo"/>
        </div>
        <div className="section-1-content">
           <div className="hug-content">
            <img className='arrow' src={arrow} alt="arrow-logo" />
            <p className='ace'>Ace Our Single Shot Challenge !</p>
            <p className='jump-start'>Jumpstart Your Career with Our Free Assessment Test: Prove,<br></br>
              Your Skills and Secure an Internship Today!,</p>
              <div className="button-width">
              <button className='button-1'><p>Take A Free Assesment</p></button>
              </div>
             </div>
          

        </div>
        <div className="image-1">
          <img src={image2} alt="logo"/>
       
      </div>
    </div>
    </div>
    <div className='smaller-device'>
        <div className="s-section-1">
          <div className="content-width">
          <div className="s-image-section">
            <img src={smaller} alt="smaller-image" />
          </div>
          <div className="s-content1">
          <div className="hug-content1">
              <img className='arrow1' src={arrow} alt="arrow-logo" />
              <p className='ace1'>Ace Our Single Shot Challenge !</p>
              <p className='jump-start1'>Jumpstart Your Career with Our Free Assessment Test: Prove,<br></br>
                Your Skills and Secure an Internship Today!,</p>
                <button className='button-11'><p>Take a test</p></button></div>
            
          </div>


        </div>
        </div>
      </div>
    <div className="section-2">
      <div className="section-2-width">
        <div className="see">
        See where our students are interning
        </div>
        <div className="image-content">
          <img className='hyper' src={hyperlin} alt="hyper-logo" />
          
          <img src={ntl} className='ntl' alt="ntl-logo" />
          <img className='pod'src={pod} alt="pod-logo" />
          <img src={joseph} className='joseph' alt="joseph-logo" />
         
        
        </div>

      </div>
      </div>
     
      <div className="section-3">
        <div className="content-box">
          <div className="content-top-box">
          <div className="content-header">Content: </div>
          <div className="hr">12 lessons• 2hr 3min •</div>
          <ul className="list">
           <li><span className='number'>1</span>
           <p>Introductory Session (Live class) </p>
           <span className='time'>
           2hr 3min •
           </span>
           </li>
           <li>
           <span className='number'>2</span>
           <p>Getting into the Fundamentals</p>
           <span className='time'>
           2hr 3min •
           </span>
           </li>
           <li>
           <span className='number'>3</span>
           <p>Know your niche</p> 
           <span className='time'>
           2hr 3min •
           </span>
           </li>
           <li>
           <span className='number'>4</span>
           <p>The Crux of Search Engine Optimization (SEO) What is SEO?</p>
           <span className='time'>
           2hr 3min •
           </span>
           </li>
           <li>
           <span className='number'>5</span>
           <p>The Key to Keywords</p>
           <span className='time'>
           2hr 3min •
           </span>
           </li>
           <li>
           <span className='number'>6</span>
           <p>TContent Marketing - Ensuring the Reach</p>
           <span className='time'>
           2hr 3min •
           </span>
           </li>
          </ul>
          <div className='button-view'>
          <button className="view">View All</button>
          </div>
          
        </div>
        </div>
        <div className="section-4">
          <div className="career">
            <img className='rocket' src={Rocket} alt="rocket" />
            <div className="career-heading">career opportunities :</div>
            <div className="career-list">
              
                <li>Life Time Access</li>
                <li>Life Time Access</li>
                <li>Life Time Access</li>
              
            </div>
          </div>

          <div className="skills">
            <img className='skills-logo' src={skills} alt="skills" />
            <div className="career-heading">Skills You Will Learn :</div>
            <div className="career-list">
              
                <li>Content Designing </li>
                <li>Content Adaptation</li>
                <li>Content Writing as a Career </li>
                <li>SEO: Understanding search engine optimization (SEO)</li>
              
            </div>
          </div>

          <div className="course">
            <img className='skills-logo' src={course} alt="skills" />
            <div className="career-heading">Course Includes :</div>
            <div className="career-list">
              
                <li>Life time access
                </li>
                <li>Certificate of completion</li>
               
              
            </div>
          </div>

          <div className="last-section">
            <div className="rupees">
              <p className='thousand'>₹1000</p>
              <p className='offer'>₹2000 50% offf</p>
            </div>
            <div className="last-button"><button>Buy now</button></div>
          </div>
        </div>
      </div>

      </div>
      
    </div>
  )
}

export default App