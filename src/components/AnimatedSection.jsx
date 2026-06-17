import { useEffect, useRef } from "react";

const AnimatedSection = ({ children, className="" }) => {

const ref = useRef(null);


useEffect(()=>{

const observer = new IntersectionObserver(
([entry])=>{

entry.target.classList.toggle(
"visible",
entry.isIntersecting
);

},
{
threshold:0.2
}

);


if(ref.current)
observer.observe(ref.current);


return ()=>observer.disconnect();


},[]);



return (

<div
ref={ref}
className={`reveal ${className}`}
>

{children}

</div>

);

};


export default AnimatedSection;