import { NextApiRequest, NextApiResponse } from 'next';

/**
 * @swagger
 * /api/v1/names:
 *   get:
 *     summary: Retrieve the list of names
 *     responses:
 *       200:
 *         description: A list of names
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
     
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