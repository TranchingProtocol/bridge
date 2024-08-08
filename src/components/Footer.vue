<template>
  <footer class="footer" data-aos="fade">
    <div class="container">

      <div class="footer-top">
        <div class="footer-box">
          <div class="footer-box__head">
            <div class="footer-box__title">Build on Micro</div>
            <span class="icon icon-i-plus"></span>
          </div>
          <div class="footer-box__body">
            <div class="footer-menu">
              <ul>
                <li><a class="" data-title="GitHub" href="https://github.com/ZKAmoeba" target="_blank">GitHub</a></li>
                <li><a class="" data-title="Quickstart(Gitbook)" target="_blank"
                    href="https://zkamoebas-organization.gitbook.io/zkamoeba-docs/building-on-zkamoeba-mirco/quickstart">Quickstart(Gitbook)</a>
                </li>
                <li><a class="" data-title="Documentation(Gitbook)"
                    href="https://zkamoebas-organization.gitbook.io/zkamoeba-docs/"
                    target="_blank">Documentation(Gitbook)</a></li>
                <li><a class="" data-title="Web3 API(Gitbook)"
                    href="https://zkamoebas-organization.gitbook.io/zkamoeba-docs/building-on-zkamoeba-mirco/json-rpc-api"
                    target="_blank">Web3 API(Gitbook)</a></li>

              </ul>
            </div>
          </div>
        </div>
        <div class="footer-box">
          <div class="footer-box__head">
            <div class="footer-box__title">Micro Network</div>
            <span class="icon icon-i-plus"></span>
          </div>
          <div class="footer-box__body">
            <div class="footer-menu">
              <ul>
                <li><a class="" data-title="Bridge" href="/en/bridge/">Bridge</a></li>
                <li><a class="" data-title="Ecosystem" href="/en/ecosystem/">Ecosystem</a></li>

                <li><a data-title="Block Explorer" target="_blank"
                    :href="network[stores.config.chain][stores.config.network].blockExplorerUrls[0]">Block
                    Explorer</a></li>
                <li><a class="" href="/en/cases/">Amoeba DR</a></li>

              </ul>
            </div>
          </div>
        </div>
        <div class="footer-box">
          <div class="footer-box__head">
            <div class="footer-box__title">Community</div>
            <span class="icon icon-i-plus"></span>
          </div>
          <div class="footer-box__body">
            <div class="footer-menu">
              <ul>
                <li><a class="" data-title="Projects" href="https://discord.com/invite/B7eHT9f5"
                    target="_blank">DISCORD</a></li>
                <li><a class="" data-title="Projects" href="https://twitter.com/zkamoeba" target="_blank">Twitter</a></li>
                <li><a class="" data-title="Career" href="https://zkamoeba.medium.com" target="_blank">Medium</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-box">
          <div class="footer-box__head">
            <div class="footer-box__title">General</div>
            <span class="icon icon-i-plus"></span>
          </div>
          <div class="footer-box__body">
            <div class="footer-menu">
              <ul>
                <li><a class="" data-title="About Us" href="#" @click="openMailto('mailto:contact@zkamoeba.com')">Contact
                    us</a></li>
                <li><a class="" data-title="Projects" href="#">Brand assets</a></li>
                <li><a class="" data-title="Career" href="/en/termsOfService/">Terms of service</a></li>
                <li><a class="" data-title="Career" href="/en/privacyPolicy/">Privacy policy</a></li>
                <li><a class="" data-title="Career" href="/en/cookiePolicy/">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="logo">
          <a href="/" rel="nofollow">
            <img src="/wp-content/themes/webSystems/assets/build/img/web-systems.png" alt="ZKAmoeba" width="210"
              height="22">
          </a>
        </div>
        <div class="socials">
          <a href="https://twitter.com/zkamoeba" target="_blank" rel="noopener noreferrer nofollow"><img width="130"
              height="30" src="/wp-content/uploads/2022/05/twitter_icon.svg" alt="Twitter"></a>
          <a href="https://zkamoeba.medium.com" target="_blank">
            <span rel="noopener noreferrer nofollow" class="png-svg" style="margin-right: 0px;"><img width="130"
                height="30" src="/wp-content/uploads/2022/04/medium.svg" alt="Facebook"></span></a>

          <a href="https://discord.com/invite/B7eHT9f5" target="_blank">
            <span rel="noopener noreferrer nofollow" class="png-svg" style="margin-right: 0px;"><img width="130"
                height="30" src="/wp-content/uploads/2022/04/discord.png" alt="discord"></span></a>
          <a href="https://github.com/ZKAmoeba" target="_blank" rel="noopener noreferrer nofollow"><img width="130"
              height="30" src="/wp-content/uploads/2022/04/i-github.svg" alt="Github"></a>
          <a href="https://zkamoebas-organization.gitbook.io/zkamoeba-docs/" target="_blank"><span
              rel="noopener noreferrer nofollow" class="png-svg"><img width="130" height="30"
                src="/wp-content/uploads/2022/04/gitbook.svg" alt="gitbook"></span></a>
        </div>
        <div class="copyright">copyright © 2023</div>
        <div class="back-top">
          <a href="#top" class="back-top__link js-scroll-top">(back to top)</a>
        </div>
      </div>
    </div>
  </footer>
</template>
  
<script setup>
import { useRouter } from "vue-router";
import { useSetingStore } from '@/stores/state';
import network from '@/config/network.json';
const stores = useSetingStore();
const router = useRouter();
const openMailto = (url) => {

  window.location.href = url;
}
const openLink = (url) => {
  router.push({ path: url });
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
  