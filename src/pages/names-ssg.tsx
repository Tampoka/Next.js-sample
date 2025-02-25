import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { fetchNames } from "../utils/fetch-names";

    const NamesSSG:NextPage=(props:InferGetStaticPropsType<typeof getStaticProps>)=>{
    const output=props.names.map((item:responseItemType, idx:number)=>(<li key={idx}>{item.name} (ID: {item.id})</li>))
    return (
        <div>
            <h1>Users Names </h1>
            <ul>
                {output}
            </ul>
        </div>
    )
    }

    export const getStaticProps:GetStaticProps=async(
    )=>{
    let names :responseItemType[]|[] = []
    try {
        names = await fetchNames()
    } catch (error: unknown) {
        // Log the error for debugging purposes
        console.error("Error fetching names:", error);
    }
    return {
        props:{names},
        revalidate: 10
    }
    }

    export default NamesSSG;