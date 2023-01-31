
export default function StarShipCard({star}) {
   
   return(
    <div>
    <ul>{
        star.map((data)=>(
            <li>
                {
                    data.name
                }
            </li>
        ))}
    </ul>
   </div>
   )
 }





    

