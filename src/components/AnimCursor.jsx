import React, { useLayoutEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';

function AnimCursor() {


  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={10}
        innerStyle={{
          border: '3px solid transparent',
          width: '8px',
          height: '8px',
          borderRadius: '0%',
        }}
        color="0, 255, 0"
        outerStyle={{
          border: '3px solid transparent',
          width: '5px',
          height: '5px',
          borderRadius: '0%',
        }}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={8}
        clickables={[
          'a',
           'button', 
           '.img-project-relative',
            '.flip-menu',
'span',
'.swiper-button-next',
'.swiper-button-prev',

        ]}
      />
    </div>
  );
}

export default AnimCursor;