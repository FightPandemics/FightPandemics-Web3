import React, { MouseEvent } from "react"
import GetContractReadWrite from "./web3/GetContractReadWrite"
import GetProviderMetamask from "./web3/GetProviderMetamask"

export default function Mint(): any {
  async function handleClick(e: MouseEvent) {
    const contract: Promise<any> = await GetContractReadWrite()
    console.log("Contract with signer: ", contract)

    const provider: Promise<any> = await GetProviderMetamask()
    // @ts-ignore
    const accounts: Array<String> = await provider.listAccounts()
    console.log("Metamask Accounts: ", accounts)

    const priceFinney: number = 2
    const tokenURI: string = "http://sticlalux.ro/bedge.json"

    // @ts-ignore
    await contract.mint(accounts[0], priceFinney, tokenURI)

    // @ts-ignore
    let badgeId = (await contract.getLatestId()).toNumber()

    // @ts-ignore
    let badge = await contract.getBadgesById(badgeId)

    if (badge !== null) {
      alert("Badge minted!")
    }

  }
  return (
    <button onClick={handleClick}>Mint Badge</button>
  )
}
