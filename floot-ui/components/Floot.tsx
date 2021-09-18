import { FlootMeta , FlootNFT} from '../Interface/metadata'
const base64json = require('base64json')

const Floot = ({ nft }:{ nft: FlootNFT  }) => {
    const tokenUri: string = nft.token_uri.split('data:application/json;base64,')[1]
    let fl : FlootMeta = base64json.parse(tokenUri);
    return <img src={fl.image} alt={fl.name} className="mt-3 shadow-lg border border-black py-3" />
}

export default Floot