import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { fetchNames } from "../utils/fetch-names";

const NameSSR:NextPage=(props:InferGetServerSidePropsType<typeof getServerSideProps>)=>{
 const output=props.names.map((item:responseItemType, idx:number)=>(<li key={idx}>{item.name} (ID: {item.id})</li>))
 return (
        <div>
            <h1>Users List </h1>
            <ul>
                {output}
            </ul>
        </div>
    )
}

export const getServerSideProps:GetServerSideProps=async(
)=>{
    let names :responseItemType[]|[] = []
    try {
        names = await fetchNames()
    } catch (error: unknown) {
     // Log the error for debugging purposes
    console.error("Error fetching names:", error);
    
    // Optionally, set names to an empty array or provide a fallback
    names = [];
    
    // You can return a custom error message if needed
    // Or handle specific error cases (e.g., network issues, bad data, etc.)
    // You could 
    }
return {
    props:{names}
}
}

export default NameSSR;