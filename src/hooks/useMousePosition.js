import {useEffect, useState} from 'react'

const useMousePosition = () =>{
    //Setup state to track x and y position (useState)
    //Setup event to listen for mouse movement
    //Remove event listener if unmounted (useEffect)
    const [position, setposition] = useState({x:0, y:0});
    const mouseMoveHandler = (e) =>{
      setposition({
        x: e.pageX,
        y:e.pageY
      });
    };
  
    useEffect(()=>{
        document.addEventListener('mousemove',mouseMoveHandler);
        return ()=>{
          document.removeEventListener('mousemove', mouseMoveHandler);
        };
      }, []);
  
    return position;
};

export default useMousePosition;