<template>
  <main class="main" style="min-height: 100vh">
    <div v-show="!pageState"></div>
    <div v-show="pageState" style="margin-top: 10vh;">
      <section class="sign-in-container" v-if="store.wallet.state !== 'success'">
        <div>
          <!-- <div class="sign-in-logo-container">
                        <img src="/wp-content/themes/webSystems/assets/build/img/logo.png" alt="ZKAmoeba" width="80" height="80" />
                        <span>ZKAmoeba</span>
                    </div> -->
          <p class="sign-in-underline">
            Your bridge to the future of crypto and DeFi powered with zero
            knowledge proofs
          </p>
        </div>
        <div class="sign-in-login-block">
          <button class="login-btn" :disabled="!isEthereum || store.wallet.state === 'loading'"
            @click="clickConnectWallet">
            <div id="logo-container" class="meta-mask-fox mr-2 h-10 w-auto md:h-16"></div>
            <div>
              <div class="login-btn-wallet-name">MetaMask</div>
              <div class="login-btn-description">
                Connect using browser wallet
              </div>
            </div>
            <div class="login-btn-arrow"></div>
          </button>
          <div class="download-wallet-container" v-if="!isEthereum">
            <div class="download-wallet-text">Don't have a wallet</div>
            <button @click="Download()" class="download-wallet-link">
              Download MetaMask here
            </button>
          </div>
          <div class="alert-container error" v-if="store.wallet.state === 'error'">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                  class="icon">
                  <path fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="ml-3 overflow-hidden">
                <h3 class="title">Unable to connect to MetaMask wallet</h3>
                <div class="description">
                  <p class="max-h-20 overflow-auto break-words first-letter:capitalize">
                    Please try again later. If the problem persists, please try
                    to set up or reinstall your wallet or contact our
                    development team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="min-h-30 mx-auto w-full max-w-lg px-2 sm:w-11/12 sm:px-0" v-else>
        <section class="divide-y-[2px] divide-neutral-200 rounded-lg bg-white shadow">
          <div class="pt-4 pb-3">
            <nav class="bridge-nav">
              <ul class="bridge-nav-list">
                <li class="bridge-nav-list-item hidden md:inline-flex">
                  <h2>Bridge</h2>
                </li>
                <li class="bridge-nav-list-item">
                  <a href="javascript:;" @click="switchDepositWithdraw('Deposit')"
                    :class="{ 'router-link-exact-active': pageType == 'Deposit' }" aria-current="page">Deposit</a>
                </li>
                <li class="bridge-nav-list-item">
                  <a href="javascript:;" @click="switchDepositWithdraw('Withdraw')"
                    :class="{ 'router-link-exact-active': pageType == 'Withdraw' }">
                    Withdraw
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="px-4 py-5 pb-4 sm:px-8">
            <div v-if="pageType !== 'Withdraw'">
              <form autocomplete="off" class="relative">
                <div class="balance-field-wrapper">
                  <div class="balance-token-wrapper">
                    <div class="balance-field-label">
                      <label class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 5px;" class="icon" width="18"
                          height="18" viewBox="0 0 1024 1024" version="1.1">
                          <path
                            d="M512 1024C230.4 1024 0 793.6 0 509.448533 2.56 227.848533 230.4-2.542933 514.56 0.017067c281.6 2.56 509.44 230.4 509.44 517.12C1021.44 796.16 793.6 1024 512 1024z"
                            fill="#0090FF" />
                          <path
                            d="M556.416 451.968l-15.232 82.0224 144.674133 20.5056-10.154666 38.4512-142.1312-20.5056c-10.154667 33.322667-15.223467 69.205333-27.921067 99.968-12.689067 35.8912-25.378133 71.773867-40.610133 105.096533-20.309333 43.579733-55.8336 74.3424-104.055467 82.030934-27.921067 5.12-58.376533 2.56-81.220267-15.3856-7.620267-5.12-15.232-15.377067-15.232-23.0656 0-10.257067 5.077333-23.074133 12.689067-28.202667 5.077333-2.56 17.7664 0 25.378133 2.56 7.620267 7.697067 15.232 17.954133 20.309334 28.202667 15.232 20.5056 35.5328 23.074133 55.842133 7.688533 22.843733-20.5056 35.5328-48.699733 43.144533-76.893867 15.232-61.525333 30.464-120.482133 43.144534-181.998933v-10.257067l-134.519467-20.5056 5.077333-38.4512 139.605334 20.514134 17.757866-79.470934-144.674133-23.0656 5.077333-41.0112 149.751467 20.5056c5.077333-15.3856 7.611733-28.194133 12.689067-41.0112 12.689067-46.139733 25.378133-92.279467 55.842133-133.290666 30.455467-41.019733 65.988267-66.645333 119.296-64.085334 22.8352 0 45.678933 7.68 60.910933 25.6256 2.5344 2.56 7.611733 7.697067 7.611734 12.817067 0 10.257067 0 23.074133-7.611734 30.762667-10.154667 7.688533-22.843733 5.12-32.9984-5.12-7.611733-7.697067-12.689067-15.3856-20.309333-23.074134-15.223467-20.5056-38.0672-23.074133-55.8336-5.12-12.689067 12.808533-25.378133 30.754133-32.9984 48.6912C591.957333 300.731733 579.259733 357.12 561.493333 413.525333l139.5968 20.5056-10.154666 38.4512-134.519467-20.5056z"
                            fill="#FFFFFF" />
                        </svg>
                        ETH
                      </label>
                    </div>
                    <div class="balance-field-token-dropdown">
                      <button type="button" tabindex="0" class="option-button">
                        <div class="token-balance-value">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="20" height="20"
                            viewBox="0 0 1024 1024" version="1.1">
                            <path
                              d="M512 1024C230.4 1024 0 793.6 0 509.448533 2.56 227.848533 230.4-2.542933 514.56 0.017067c281.6 2.56 509.44 230.4 509.44 517.12C1021.44 796.16 793.6 1024 512 1024z"
                              fill="#0090FF" />
                            <path
                              d="M556.416 451.968l-15.232 82.0224 144.674133 20.5056-10.154666 38.4512-142.1312-20.5056c-10.154667 33.322667-15.223467 69.205333-27.921067 99.968-12.689067 35.8912-25.378133 71.773867-40.610133 105.096533-20.309333 43.579733-55.8336 74.3424-104.055467 82.030934-27.921067 5.12-58.376533 2.56-81.220267-15.3856-7.620267-5.12-15.232-15.377067-15.232-23.0656 0-10.257067 5.077333-23.074133 12.689067-28.202667 5.077333-2.56 17.7664 0 25.378133 2.56 7.620267 7.697067 15.232 17.954133 20.309334 28.202667 15.232 20.5056 35.5328 23.074133 55.842133 7.688533 22.843733-20.5056 35.5328-48.699733 43.144533-76.893867 15.232-61.525333 30.464-120.482133 43.144534-181.998933v-10.257067l-134.519467-20.5056 5.077333-38.4512 139.605334 20.514134 17.757866-79.470934-144.674133-23.0656 5.077333-41.0112 149.751467 20.5056c5.077333-15.3856 7.611733-28.194133 12.689067-41.0112 12.689067-46.139733 25.378133-92.279467 55.842133-133.290666 30.455467-41.019733 65.988267-66.645333 119.296-64.085334 22.8352 0 45.678933 7.68 60.910933 25.6256 2.5344 2.56 7.611733 7.697067 7.611734 12.817067 0 10.257067 0 23.074133-7.611734 30.762667-10.154667 7.688533-22.843733 5.12-32.9984-5.12-7.611733-7.697067-12.689067-15.3856-20.309333-23.074134-15.223467-20.5056-38.0672-23.074133-55.8336-5.12-12.689067 12.808533-25.378133 30.754133-32.9984 48.6912C591.957333 300.731733 579.259733 357.12 561.493333 413.525333l139.5968 20.5056-10.154666 38.4512-134.519467-20.5056z"
                              fill="#FFFFFF" />
                          </svg>
                          <p class="token-balance-text">ETH</p>
                        </div>

                      </button><!---->
                    </div>
                  </div>
                  <div class="balance-input-wrapper">
                    <input type="text" name="amount" class="balance-input z-10" style="color: #67C22F;" placeholder="0.00"
                      v-model="inputs.value1" />
                    <div class="token-balance-wrapper">
                      <div class="token-balance">
                        <label class="token-balance-label">Balance</label>
                        <span class="token-balance-value text-ellipsis" v-if="userWallet.balance != null">{{
                          balanceHandle(userWallet.balance) }}</span>
                        <loading v-else></loading>
                        <button type="button" class="max-button" :disabled="!(userWallet.balance > 0)"
                          @click="inputs.value1 = userWallet.balance">
                          MAX
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative flex h-10 items-center justify-center">
                  <button class="swap-button" type="button"
                    @click="switchDepositWithdraw(pageType == 'Deposit' ? 'Withdraw' : 'Deposit')">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="#67C22F" xmlns="http://www.w3.org/2000/svg"
                      class="">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M5 4.71472C4.44772 4.71472 4 5.16244 4 5.71472V8.71472C4 9.26701 3.55228 9.71472 3 9.71472C2.44772 9.71472 2 9.26701 2 8.71472V5.71472C2 4.05787 3.34315 2.71472 5 2.71472H10C10.5523 2.71472 11 3.16244 11 3.71472C11 4.26701 10.5523 4.71472 10 4.71472H5Z"
                        fill="#67C22F"></path>
                      <path
                        d="M8.28716 2.2888L9.00011 3.7147L8.28716 5.14061C8.11573 5.48345 8.18293 5.89752 8.45397 6.16857C8.76734 6.48194 9.26345 6.51719 9.61799 6.25129L11.9334 4.5147C12.4668 4.1147 12.4668 3.3147 11.9334 2.9147L9.61799 1.17812C9.26345 0.912212 8.76734 0.947469 8.45397 1.26084C8.18293 1.53188 8.11573 1.94595 8.28716 2.2888Z"
                        fill="#67C22F"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11 11.2853C11.5523 11.2853 12 10.8376 12 10.2853V7.28528C12 6.73299 12.4477 6.28528 13 6.28528C13.5523 6.28528 14 6.73299 14 7.28528V10.2853C14 11.9421 12.6569 13.2853 11 13.2853H6C5.44772 13.2853 5 12.8376 5 12.2853C5 11.733 5.44772 11.2853 6 11.2853H11Z"
                        fill="#67C22F"></path>
                      <path
                        d="M7.71284 13.7112L6.99989 12.2853L7.71284 10.8594C7.88427 10.5165 7.81707 10.1025 7.54603 9.83143C7.23266 9.51806 6.73655 9.48281 6.38201 9.74871L4.06656 11.4853C3.53323 11.8853 3.53323 12.6853 4.06656 13.0853L6.38201 14.8219C6.73655 15.0878 7.23266 15.0525 7.54603 14.7392C7.81707 14.4681 7.88427 14.054 7.71284 13.7112Z"
                        fill="#67C22F"></path>
                    </svg>
                  </button>
                </div>
                <div class="balance-info">

                  <div class="balance-token-wrapper">
                    <div class="balance-field-label">
                      <label class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 5px;" class="icon" width="18"
                          height="18" viewBox="0 0 1024 1024" version="1.1">
                          <path
                            d="M269.3 288.3V260h93.2c9.3 0 22.6 6.2 26.4 11.9l94.2 144.9c14 21 43.5 29.8 63.8 29.8h95.7V475l74.7 47 74.7-47v-94l-74.7-47-74.7 47v28.3h-95.8c-9.7 0-23.4-8-27.6-14.3l-93.9-146.9c-13.2-21.6-41.5-25.5-61.7-25.5h-94.4v-28.3l-74.7-47-74.7 47v94l74.7 47 74.8-47z m433.1 270.4v-37.3h-37.3v37.3h37.3z m-321.1-392H344V204h37.3v-37.3z m227.8 392h37.3v-37.3h-37.3v37.3zM680 288.3V260h108.2v-37.3H680v-28.3l-74.7-47-74.7 47v94l74.7 47 74.7-47.1z m168-65.6h-40.3V260H848v-37.3z m-448 121l-74.7-47-74.7 47v94l74.7 47 74.7-47v-94z m93.3-177H456V204h37.3v-37.3z m-56 0H400V204h37.3v-37.3z m321.1 392v-37.3h-37.3v37.3h37.3zM530.7 857.3h56V820h-56v37.3z m-56 0H512V820h-37.3v37.3zM624 735.7v94l74.7 47 74.7-47v-94l-74.7-47-74.7 47zM885.3 502l-74.7 47v28.3h-95c-21.3 0-50.3 7.4-63.9 27.8l-94 140.8c-4.6 6.8-18.4 18.1-26.5 18.1H381.3v-28.3l-74.7-47-74.7 47v94l74.7 47 74.7-47v-28.3h151.2c20.8 0 48.6-9.2 61.5-30.3l94-144.5c3.2-4.8 14.6-12 27.6-12h95V643l74.7 47 74.7-47v-94l-74.7-47zM418.7 857.3H456V820h-37.3v37.3zM233.9 558.7h37.3v-37.3h-37.3v37.3z m56 0h37.3v-37.3h-37.3v37.3zM400 643l74.7 47 74.7-47v-94l-74.7-47-74.7 47v28.3H213.3V549l-74.7-47-63 39.7L64 549v94l74.7 47 74.7-47v-28.3H400V643z m-16.8-84.3v-37.3h-37.3v37.3h37.3z"
                            fill="#2c2c2c" />
                        </svg>
                        ZKAmoeba Micro
                      </label>
                    </div>
                    <div class="balance-field-token-dropdown">
                      <button type="button" tabindex="0" class="option-button">
                        <div class="token-balance-value" style="margin-top: 3px;">
                          <img src="@/assets/images/wFil.png" style="width: 20px;height: 20px;" alt="">

                          <p class="token-balance-text">wBTC</p>
                        </div>

                      </button>
                    </div>
                  </div>

                  <div class="balance-token-wrapper">
                    <div class="balance-info-value-wrapper">
                      <span class="balance-info-value" style="font-size: 1.25rem;color: rgb(75 85 99)">{{
                        balanceHandle(receivedAmount1) }}</span>
                    </div>
                    <div class="balance-info-value-wrapper" style="margin-top: 5px;">
                      <label class="balance-info-label">Balance:</label>
                      <span class="balance-info-value" v-if="userWallet.zkBalance != null">{{
                        balanceHandle(userWallet.zkBalance) }}</span>
                      <loading v-else></loading>
                    </div>

                  </div>


                </div>
                <div class="fee-component-container">
                  <div class="fee-value-container">
                    <!---->
                    &nbsp;
                    <div class="max-fee-label">Max fee:</div>
                    &nbsp;
                    <label v-if="feeStatue1" class="fee-value-label"><span>{{ gasusd1 ? `${gasusd1} ETH` : 'unknown'
                    }}</span></label>
                    <loading v-else></loading>
                  </div>
                </div>
                <!---->
                <div class="alert-container mt-10" :class="[message.type]" v-if="message.content !== null">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        class="icon">
                        <path fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div class="ml-3 overflow-hidden">
                      <h3 class="title">{{ message.title }}</h3>
                      <div class="description">
                        <p class="max-h-20 overflow-auto break-words first-letter:capitalize">
                          {{ message.content }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-center mt-5 text-center" style="cursor: pointer;"
                  @click="openAlear(0)">
                  <span class="text-xs text-neutral-500">Arriving in 5 minutes</span>
                  <div class="svg-div">
                    <svg t="1703150012053" class="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="6195" width="200" height="200">
                      <path
                        d="M463.99957 784.352211c0 26.509985 21.490445 48.00043 48.00043 48.00043s48.00043-21.490445 48.00043-48.00043c0-26.509985-21.490445-48.00043-48.00043-48.00043S463.99957 757.842226 463.99957 784.352211z"
                        fill="#575B66" p-id="6196"></path>
                      <path
                        d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128.287273c-211.584464 0-383.712727 172.128262-383.712727 383.712727 0 211.551781 172.128262 383.712727 383.712727 383.712727 211.551781 0 383.712727-172.159226 383.712727-383.712727C895.712727 300.415536 723.551781 128.287273 512 128.287273z"
                        fill="#575B66" p-id="6197"></path>
                      <path
                        d="M512 673.695256c-17.664722 0-32.00086-14.336138-32.00086-31.99914l0-54.112297c0-52.352533 39.999785-92.352318 75.32751-127.647359 25.887273-25.919957 52.67249-52.67249 52.67249-74.016718 0-53.343368-43.07206-96.735385-95.99914-96.735385-53.823303 0-95.99914 41.535923-95.99914 94.559333 0 17.664722-14.336138 31.99914-32.00086 31.99914s-32.00086-14.336138-32.00086-31.99914c0-87.423948 71.775299-158.559333 160.00086-158.559333s160.00086 72.095256 160.00086 160.735385c0 47.904099-36.32028 84.191695-71.424378 119.295794-27.839699 27.776052-56.575622 56.511974-56.575622 82.3356l0 54.112297C544.00086 659.328155 529.664722 673.695256 512 673.695256z"
                        fill="#575B66" p-id="6198"></path>
                    </svg>
                  </div>
                </div>
                <button class="button contained primary lg mt-5 w-full " type="button"
                  :disabled="(depositLoading == 'waiting' || depositLoading == 'disabled' || !(userWallet.balance > 0)) || !(inputs.value1 > 0) || Number(inputs.value1) > userWallet.balance"
                  @click="Deposit()">
                  <loading v-if="depositLoading == 'waiting'" color="#fff" margin="0 5px 0 0"></loading>
                  <span>Deposit</span>
                </button>

              </form>
            </div>
            <form class="relative" autocomplete="off" v-else>
              <div class="balance-field-wrapper">
                <div class="balance-token-wrapper">
                  <div class="balance-field-label">
                    <label class="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 5px;" class="icon" width="18"
                        height="18" viewBox="0 0 1024 1024" version="1.1">
                        <path
                          d="M269.3 288.3V260h93.2c9.3 0 22.6 6.2 26.4 11.9l94.2 144.9c14 21 43.5 29.8 63.8 29.8h95.7V475l74.7 47 74.7-47v-94l-74.7-47-74.7 47v28.3h-95.8c-9.7 0-23.4-8-27.6-14.3l-93.9-146.9c-13.2-21.6-41.5-25.5-61.7-25.5h-94.4v-28.3l-74.7-47-74.7 47v94l74.7 47 74.8-47z m433.1 270.4v-37.3h-37.3v37.3h37.3z m-321.1-392H344V204h37.3v-37.3z m227.8 392h37.3v-37.3h-37.3v37.3zM680 288.3V260h108.2v-37.3H680v-28.3l-74.7-47-74.7 47v94l74.7 47 74.7-47.1z m168-65.6h-40.3V260H848v-37.3z m-448 121l-74.7-47-74.7 47v94l74.7 47 74.7-47v-94z m93.3-177H456V204h37.3v-37.3z m-56 0H400V204h37.3v-37.3z m321.1 392v-37.3h-37.3v37.3h37.3zM530.7 857.3h56V820h-56v37.3z m-56 0H512V820h-37.3v37.3zM624 735.7v94l74.7 47 74.7-47v-94l-74.7-47-74.7 47zM885.3 502l-74.7 47v28.3h-95c-21.3 0-50.3 7.4-63.9 27.8l-94 140.8c-4.6 6.8-18.4 18.1-26.5 18.1H381.3v-28.3l-74.7-47-74.7 47v94l74.7 47 74.7-47v-28.3h151.2c20.8 0 48.6-9.2 61.5-30.3l94-144.5c3.2-4.8 14.6-12 27.6-12h95V643l74.7 47 74.7-47v-94l-74.7-47zM418.7 857.3H456V820h-37.3v37.3zM233.9 558.7h37.3v-37.3h-37.3v37.3z m56 0h37.3v-37.3h-37.3v37.3zM400 643l74.7 47 74.7-47v-94l-74.7-47-74.7 47v28.3H213.3V549l-74.7-47-63 39.7L64 549v94l74.7 47 74.7-47v-28.3H400V643z m-16.8-84.3v-37.3h-37.3v37.3h37.3z"
                          fill="#2c2c2c" />
                      </svg>
                      ZKAmoeba Micro</label>
                  </div>
                  <div class="balance-field-token-dropdown">
                    <button type="button" tabindex="0" class="option-button">
                      <div class="token-balance-value">
                        <img src="@/assets/images/wFil.png" style="width: 20px;height: 20px;" alt="">
                        <p class="token-balance-text">wBTC</p>
                      </div>
                      <!-- <div class="arrow-icon-container">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 w-5 text-primary-900">
                                                    <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd">
                                                    </path>
                                                </svg>
                                            </div> -->
                    </button><!---->
                  </div>
                </div>
                <div class="balance-input-wrapper">
                  <input type="text" name="amount" class="balance-input z-10" style="color: #67C22F;" placeholder="0.00"
                    v-model="inputs.value2" />
                  <div class="token-balance-wrapper">
                    <div class="token-balance">
                      <label class="token-balance-label">Balance:</label>
                      <span class="token-balance-value text-ellipsis" v-if="userWallet.zkBalance != null">{{
                        balanceHandle(userWallet.zkBalance) }}</span>
                      <loading v-else></loading>
                      <button type="button" :disabled="!(userWallet.zkBalance > 0)" class="max-button"
                        @click="inputs.value2 = userWallet.zkBalance">
                        MAX
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="relative flex h-10 items-center justify-center">
                <button class="swap-button" type="button"
                  @click="switchDepositWithdraw(pageType == 'Deposit' ? 'Withdraw' : 'Deposit')">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="#67C22F" xmlns="http://www.w3.org/2000/svg"
                    class="">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M5 4.71472C4.44772 4.71472 4 5.16244 4 5.71472V8.71472C4 9.26701 3.55228 9.71472 3 9.71472C2.44772 9.71472 2 9.26701 2 8.71472V5.71472C2 4.05787 3.34315 2.71472 5 2.71472H10C10.5523 2.71472 11 3.16244 11 3.71472C11 4.26701 10.5523 4.71472 10 4.71472H5Z"
                      fill="#67C22F"></path>
                    <path
                      d="M8.28716 2.2888L9.00011 3.7147L8.28716 5.14061C8.11573 5.48345 8.18293 5.89752 8.45397 6.16857C8.76734 6.48194 9.26345 6.51719 9.61799 6.25129L11.9334 4.5147C12.4668 4.1147 12.4668 3.3147 11.9334 2.9147L9.61799 1.17812C9.26345 0.912212 8.76734 0.947469 8.45397 1.26084C8.18293 1.53188 8.11573 1.94595 8.28716 2.2888Z"
                      fill="#67C22F"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11 11.2853C11.5523 11.2853 12 10.8376 12 10.2853V7.28528C12 6.73299 12.4477 6.28528 13 6.28528C13.5523 6.28528 14 6.73299 14 7.28528V10.2853C14 11.9421 12.6569 13.2853 11 13.2853H6C5.44772 13.2853 5 12.8376 5 12.2853C5 11.733 5.44772 11.2853 6 11.2853H11Z"
                      fill="#67C22F"></path>
                    <path
                      d="M7.71284 13.7112L6.99989 12.2853L7.71284 10.8594C7.88427 10.5165 7.81707 10.1025 7.54603 9.83143C7.23266 9.51806 6.73655 9.48281 6.38201 9.74871L4.06656 11.4853C3.53323 11.8853 3.53323 12.6853 4.06656 13.0853L6.38201 14.8219C6.73655 15.0878 7.23266 15.0525 7.54603 14.7392C7.81707 14.4681 7.88427 14.054 7.71284 13.7112Z"
                      fill="#67C22F"></path>
                  </svg>
                </button>
              </div>
              <div class="balance-info">
                <div class="balance-info-title">
                  <label class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 5px;" class="icon" width="18" height="18"
                      viewBox="0 0 1024 1024" version="1.1">
                      <path
                        d="M512 1024C230.4 1024 0 793.6 0 509.448533 2.56 227.848533 230.4-2.542933 514.56 0.017067c281.6 2.56 509.44 230.4 509.44 517.12C1021.44 796.16 793.6 1024 512 1024z"
                        fill="#0090FF" />
                      <path
                        d="M556.416 451.968l-15.232 82.0224 144.674133 20.5056-10.154666 38.4512-142.1312-20.5056c-10.154667 33.322667-15.223467 69.205333-27.921067 99.968-12.689067 35.8912-25.378133 71.773867-40.610133 105.096533-20.309333 43.579733-55.8336 74.3424-104.055467 82.030934-27.921067 5.12-58.376533 2.56-81.220267-15.3856-7.620267-5.12-15.232-15.377067-15.232-23.0656 0-10.257067 5.077333-23.074133 12.689067-28.202667 5.077333-2.56 17.7664 0 25.378133 2.56 7.620267 7.697067 15.232 17.954133 20.309334 28.202667 15.232 20.5056 35.5328 23.074133 55.842133 7.688533 22.843733-20.5056 35.5328-48.699733 43.144533-76.893867 15.232-61.525333 30.464-120.482133 43.144534-181.998933v-10.257067l-134.519467-20.5056 5.077333-38.4512 139.605334 20.514134 17.757866-79.470934-144.674133-23.0656 5.077333-41.0112 149.751467 20.5056c5.077333-15.3856 7.611733-28.194133 12.689067-41.0112 12.689067-46.139733 25.378133-92.279467 55.842133-133.290666 30.455467-41.019733 65.988267-66.645333 119.296-64.085334 22.8352 0 45.678933 7.68 60.910933 25.6256 2.5344 2.56 7.611733 7.697067 7.611734 12.817067 0 10.257067 0 23.074133-7.611734 30.762667-10.154667 7.688533-22.843733 5.12-32.9984-5.12-7.611733-7.697067-12.689067-15.3856-20.309333-23.074134-15.223467-20.5056-38.0672-23.074133-55.8336-5.12-12.689067 12.808533-25.378133 30.754133-32.9984 48.6912C591.957333 300.731733 579.259733 357.12 561.493333 413.525333l139.5968 20.5056-10.154666 38.4512-134.519467-20.5056z"
                        fill="#FFFFFF" />
                    </svg>
                    ETH
                  </label>
                  <div class="balance-field-token-dropdown">
                    <button type="button" tabindex="0" class="option-button">
                      <div class="token-balance-value">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="20" height="20"
                          viewBox="0 0 1024 1024" version="1.1">
                          <path
                            d="M512 1024C230.4 1024 0 793.6 0 509.448533 2.56 227.848533 230.4-2.542933 514.56 0.017067c281.6 2.56 509.44 230.4 509.44 517.12C1021.44 796.16 793.6 1024 512 1024z"
                            fill="#0090FF" />
                          <path
                            d="M556.416 451.968l-15.232 82.0224 144.674133 20.5056-10.154666 38.4512-142.1312-20.5056c-10.154667 33.322667-15.223467 69.205333-27.921067 99.968-12.689067 35.8912-25.378133 71.773867-40.610133 105.096533-20.309333 43.579733-55.8336 74.3424-104.055467 82.030934-27.921067 5.12-58.376533 2.56-81.220267-15.3856-7.620267-5.12-15.232-15.377067-15.232-23.0656 0-10.257067 5.077333-23.074133 12.689067-28.202667 5.077333-2.56 17.7664 0 25.378133 2.56 7.620267 7.697067 15.232 17.954133 20.309334 28.202667 15.232 20.5056 35.5328 23.074133 55.842133 7.688533 22.843733-20.5056 35.5328-48.699733 43.144533-76.893867 15.232-61.525333 30.464-120.482133 43.144534-181.998933v-10.257067l-134.519467-20.5056 5.077333-38.4512 139.605334 20.514134 17.757866-79.470934-144.674133-23.0656 5.077333-41.0112 149.751467 20.5056c5.077333-15.3856 7.611733-28.194133 12.689067-41.0112 12.689067-46.139733 25.378133-92.279467 55.842133-133.290666 30.455467-41.019733 65.988267-66.645333 119.296-64.085334 22.8352 0 45.678933 7.68 60.910933 25.6256 2.5344 2.56 7.611733 7.697067 7.611734 12.817067 0 10.257067 0 23.074133-7.611734 30.762667-10.154667 7.688533-22.843733 5.12-32.9984-5.12-7.611733-7.697067-12.689067-15.3856-20.309333-23.074134-15.223467-20.5056-38.0672-23.074133-55.8336-5.12-12.689067 12.808533-25.378133 30.754133-32.9984 48.6912C591.957333 300.731733 579.259733 357.12 561.493333 413.525333l139.5968 20.5056-10.154666 38.4512-134.519467-20.5056z"
                            fill="#FFFFFF" />
                        </svg>
                        <p class="token-balance-text">ETH</p>
                      </div>

                    </button><!---->
                  </div>
                </div>

                <div class="balance-token-wrapper">
                  <div class="balance-info-value-wrapper">
                    <span class="balance-info-value" style="font-size: 1.25rem;color: rgb(75 85 99);">{{
                      balanceHandle(receivedAmount2) }}</span>
                  </div>
                  <div class="balance-info-value-wrapper" style="margin-top: 5px;">
                    <label class="balance-info-label">Balance:</label>
                    <span class="balance-info-value" v-if="userWallet.balance != null">{{
                      balanceHandle(userWallet.balance) }}</span>
                    <loading v-else></loading>
                  </div>

                </div>


              </div>
              <div class="fee-component-container">
                <div class="fee-value-container">
                  <!---->
                  &nbsp;
                  <div class="max-fee-label">Max fee:</div>
                  &nbsp;
                  <label class="fee-value-label"><!----><span>{{ gasusd2 ? `${gasusd2} wBTC` : 'unknown' }}</span></label>
                </div>
              </div>
              <div class="alert-container mb-5" :class="[message.type]" v-if="message.content !== null">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                      class="icon">
                      <path fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div class="ml-3 overflow-hidden">
                    <h3 class="title">{{ message.title }}</h3>
                    <div class="description">
                      <p class="max-h-20 overflow-auto break-words first-letter:capitalize">
                        {{ message.content }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="alert-container warning mb-5">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                      class="icon">
                      <path fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div class="ml-3 overflow-hidden">
                    <!---->
                    <div class="description">
                      <p class="max-h-20 overflow-auto break-words first-letter:capitalize">
                        In order to ensure the security of the protocol, there will be some delays in withdrawals from
                        ZKAmoeba Micro (L2) to ETH (L1).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="confirm-delay-container">
                <div class="input-field-wrapper">
                  <label for="I understand the withdraw delay" class="input-field-label">I understand the withdraw
                    delay</label>
                  <input v-model="withdrawCheckbox" id="I understand the withdraw delay" spellcheck="false"
                    type="checkbox" class="input-field" placeholder="" autocomplete="off" />
                </div>
              </div>

              <button class="button contained primary lg w-full mt-5 " type="button"
                :disabled="withdrawLoading == 'waiting' || withdrawLoading == 'disabled' || !(userWallet.zkBalance > 0) || !withdrawCheckbox || !(inputs.value2 > 0) || Number(inputs.value2) > userWallet.zkBalance"
                @click="Withdraw()">
                <loading v-if="withdrawLoading == 'waiting'" color="#fff" margin="0 5px 0 0"></loading>
                <span>Withdraw</span>
              </button>

            </form>
          </div>
        </section>
        <div class="thirdPartBridge-div" v-if="pageType === '12'">
          <p class="p1" data-v-aaef263b="">Use a third part bridge</p>
          <p class="p2" data-v-aaef263b="">This usually takes under 15 minutes</p>
          <a href="https://innolinking.com/" target="__blank">
            <div class="link-div">
              <img src="@/assets/images/cloundlink.png" class="img1">
              <div class="p-div" data-v-aaef263b="">
                <p class="p1">CLOUNDLINK BRIDGE</p>
                <p class="p2" data-v-aaef263b="">innolinking.com</p>
              </div>
              <img class="img2" src="@/assets/images/link.png" alt="" >
            </div>
          </a>
        </div>
      </div>
    </div>
  </main>
  <ShowNoteView @close="() => { showNote = false }" :note="nodeShowData" v-if="showNote">
  </ShowNoteView>
  <MessageShow v-if="showMessage"></MessageShow>
</template>

<script setup>
import { ref, computed, reactive, onMounted, nextTick, toRaw, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import MetamaskLogo from "@metamask/logo";
import { ethers } from "ethers";
import * as micro from "@zkamoeba/micro-web3";
import loading from "@/components/loading.vue";
import network from "@/config/network.json";
import { useSetingStore } from '@/stores/state';
import { connectWallet, formatNumber } from '@/utils/tool';
import ShowNoteView from '@/components/ShowNote.vue';
import MessageShow from "@/components/MessageShow.vue";

const store = useSetingStore();
const route = useRoute();
const showNote = ref(false);
const showMessage = ref(false);
const nodeShowData = ref("");
const openAlear = (index) => {

  if (index === 0) {

    nodeShowData.value = "The assets deposited will arrive after 10 blocks are confirmed, which takes about 5 minutes.";
  } else {
    nodeShowData.value = "The assets deposited will arrive after 3600 blocks are confirmed, which takes about 7 dayss.";
  }

  showNote.value = true;
}


const balanceHandle = (value) => {
  let n = 100000000;
  return Math.floor(value * n) / n;
}

const message = reactive({
  type: null,
  title: null,
  content: null
})

const receivedAmount1 = ref('0.00');
const receivedAmount2 = ref('0.000');

onMounted(() => {
  setMetamaskLogo();
  watch(() => store.wallet.state, async (newValue, oldValue) => {

    if (newValue === 'success') {
      await switchEthereumChain(store.config.L1).catch(() => {
        console.error("switchEthereumChain");
      });
      initData();
    }
  });

  watch(() => inputs.value1, (newValue) => {
    receivedAmount1.value = newValue - gasusd1.value > 0 ? newValue - gasusd1.value : 0.00


  });

  watch(() => receivedAmount1.value, () => {

    if (receivedAmount1.value > 0 && feeStatue1.value) {

      depositLoading.value = 'success'
    } else {
      depositLoading.value = 'disabled'
    }
  });




  watch(() => inputs.value2, (newValue) => {
    receivedAmount2.value = newValue - gasusd2.value > 0 ? newValue - gasusd2.value : 0.00
  });

  watch(() => receivedAmount2.value, () => {

    if (receivedAmount2.value) {

      withdrawLoading.value = 'success'
    } else {
      withdrawLoading.value = 'disabled'
    }
  });

  watch(() => inputs.value1, (newValue, oldValue) => {

    if (countDecimalPlaces(newValue) > 8) {
      inputs.value1 = balanceHandle(newValue);
    }
  });

  watch(() => inputs.value2, (newValue, oldValue) => {
    if (countDecimalPlaces(newValue) > 8) {
      inputs.value2 = balanceHandle(newValue);
    }
  });

});


function countDecimalPlaces(num) {
  // 将浮点数转换为字符串并去除前导零
  var str = num.toString().replace(/^0+/, '');

  if (str === '') return 0; // 如果输入值为0或空字符串，返回0

  // 查找小数部分的索引
  var decimalIndex = str.indexOf('.');

  if (decimalIndex !== -1) {
    // 计算小数部分的长度（包括小数点）
    var decimalLength = str.length - decimalIndex - 1;

    return decimalLength;
  } else {
    return 0; // 没有小数部分时返回0
  }
}

// 加载MetamaskLogo
const setMetamaskLogo = () => {
  const viewer = MetamaskLogo({
    // Dictates whether width & height are px or multiplied
    pxNotRatio: true,
    width: 80,
    height: 64,
    // pxNotRatio: false,
    // width: 0.9,
    // height: 0.9,

    // To make the face follow the mouse.
    followMouse: true,

    // head should slowly drift (overrides lookAt)
    slowDrift: false,
  });

  // add viewer to DOM
  const container = document.getElementById("logo-container");
  container.appendChild(viewer.container);
}

const withdrawCheckbox = ref(false);
// 判断是否安装ethereum钱包
const isEthereum = ref(false);
// 连接状态
const connectState = ref(null);
// 页面状态
const pageState = ref(false);
const pageType = ref('Deposit');
const inputs = reactive({
  value1: '',
  value2: ''
})

const web3 = {
  provider: null,
  signer: null,
  ethProvider: null,
  ethSigner: null,
  zkProvider: null,
  zkSigner: null,
};

const userWallet = reactive({
  balance: null,
  zkBalance: null,
  address: null,
});

(async () => {

  if (typeof window.ethereum !== "undefined") {

    isEthereum.value = true;
    let provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    try {
      let signer = await provider.getSigner();
      let address = await signer.getAddress();
      store.setWallet('address', address);

      store.setWeb3('signer', signer);
      // connectState.value = "success";
      pageState.value = true;
      store.setWallet('state', "success");

      // initData();
    } catch (error) {
      // console.error(error);
      // connectState.value = null;
      store.setWallet('state', null);
      pageState.value = true;
    }
    window.ethereum.on('accountsChanged', (accounts) => {

      if (accounts.length == 0) {
        // connectState.value = null;
        store.setWallet('state', null);
        nextTick(() => {
          setMetamaskLogo();
        })
      }
    });
  } else {
    pageState.value = true;
  }
})();

const Download = () => {
  window.open(
    "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
    "_blank"
  );
};
// 连接到钱包账户
const clickConnectWallet = async () => {

  connectWallet(async () => {

  });

};

// 连接钱包后获取初始化数据
const initData = async () => {
  web3.ethProvider = new ethers.providers.JsonRpcProvider(
    network[store.config.L1][store.config.network].rpcUrls[0]
  );

  web3.zkProvider = new micro.Provider(
    network[store.config.L2][store.config.network].rpcUrls[0]
  );
  initEth();
  initZks();
  estimateGas();
};

const feeStatue1 = ref(false);
const gasusd1 = ref(0);
const gasLimit1 = ref(null);


const gasusd2 = ref(0.005);
const gasLimit2 = ref(null);

const estimateGas = async (type) => {

  if (pageType.value == 'Deposit') {
    // signer.estimateGasDeposit()
    feeStatue1.value = false;
    const signer = micro.L1Signer.from(toRaw(store.web3.signer), web3.zkProvider);

    try {

      const gas = await signer.estimateGasDeposit({
        token: micro.utils.ETH_ADDRESS,
        amount: ethers.utils.parseEther("0.0000000001")

      })

      const gsaL2 = await micro.utils.estimateDefaultBridgeDepositL2Gas(web3.ethProvider, web3.zkProvider, micro.utils.ETH_ADDRESS, ethers.utils.parseEther("0.0000000001"), store.wallet.address);

      let gasPrice = await web3.ethProvider.getGasPrice();
      const value = await signer.getBaseCost({ gasLimit: gsaL2 });

      gasLimit1.value = gas;
      const l1Gasusd = parseFloat(ethers.utils.formatUnits(gas.mul(gasPrice)));
      const l2Gasusd = parseFloat(ethers.utils.formatUnits(value));
      feeStatue1.value = true;
      gasusd1.value = formatNumber(l1Gasusd + l2Gasusd, 8, 1);

      receivedAmount1.value = inputs.value1 - gasusd1.value > 0 ? inputs.value1 - gasusd1.value : 0.00

      if (userWallet.balance == 0) {
        message.title = "Insufficient balance";
        message.type = "error";
        message.content = `Not enough balance for deposit. Under the provided gas price, the recommended balance to perform a deposit is ${gasusd1.value} ETH`;
      }
    } catch (error) {
      console.log(error);
      feeStatue1.value = true;
      gasusd1.value = 0.1;
      receivedAmount1.value = inputs.value1 - gasusd1.value > 0 ? inputs.value1 - gasusd1.value : 0.00

      if (userWallet.balance == 0) {
        message.title = "Insufficient balance";
        message.type = "error";
        message.content = `Not enough balance for deposit. Under the provided gas price, the recommended balance to perform a deposit is ${gasusd1.value} ETH`;
      }
    }

  } else {
    let gasPrice = await web3.zkProvider.getGasPrice();

    console.log(ethers.utils.formatUnits(gasPrice))
    let gas = await web3.zkProvider.estimateGasWithdraw({
      token: micro.utils.ETH_ADDRESS,
      from: store.wallet.address,
      to: store.wallet.address,
      amount: ethers.utils.parseEther('0.000001'),
    })
    gasLimit2.value = gas;
    console.log(ethers.utils.formatUnits(gas));
    gasusd2.value = formatNumber(ethers.utils.formatUnits(gas.mul(gasPrice)), 8, 1);

    receivedAmount2.value = inputs.value2 - gasusd2.value > 0 ? inputs.value2 - gasusd2.value : 0.00
  }
}

const initEth = async () => {

  userWallet.balance = null;
  const balance = await web3.ethProvider.getBalance(store.wallet.address);
  userWallet.balance = ethers.utils.formatUnits(balance, 18);


};

const initZks = async () => {
  userWallet.zkBalance = null;
  const balance = await web3.zkProvider.getBalance(store.wallet.address);
  userWallet.zkBalance = ethers.utils.formatUnits(balance, 18);



};


// L1存入L2
const depositLoading = ref(null);
const Deposit = async () => {


  try {
    depositLoading.value = 'waiting';

    await switchEthereumChain(store.config.L1);
    const signer = micro.L1Signer.from(toRaw(store.web3.signer), web3.zkProvider);



    const deposit = await signer.deposit({
      token: micro.utils.ETH_ADDRESS,
      amount: ethers.utils.parseEther(receivedAmount1.value.toString())

    });


    setTimeout(() => {
      depositLoading.value = 'success';
      inputs.value1 = '';
      initEth();
      initZks();
    }, 5000);

  } catch (error) {

    if (error.message.search('user rejected transaction') != "-1") {
      showMessage.value = true;
      depositLoading.value = 'success';
      setTimeout(() => {
        showMessage.value = false;
      }, 3000);
      return;
    }

    depositLoading.value = 'fail';
    message.title = "An error occured";
    message.type = "error";
    message.content = error.message;
  }
};

// L2取出L1
const withdrawLoading = ref(null);
const Withdraw = async () => {

  try {
    withdrawLoading.value = 'waiting';
    await switchEthereumChain(store.config.L2);
    const signer = new micro.Web3Provider(window.ethereum).getSigner();
    const withdrawL2 = await signer.withdraw({
      token: micro.utils.ETH_ADDRESS,
      amount: ethers.utils.parseEther(receivedAmount2.value.toString()),
    });

    setTimeout(() => {

      withdrawLoading.value = 'success';
      inputs.value2 = '';
      initEth();
      initZks();
    }, 5000);
    // await withdrawL2.waitFinalize();
    // withdrawLoading.value = 'success';
    // inputs.value2 = '';
    // initEth();
    // initZks();
  } catch (error) {

    if (error.message.search('user rejected transaction') != "-1") {
      showMessage.value = true;
      withdrawLoading.value = 'success';
      setTimeout(() => {
        showMessage.value = false;
      }, 3000);
      return;
    }
    console.error(error);
    withdrawLoading.value = 'fail';
    message.title = "An error occured";
    message.type = "error";
    message.content = error.message;
  }
}

// 切换Deposit/Withdraw
const switchDepositWithdraw = (name) => {
  if (name == 'Deposit') {
    depositLoading.value = "disabled";

  }
  
  message.title = null;
  message.type = null;
  message.content = null;
  pageType.value = name;
  initEth();
  initZks();
  estimateGas();
}

// 切换/添加换链
const switchEthereumChain = (networkName) => {
  return new Promise(async (resolve, reject) => {
    // 获取当前链id
    const chainId = await window.ethereum.request({
      method: "eth_chainId",
    });
    console.log(parseInt(chainId));
    console.log(network[networkName][store.config.network].chainId);
    if (parseInt(chainId) === network[networkName][store.config.network].chainId) {
      resolve();
      return;
    }
    console.log(parseInt(network[networkName][store.config.network].chainId));
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            chainId: ethers.utils.hexValue(
              parseInt(network[networkName][store.config.network].chainId)
            ),
          },
        ],
      });
      resolve();
    } catch (switchError) {
      console.error(switchError);
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          let params = network[networkName][store.config.network];
          params.chainId = ethers.utils.hexValue(
            parseInt(network[networkName][store.config.network].chainId)
          );

          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [params],
          });
          resolve();
        } catch (addError) {
          // handle "add" error
          reject();
        }
      }
      reject();
      // handle other "switch" errors
    }
  });
};
</script>
<style lang="less" scoped>
.token-balance-label {
  margin-bottom: 0;
}

