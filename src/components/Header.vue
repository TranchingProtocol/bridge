<template>
    <header class="header ">
        <div class="container">
            <div class="header-inner">
                <div class="header-left">
                    <div class="logo">
                        <a href="/" rel="nofollow">
                            <img src="/wp-content/themes/webSystems/assets/build/img/logo.png" alt="ZKAmoeba" width="80" height="80">
                            <span>ZKAmoeba</span>
                        </a>
                    </div>
                </div>
                <div class="header-center">
                    <div class="top-menu">
                        <ul>
                            <li>
                                <a class="down" data-title="Projects" href="javascript:;">Build</a>
                                <div class="down-list">
                                    <div>
                                        <a href="https://zkamoebas-organization.gitbook.io/zkamoeba-docs/building-on-zkamoeba-mirco/quickstart" target="_blank" rel="noopener noreferrer">Quickstart</a>
                                        <a href="https://zkamoebas-organization.gitbook.io/zkamoeba-docs/" target="_blank" rel="noopener noreferrer">Documentation</a>
                                        <a href="https://zkamoebas-organization.gitbook.io/zkamoeba-docs/building-on-zkamoeba-mirco/json-rpc-api" target="_blank" rel="noopener noreferrer">Web3 API</a>
                                        <a href="https://hardhat.org/" target="_blank" rel="noopener noreferrer">Hardhat plugins</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="down" data-title="Blog" href="javascript:;">Network</a>
                                <div class="down-list">
                                    <div>
                                  
                                        <a href="/en/ecosystem/" rel="noopener noreferrer">Ecosystem</a>
                                  
                                        <a href="/en/microStatus/" rel="noopener noreferrer">ZKAmoeba Micro Status</a>
                                        <a href="/en/proverStatus/" rel="noopener noreferrer">Prover Status</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="" data-title="Career" :href="network[store.config.chain][store.config.network].blockExplorerUrls[0]" target="_blank">Block Explorer</a>
                            </li>
                            <li>
                                <a class="" data-title="Career" href="/en/bridge/">Bridge</a>
                            </li>
                            <li>
                                <a class="down" data-title="Career" href="javascript:;">Amoeba WS</a>
                                <div class="down-list">
                                    <div>
                                        
                                        <a href="/en/cases/" rel="noopener noreferrer">Amoeba DR</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="" data-title="Career" href="javascript:;">About us</a>
                            </li>
                        </ul>
                    </div>
                    <div class="header-socials">
                        <div class="socials">
                            <a href="#" rel="noopener noreferrer nofollow"><img width="24" height="24" src="/wp-content/uploads/2022/04/i-instagram.svg" alt="Instagram"></a>
                            <a href="#" rel="noopener noreferrer nofollow"><img width="24" height="24" src="/wp-content/uploads/2022/04/i-linkedin.svg" alt="Linkedin"></a>
                            <a href="#" rel="noopener noreferrer nofollow"><img width="24" height="24" src="/wp-content/uploads/2022/05/twitter_icon.svg" alt="Twitter"></a>
                            <a href="#" rel="noopener noreferrer nofollow"><img width="24" height="24" src="/wp-content/uploads/2022/04/i-facebook.svg" alt="Facebook"></a>
                            <a href="#" rel="noopener noreferrer nofollow"><img width="24" height="24" src="/wp-content/uploads/2022/04/i-youtube.svg" alt="youtube"></a>
                            <a href="#" rel="noopener noreferrer nofollow"><img width="24" height="24" src="/wp-content/uploads/2022/04/i-behance.svg" alt="behance"></a>
                            <a href="#" rel="noopener noreferrer nofollow"><img width="24" height="24" src="/wp-content/uploads/2022/04/i-github.svg" alt="Github"></a>
                        </div>
                    </div>
                    <div class="header-button">
                        <a href="#" class="link">
                            <span>count the project</span>
                            <span class="btn btn-icon">
                                <span class="icon icon-i-link animate-swing"></span>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="header-right">
                    <div class="lang">
                        <ul>
                            <!-- <li><a class="" href="/ua/" title="Українська (ua)">ua</a></li> -->
                            <li><a class="active" href="/" title="English (en)">en</a></li>
                            <li v-if="store.wallet.state !== 'success'" style="cursor: pointer" class="connetWallet-but" @click="connectWallet()">Connet Wallet</li>
                            <li v-else class="connetWallet-but" >{{ store.wallet.address.length < 8 ? store.wallet.address : store.wallet.address.substring(0,4) + "..." + store.wallet.address.slice(-4) }}</li>
                        </ul>
                    </div>
                    <div class="menu-toggle js-menu-toggle"></div>
                </div>
            </div>
        </div>
    </header>
</template>
  
<script setup>

import {useSetingStore} from '@/stores/state';
import { connectWallet } from '@/utils/tool';
import network from '@/config/network.json';


const store = useSetingStore();

</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.connetWallet-but{
  background: linear-gradient(94deg, #98D528 5%, #30AD37 92%);
  padding: 0px 20px;
  border-radius: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
}</style>
  