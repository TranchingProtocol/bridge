import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useSetingStore = defineStore('index', () => {
  
  const config = reactive({
    network: 'Localnet',
    L1: 'Filecoin',
    L2: 'ZKAmoeba',
    chain:"ZKAmoeba",
  })

  const wallet = reactive({
    state: null,
    address: "",
  })

  const web3 = reactive({
    provider: null,
    signer: null,
  })

  const setSeting = (name, value) => {
    seting[name] = value;
  }

  const setWallet = (name, value) => {
    wallet[name] = value;
  }

  const setWeb3 = (name, value) => {
    web3[name] = value;
  }

  return { config, wallet, web3, setSeting, setWallet, setWeb3 }

})