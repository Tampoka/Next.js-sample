import { fetchNames } from "@/utils/fetch-names";
import {  useEffect, useState } from "react"

type ResponseItemType = {
    id: string;
    name: string;
};

const NamesCSR = () => {
    const [data, setData] = useState<ResponseItemType[]|[]>();

    useEffect(() => {
        const fetchData = async () => {
            let names
            try {
               names=await fetchNames()
                
            } catch (error: unknown) {
                console.error("Error fetching names:", error);
            }
            setData(names);
        };

        fetchData();
    })

    const output=data?.map((item:ResponseItemType, idx:number)=>(<li key={idx}>{item.name} (ID: {item.id})</li>))
    return (
        <div className="px-6">
            <h1>Names List</h1>
            <ul>
                {output}
            </ul>
        </div>
    );
};

export default NamesCSR;