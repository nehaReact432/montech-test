import { useState } from 'react';
import { useEffect } from 'react';
import { ethers } from 'ethers';

export default function useMetaMask() {
    const [etherAccount, setEtherAccount] = useState<string | any>()
    const [wallet, setWallet] = useState<string>("")
    let windows: any
    const requestAccount = async () => {
        if (windows.ethereum) {
            try {
                const account = await windows.ethereum.request({
                    method: "eth_requestAccounts",
                })
                setEtherAccount(account[0])
                const balance = await windows.ethereum.request({
                    method: "eth_getBalance",
                    params: [String(account), "latest"]
                })
                setWallet(ethers.utils.formatEther(balance));

            }
            catch (e) {
                console.log(e)
            }

        }
        else {
            alert("Meta Mask not Detected")
        }
    }

    useEffect(() => {
        windows = window
    }, [requestAccount])

    return {
        etherAccount: etherAccount,
        wallet: wallet,
        requestAccount: requestAccount
    };
}