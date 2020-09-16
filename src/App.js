import React, { useRef } from 'react';
import useWebAnimation from '@wellyshen/use-web-animations'
import './App.css'
import tree1 from './images/tree1.png'
import grass from './images/grass.png'
import sky from './images/sky.png'
import cloud3 from './images/cloud3.png'


function App() {
  let styles = {
    runStyle:{
      width: "100%",
      color: "white",
      display: "flex",
      alignItems: "center",
      position: "absolute",
      top: "65%",
      left: "10%",
      zIndex: 1,
    },
    skyStyle:{
      position: "absolute",
    },
  
    cloudsStyle:{  
      zIndex: 1
    },
  
    cloud3Style : {
      position: "absolute",
      left: "70%"
    },
    cloud3Style1: {
      position: "absolute",
      left: "10%"
    },
    cloud3Style2 : {
      position: "absolute",
      left: "40%"
    },
  
    treeStyle: {
      width: "100%",
      position: "absolute",
      top: "42%"
    },
  
    grassStyle: {
      position: "absolute",
      zIndex: 1,
      top: "88%",
    },
  
    wrapper: {
      width: "100%",
      height: "100%",
      margin: 0,
      padding: 0,
    },

    birdsStyle: {
      position: "absolute",
      width: "100%"
    },
    walkStyle: {
      position: "absolute",
      zIndex: 1,
      top: "72%",
      width: "100%",
    },
    childStyle: {
      position: "absolute",
      zIndex: 1,
      top: "71%",
      width: "100%"
    }
  }

  

  let runningRef = useRef(null)
  let cloudRef = useRef(null)
  let walkingRef = useRef(null)
  let childplayingRef = useRef(null)

  let childplayingAnimation = useWebAnimation({
    ref: childplayingRef,
    keyframes: [
      { transform: "translate(65%)" },
      { transform: "translate(-20%)" }
    ],
    timing: {
      duration: 25000,
      iterations: Infinity,
      easing: "linear",
    }
  })

  let walkingAnimation = useWebAnimation({
    ref: walkingRef,
    keyframes: [
      { transform: "translate(100%)" },
      { transform: "translate(-20%)" }
    ],
    timing: {
      duration: 32000,
      iterations: Infinity,
      easing: "linear",
    }
  }) 

  let cloudAnimation = useWebAnimation({
    ref: cloudRef,
    keyframes: [
      { transform: "translate(40%)" },
      { transform: "translate(-20%)" }
    ],
    timing: {
      duration: 50000,
      iterations: Infinity,
      easing: "linear",
    }
  })

  let runningAnimation = useWebAnimation({
    ref: runningRef,
    keyframes: [
      { transform: "translate(100%)",},
      { transform: "translate(-20%)",},
    ],
    timing: {
      duration: 25000,
      iterations: Infinity,
      easing: "linear",
    },
  })

  return (
    <div style={styles.wrapper}>
      <div style={styles.skyStyle}>
        <img src="https://www.animatedimages.org/data/media/230/animated-bird-image-0415.gif" style={styles.birdsStyle}/>
        <img src={sky} width="170%" height="900px"/>
      </div>
      <div style={styles.cloudsStyle} ref={cloudRef}>
        <img src={cloud3} width="300px" height="300px" style={styles.cloud3Style}/>
        <img src={cloud3} width="300px" height="400px" style={styles.cloud3Style1}/>
        <img src={cloud3} width="450px" height="300px" style={styles.cloud3Style2}/>
      </div>
      <div style={styles.grassStyle}>
        <img src={grass} width="100%" height="100px"/>
      </div>
      <div style={styles.treeStyle} ref={runningRef}>
        <img src={tree1} width="300px" height="400px" style={{ }}/>
      </div>
      <div style={styles.walkStyle} ref={walkingRef}>
        <img src="https://www.animatedimages.org/data/media/1635/animated-walking-image-0055.gif" width="60px" height="150px"/>
      </div>
      <div style={styles.childStyle} ref={childplayingRef}>
        <img src="https://www.animatedimages.org/data/media/545/animated-child-image-0220.gif" width="70px" height="170px"/>
      </div>

    <div style={styles.runStyle}>
      <a  href="https://www.animatedimages.org/cat-running-169.htm"><img src="https://www.animatedimages.org/data/media/169/animated-running-image-0008.gif" border="0" alt="animated-running-image-0008"  width="150px" height="250px"/></a>
    </div>
    </div>
  )}

export default App;
