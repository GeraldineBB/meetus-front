import Typed from 'typed.js';
import React, { useEffect } from "react";


const TypedReactHooksSlogan = () => {

	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  useEffect(() => {
    const options = {
    	strings: [
        'Balade à vélo',
        'Concert',
        'Tournoi de pétanque'
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div className="wrap">

        <span ref={el} />

    </div>
  );
}

export default TypedReactHooksSlogan; 