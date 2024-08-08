import { ethers } from "ethers";
import { useSetingStore } from "@/stores/state";

const handleNewAccounts = (accounts) => {
  window.ethereum.removeListener('accountsChanged', handleNewAccounts);
  const stores = useSetingStore();
  if (accounts.length == 0) {
    stores.setWallet('state', null);
    stores.setWallet('address', "");
  } else {
    connectWallet();
  }
}

export const connectWallet = async (callBack) => {
  if (window.ethereum !== 'undefined') {
    const stores = useSetingStore();
    try {
      stores.setWallet('state', "loading");
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      stores.setWeb3('provider',provider);
      const accounts = await provider.send("eth_requestAccounts", []);
      if (accounts.length > 0) {
        let signer = provider.getSigner();
        let address = await signer.getAddress();
        
        stores.setWallet('address', address);
        stores.setWeb3('signer', signer);
        stores.setWallet('state', "success");
        window.ethereum.on('accountsChanged', handleNewAccounts);

        if (callBack) {
          callBack();
        }
      }
    } catch (error) {
      stores.setWallet('state', "error");
      stores.setWallet('address', "");
      window.ethereum.removeListener('accountsChanged', handleNewAccounts);
      console.log(error);
    }
  }
}

export const formatNumber = (num,len,type) => {
  len = len > 0 && len <= 20 ? len : 2;
  var result = parseFloat(num);
  num=isNaN(result)?0:result;
  var numpow=Math.pow(10,len);
  var numcheng=accMul(num,numpow);
  if(type==1){
    result = Math.ceil(numcheng);
  }else if(type==2){
    result = Math.floor(numcheng);
  }else{ 
    result = Math.round(numcheng);
  }
  result =accDiv(result,numpow);
  var s_x = result.toString();
  var pos_decimal = s_x.indexOf('.');
  if (pos_decimal < 0) {pos_decimal = s_x.length;s_x += '.';}
  while (s_x.length <= pos_decimal + len) {s_x += '0';}
  return s_x;
}



function accMul(arg1, arg2) {
  var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
 
  try {m += s1.split(".")[1].length;}catch (e) {}
  try {m += s2.split(".")[1].length;}catch (e) {}

  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

function accDiv(arg1, arg2) {
  var t1 = 0, t2 = 0, r1, r2;
  try {t1 = arg1.toString().split(".")[1].length;}catch (e) {}
  try {t2 = arg2.toString().split(".")[1].length;}catch (e) {}
  r1 = Number(arg1.toString().replace(".", ""));
  r2 = Number(arg2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);

}  

