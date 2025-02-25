import { NextApiRequest, NextApiResponse } from 'next';

type responseItemType={
    id:string
    name: string;
}

export default async function handler(_req: NextApiRequest, res: NextApiResponse):Promise<void | NextApiResponse<responseItemType[]>> {
    const url="https://usemodernfullstack.dev/api/v1/users";
    let data
try {
    const response = await fetch(url);
    data=(await response.json()) as responseItemType[];
} catch (error) {
    return res.status(500).json({error: (error as Error).message});
}
const names = data.map((item) => {
    return {
        id: item.id,
        name: item.name
    }
    });
    res.status(200).json(names);
}