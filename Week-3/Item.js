export default function ({name, quantity, catagory})  {
    return(
        <li className ="flex justify-between items-center p-4 bg-white">
         <h2 className = "font-serif text-lg">{name}</h2>
         
          <p>
            <span className= "text-black">{catagory}</span>
          </p>
          
         <span className= "text-black">{quantity}</span>
        </li>

    );
    
}