.balance-input {
  height: auto;
}

.svg-div {
  margin-left: 10px;
  width: 15px;
  height: 15px;
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;
  }
}

.thirdPartBridge-div {
  background-color: #fff;
  margin-top: 20px;
  border-radius: 8px;
  display: flex;
  padding: 1.2rem 32px;
  flex-direction: column;
  margin-bottom: 50px;

  .p1 {
    color: #374151;
    font-size: 22px;
    font-weight: 700;
  }

  .p2 {
    color: #374151;
    font-size: 14px;
    margin-top: 15px;
  }

  .link-div {
    border-radius: 8px;
    border: 1px solid #93a3af;
    margin-top: 25px;
    display: flex;
    padding: 10px;
    align-items: center;

    .img1 {
      width: 64px;
      height: 64px;
    }
    .img2 {
      width: 32px;
      height: 32px;
    }
    .p-div{
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 15px;
      justify-content: center;

      .p1{
        color: #374151;
        font-size: 14px;
        font-weight: 500;
      }

      .p2{
        color: #93a3af;
        font-size: 14px;
        font-weight: 500;
        margin-top: 5px;
      }
    }
  }
}

@import "@/assets/css/index-74a178c7.css";
@import "@/assets/css/index-334a0f3b.css";
@import "@/assets/css/validators-df5d61e7.css";
@import "@/assets/css/bridge-035396c5.css";
@import "@/assets/css/deposit-2f91d7ec.css";</style>
