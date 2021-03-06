import { default as contract } from 'truffle-contract'
import openJournalArtifacts from '../../../build/contracts/OpenJournal.json'

export var account

export const OpenJournal = contract(openJournalArtifacts)

export function InitialiseOpenJournal () {
  if (typeof web3 !== 'undefined') {
    OpenJournal.setProvider(web3.currentProvider)

    web3
      .eth
      .getAccounts(function (err, accounts) {
        if (err != null) {
          window.alert('There was an error fetching your accounts.')
          return
        }

        if (accounts.length === 0) {
          window.alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctl" +
              'y.')
          return
        }

        account = accounts[0]
      })
  } else {
    console.warn('No web3 detected.')
    window.alert('You need an Ethereum web3 API to interact with this website. Try installing the ' +
        'MetaMask browser extension.')
  }
}
