import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse):Promise<NextApiResponse<WeatherDetailType>>|void {
    const { zipcode } = req.query;

   return res.status(200).json({ zipcode: zipcode, weather: "sunny", temp: 21 });
}