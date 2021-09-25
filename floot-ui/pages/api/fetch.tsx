import { VercelRequest, VercelResponse } from '@vercel/node'
import Cors from 'cors'
import axios from 'axios'
import initMiddleware from '../../method/middleware'

const cors = initMiddleware(
  Cors({ methods: ['GET', 'POST', 'OPTIONS'], })
)

const MORALIS_API_KEY = 'VWtW1wkC5OLqsZGORbuTMda1aaVUsqrl7AsukAV9diKSndpW14bcSjbgjT13FEkM'
const MORALIS_API = 'https://deep-index.moralis.io/api/v2'
const options = { headers: {  'X-API-Key': MORALIS_API_KEY }}

const getFlootLists = async (
  address: string, 
  chain:string='eth',
  format:string='decimal',
  order:string='token_id.DESC',
  limit:number=50
  ): Promise<any> => {
  const resp = await axios(`${MORALIS_API}/nft/${address}/owners?chain=${chain}&format=${format}&order=${order}&limit=${limit}`,options)  
  if(resp.status == 200){
    return resp.data
  }else{
    return {
      "total": 1,
      "page": 0,
      "page_size": 500,
      "result": []
    }
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await cors(req, res)
  if(req.method === 'GET'){
    const { address , chain } = req.query
    if(address != undefined && typeof address === 'string'){
      const getChain : string = chain != undefined && typeof chain == 'string' ? chain : 'ETH'
      const resp = await getFlootLists(address, getChain)
      res.status(200).json(resp)
    }else{
      res.json({ message: 'Missing query' })
    }
  }else{
    res.json({ message: 'Some error occurred!' })
  }
}
