import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollColorBox = () => {
  const boxRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;

    // User Condition 2: Animation with scrolling behaviour use a changing color image (from green to purple)
    // We simulate "image" with a colored div, or we could use an actual image with a tint filter. 
    // Given the requirement "changing color image", a div acting as a block is clearer for the color shift.

    gsap.fromTo(box,
      {
        backgroundColor: "#2ecc71", // Green
        rotationY: 0,
        scale: 0.8
      },
      {
        backgroundColor: "#9b59b6", // Purple
        rotationY: 360,
        scale: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // when top of container hits bottom of viewport
          end: "bottom top",   // when bottom of container hits top of viewport
          scrub: 1,            // smooth scrubbing
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} style={{
      height: '150vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '50px 0',
      perspective: '1000px' // for 3D rotation
    }}>
      <div
        ref={boxRef}
        className="scroll-color-box"
        style={{
          width: 'min(80vw, 400px)',
          height: 'min(80vw, 400px)',
          borderRadius: '12px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          // If we want it to be an "image", we can add a background image
          // But the color shift is easiest on background-color.
          // Let's overlay an image with blend mode if needed, but color shift is the key.
          backgroundImage: 'url(https://picsum.photos/id/237/500/500)',
          backgroundSize: 'cover',
          backgroundBlendMode: 'overlay' // allows background-color to tint the image
        }}
      />
      <p style={{ marginTop: '2rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '2px' }}>
        Scroll to animate (Green to Purple)
      </p>
    </div>
  );
};

export default ScrollColorBox;
