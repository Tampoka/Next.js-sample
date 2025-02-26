import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * @swagger
 * /api/v1/weather/{zipcode}:
 *   get:
 *     summary: Get weather by zipcode
 *     description: Returns the current weather for a given zipcode.
 *     parameters:
 *       - in: path
 *         name: zipcode
 *         required: true
 *         schema:
 *           type: string
 *         description: The zipcode for which to fetch weather details.
 *     responses:
 *       200:
 *         description: Successfully retrieved weather details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 zipcode:
 *                   type: string
 *                   description: The requested zipcode
 *                 weather:
 *                   type: string
 *                   description: Weather condition (e.g., sunny, rainy)
 *                 temp:
 *                   type: integer
 *                   description: Current temperature in Celsius
 *       400:
 *         description: Invalid zipcode format
 *       500:
 *         description: Server error
 */

export default function handler(req: NextApiRequest, res: NextApiResponse):Promise<NextApiResponse<WeatherDetailType>>|void {
    const { zipcode } = req.query;

   return res.status(200).json({ zipcode: zipcode, weather: "sunny", temp: 21 });
}