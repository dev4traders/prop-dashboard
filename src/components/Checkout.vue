<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<template>
  <header
      class="z-50 w-full h-[80px] px-[20px] flex justify-between items-center shadow shadow-[0_4px_15px_rgba(47,48,45,0.1)] bg-white transition-all duration-300 ease-linear dark:bg-toggle">
    <div class="container mx-auto">
      <div class="header-left flex justify-between items-center">
        <div class="logo h-[80px] flex items-center">
          <router-link to="/">
            <img class="inline-block h-[50px] hidden dark:block" src="/assets/img/logo/logo-s.png" alt="logo">
            <img class="inline-block h-[50px] block dark:hidden" src="/assets/img/logo/logo-dark.png" alt="logo">
          </router-link>
        </div>
        <button
            @click="toggleDark()"
            class="flex justify-center items-center w-[48px] h-[48px] rounded-full transition-all duration-300 ease-linear outline-0 cursor-pointer bg-dark dark:bg-white"
        >
        <span class="icon block dark:hidden">
          <svg class="stroke-white w-[17px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </span>
          <span class="icon hidden dark:block">
          <svg class="stroke-dark w-[17px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
        </span>
        </button>
      </div>
    </div>
  </header>
  <main class="relative pt-[30px] px-[20px] transition-all duration-300 ease-linear">
    <div class="container mx-auto">
      <div class="dashboard-wrapper">
        <div class="flex flex-wrap justify-center mx-[-30px] mt-[30px]">
          <div class="2xl:w-5/12 lg:w-6/12 w-full px-[30px]">
            <!-- order summary start-->
            <div
                class="md:p-[30px] p-[20px] mb-[30px] rounded-[10px] bg-[#F5F9FF] relative z-10 overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.13)] dark:bg-toggle">
              <div
                  class="flex items-center text-[22px] text-dark leading-[1.5] font-medium tracking-[-0.06px] pb-[10px] mb-[20px] border-b border-dark/10 dark:text-white">
                <svg class="w-[24px] h-[24px] mr-[10px] stroke-primary" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
                </svg>
                Order Summary
              </div>
              <div class="content">
                <div class="order-list">
                  <div class="flex justify-between items-center border-b border-dark/10 pb-[10px] mb-[10px]">
                    <p class="text-dark/50 text-[16px] font-semibold dark:text-white">Plan</p>
                    <p class="text-dark/50 text-[16px] font-semibold dark:text-white">Evaluation-15000 USD</p>
                  </div>
                  <div class="flex justify-between items-center border-b border-dark/10 pb-[10px] mb-[10px]">
                    <p class="text-dark/50 text-[16px] font-semibold dark:text-white">Price</p>
                    <p class="text-dark/50 text-[16px] font-semibold dark:text-white">$99</p>
                  </div>
                  <div class="flex justify-between items-center border-b border-dark/10 pb-[10px] mb-[10px]">
                    <p class="text-dark/50 text-[16px] font-semibold dark:text-white">Discount</p>
                    <p class="text-dark/50 text-[16px] font-semibold dark:text-white">-$0.00</p>
                  </div>
                  <div class="flex justify-between items-center">
                    <p class="text-dark text-[16px] font-semibold dark:text-white">Total Amount</p>
                    <p class="text-dark text-[16px] font-semibold dark:text-white">$99</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- payment start-->
            <div
                class="md:p-[30px] p-[20px] mb-[30px] rounded-[10px] bg-[#F5F9FF] relative z-10 overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.13)] dark:bg-toggle">
              <div
                  class="flex items-center text-[22px] text-dark leading-[1.5] font-medium tracking-[-0.06px] pb-[10px] mb-[20px] border-b border-dark/10 dark:text-white">
                <svg class="w-[24px] h-[24px] mr-[10px] stroke-primary" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/>
                </svg>
                Payment
              </div>
              <div class="content">
                <h3 class="xl:text-[20px] text-[18px] text-dark font-medium dark:text-white">Confirm your payment</h3>
                <p class="max-w-[600px] text-[16px] text-dark mb-[40px] dark:text-white/70">
                  Kindly confirm your payment. After confirmation, you’ll be charged according to the selected plan from
                  your payment account.
                </p>
                <div class="flex flex-wrap justify-center mx-[-15px]">
                  <div class="md:w-6/12 w-full px-[15px]">
                    <div class="input-wrap mb-[30px]">
                      <label class="block text-dark font-medium xl:text-[18px] text-[16px] mb-[10px] dark:text-white">First Name</label>
                      <input
                          class="w-full h-[50px] bg-transparent outline-0 pl-[20px] placeholder:text-[14px] border border-dark rounded-[5px] dark:border-white/70"
                          type="text" placeholder="First Name">
                    </div>
                  </div>
                  <div class="md:w-6/12 w-full px-[15px]">
                    <div class="input-wrap mb-[30px]">
                      <label class="block text-dark font-medium xl:text-[18px] text-[16px] mb-[10px] dark:text-white">Last Name</label>
                      <input
                          class="w-full h-[50px] bg-transparent outline-0 pl-[20px] placeholder:text-[14px] border border-dark rounded-[5px] dark:border-white/70"
                          type="text" placeholder="Last Name">
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap justify-center mx-[-15px]">
                  <div class="md:w-6/12 w-full px-[15px]">
                    <div class="input-wrap mb-[30px]">
                      <label class="block text-dark font-medium xl:text-[18px] text-[16px] mb-[10px] dark:text-white">E-mail</label>
                      <input
                          class="w-full h-[50px] bg-transparent outline-0 pl-[20px] placeholder:text-[14px] border border-dark rounded-[5px] dark:border-white/70"
                          type="text" placeholder="example@gmail.com">
                    </div>
                  </div>
                  <div class="md:w-6/12 w-full px-[15px]">
                    <div class="input-wrap mb-[30px]">
                      <label class="block text-dark font-medium xl:text-[18px] text-[16px] mb-[10px] dark:text-white">Select
                        Country</label>
                      <div class="select-wrap mb-[20px] relative">
                        <select
                            class="w-full h-[50px] bg-transparent outline-0 pl-[20px] placeholder:text-[14px] border border-dark rounded-[5px] appearance-none dark:border-white/70"
                            type="text">
                          <option>Select country</option>
                          <option>Eng</option>
                          <option>Ind</option>
                          <option>Aus</option>
                        </select>
                        <div class="icon absolute right-[20px] top-[50%] translate-y-[-50%] pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                               stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="payment-form">
                  <label class="block text-dark font-medium xl:text-[18px] text-[16px] mb-[10px] dark:text-white" for="">
                    Card Number
                  </label>
                  <div class="input-wrap flex gap-[10px] w-full border border-dark rounded-[5px] relative mb-[30px] dark:border-white/70">
                    <svg class="w-[20px] h-[18px] absolute left-[10px] top-[50%] translate-y-[-50%] pointer-events-none"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/>
                    </svg>
                    <input
                        class="md:flex-1 w-[60%] h-[50px] bg-transparent border-none outline-0 md:pl-[50px] pl-[40px] placeholder:text-[14px]"
                        type="text" placeholder="Card number">
                    <input
                        class="md:w-[80px] w-[60px] text-center h-[50px] bg-transparent border-none outline-0 placeholder:text-[14px]"
                        type="text" placeholder="MM / YY">
                    <input
                        class="md:w-[60px] w-[60px] text-center h-[50px] bg-transparent border-none outline-0 placeholder:text-[14px]"
                        type="text" placeholder="CVC">
                  </div>
                  <div class="input-wrap mb-[30px]">
                    <label class="block text-dark font-medium xl:text-[18px] text-[16px] mb-[10px] dark:text-white" for="">Do you have
                      any coupon?</label>
                    <div class="flex w-full border border-dark rounded-[5px] relative dark:border-white/70">
                      <button
                          class="px-[30px] h-[100%] absolute right-0 top-[50%] translate-y-[-50%] bg-primary text-white border-0"
                          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor">
                        Apply
                      </button>
                      <input
                          class="w-full h-[50px] bg-transparent border-none outline-0 pl-[20px] placeholder:text-[14px]"
                          type="text" placeholder="Coupon Code">
                    </div>
                  </div>
                  <div class="flex mb-[30px]">
                    <div class="flex mr-[10px] pt-[8px]">
                      <input class="w-[15px] h-[15px]" type="checkbox" name="agree" id="apply">
                    </div>
                    <div class="info">
                      <label class="text-dark xl:text-[18px] text-[16px] font-medium leading-[1.7] cursor-pointer dark:text-white"
                             for="apply">
                        I Declare That I Have Read And Agree With <a href="#" class="text-primary">Terms & Condition</a>,
                        <a href="#" class="text-primary">Risk Disclosure</a> &
                        <a href="#" class="text-primary">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                  <div class="input-btn mb-[30px]">
                    <button
                        class="inline-flex items-center justify-center bg-primary text-white xl:py-[8px] py-[15px] xl:px-[50px] px-[30px] font-semibold rounded-[5px] xl:min-h-[50px] capitalize">
                      Confirm Payment
                    </button>
                  </div>
                  <div class="flex justify-between items-center gap-[20px] border-t border-dark/10 py-[10px] px-[15px] rounded-[5px] dark:bg-white">
                    <div class="image-wrap">
                      <img src="/assets/img/bank/norton.svg" alt="bank">
                    </div>
                    <div class="image-wrap">
                      <img src="/assets/img/bank/mcfee.svg" alt="bank">
                    </div>
                    <div class="image-wrap">
                      <img src="/assets/img/bank/visever.svg" alt="bank">
                    </div>
                    <div class="image-wrap">
                      <img src="/assets/img/bank/truste.svg" alt="bank">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="2xl:w-5/12 lg:w-6/12 w-full px-[30px]">
            <div
                class="flex md:p-[30px] p-[20px] mb-[30px] rounded-[10px] bg-[#F5F9FF] relative z-10 overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.13)] dark:bg-toggle">
              <div class="thumb">
                <svg class="w-[60px] mr-[10px]" width="60" height="60" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 100 100"
                     shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                  <g id="e71mu0h2A952_ts" transform="translate(53.8,46.9) scale(1,1)">
                    <g transform="translate(-53.8,-46.9)">
                      <g>
                        <polygon points="62.2,52.5 68.4,32.9 64.1,37.3 59.7,51.1" class="fill-dark"></polygon>
                        <polygon points="59,50.7 62.8,38.6 58.5,43.1 56.5,49.4" class="fill-dark"></polygon>
                        <path d="M71.9,57.6L78,38.4c-.5-1.3-1.1-2.5-1.8-3.6L69.4,56.3l2.5,1.3Z"
                              class="fill-dark"></path>
                        <path d="M75.2,59.4l4.6-14.5c-.2-1.8-.7-3.5-1.3-5.2L72.7,58l2.5,1.4Z" class="fill-dark"></path>
                        <path d="M77.4,60.6C79.3,57,80,52.7,80,48.3c0-.5,0-.9,0-1.4L76,59.8l1.4.8Z"
                              class="fill-dark"></path>
                        <path d="M63,52.8l2.5,1.3L73,30.3c-.3-.4-.7-.7-1-1.1l-2.3,2.4L63,52.8Z"
                              class="fill-dark"></path>
                        <polygon points="57.2,44.4 53.8,47.9 55.8,49" class="fill-dark"></polygon>
                        <path d="M68.7,55.9l6.9-22.1c-.6-1-1.3-1.9-2-2.8L66.2,54.5l2.5,1.4Z" class="fill-dark"></path>
                      </g>
                    </g>
                  </g>
                  <g>
                    <path d="M69.4,26.6c-4-3.7-10-6.2-16.3-6.3L53,43.6l16.4-17Z" class="fill-primary"></path>
                    <path
                        d="M48.7,20.1C32.2,20.1,20,33.5,20,50s13.4,29.9,29.9,29.9c11.6,0,22.3-6.8,26.3-15.6L49.3,50v-29.8c-.2-.1-.4-.1-.6-.1Z"
                        class="fill-primary"></path>
                  </g>
                </svg>
              </div>
              <div class="content">
                <h3
                    class="text-[22px] text-dark leading-[1.5] font-medium tracking-[-0.06px] mb-[10px] dark:text-white">
                  Get 115% Refund!
                </h3>
                <p class="text-dark dark:text-white/70">
                  The only prop firm to offer a 115% Refund from the start during your first profit split, to reward
                  promising traders for their skills and hard work.
                </p>
              </div>

            </div>
            <div
                class="flex md:p-[30px] p-[20px] mb-[30px] rounded-[10px] bg-[#F5F9FF] relative z-10 overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.13)] dark:bg-toggle">
              <div class="thumb">
                <svg class="w-[60px] mr-[10px]" width="60" height="60" id="eRgerznCjqO1"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" shape-rendering="geometricPrecision"
                     text-rendering="geometricPrecision">
                  <g id="eRgerznCjqO2_tr" transform="translate(87.1,60.5) rotate(0)">
                    <g transform="translate(-87.1,-60.5)">
                      <path
                          d="M61.2,57.8c-.3.1-1.8.5-3.7,1-1.2.3-2.4.6-3.5.9l-.2.1c-4.2,1.1-8.6,2.3-9.5,2.5-.1,0-.3,0-.4,0-.4,0-.7,0-1.1-.1L27.9,52.5l-2.7-2v0c-.1-.1-.3-.2-.4-.2-.2-.1-.4-.2-.6-.3-.2,0-.4,0-.6-.1-.2,0-.4,0-.6,0-.3,0-.5,0-.8.1-2.2.2-3.9,2-3.9,4.3c0,1.2.5,2.3,1.3,3v0v0c.3.3.7.6,1.1.8l1,.7l23.4,17v0c.1,0,.2.1.3.1.5.2,1.1.3,1.7.3.3,0,.7,0,1-.1h.1c7.9-2,24.3-6.2,32-8.1.2-.1.4-.1.6-.2c2-.5,4.6-1.1,6.3-1.1v-1.1v0-1.5-9.7-.4-.1c-5,0-8-3-11.7-5.6-2.7-1.9-5.6-3.5-9.9-3.5-1.9,0-3.6,0-4.9.1h-10.2c-1.5,0-2.7,1.2-2.7,2.7s1.2,2.7,2.7,2.7h5.7h3.8c1.9.3,3.4,2,3.4,4c0,1.5-.9,2.8-2.1,3.5Z"
                          class="fill-primary"></path>
                    </g>
                  </g>
                  <g id="eRgerznCjqO4_to" transform="translate(35.75,39.599998)">
                    <g id="eRgerznCjqO4_ts" transform="scale(1,1)">
                      <g transform="translate(-35.75,-39.599998)">
                        <g>
                          <g>
                            <path
                                d="M24,39.6c0,6.5,5.3,11.8,11.8,11.8s11.7-5.4,11.7-11.8-5.3-11.8-11.8-11.8-11.7,5.3-11.7,11.8Z"
                                class="fill-primary"></path>
                            <g>
                              <path
                                  d="M41,45.2c-.5.7-1.1,1.2-2,1.6s-1.9.6-3.1.6v1.7h-.9v-1.8c-1.6-.1-2.9-.6-3.8-1.4s-1.5-2-1.7-3.3h4c.1.5.2.9.5,1.1.3.3.6.5,1.1.6v-3.3c-.2-.1-.4-.1-.5-.2-1-.3-1.9-.6-2.6-.9s-1.3-.7-1.7-1.4c-.5-.6-.7-1.4-.7-2.5c0-.9.2-1.7.7-2.4s1.1-1.1,2-1.5c.9-.3,1.8-.6,2.8-.6v-1.8h.9v1.8c1.6.1,2.9.6,3.8,1.4s1.5,1.8,1.6,3.2h-4c-.1-.5-.2-.8-.5-1.1-.2-.3-.5-.5-.9-.6v3.4l.7.2c1,.3,1.9.6,2.6,1c.6.3,1.2.7,1.7,1.4.5.6.7,1.4.7,2.4s-.2,1.8-.7,2.4v0ZM33.9,37c.3.3.6.5,1.1.7v-3.2c-.5.1-.9.2-1.1.4-.3.2-.4.6-.4,1c0,.5.1.8.4,1.1Zm3.3,7.2c.3-.3.5-.6.5-1.1c0-.4-.2-.7-.5-1s-.7-.5-1.3-.7v3.3c.6-.1,1-.3,1.3-.5Z"
                                  fill="#fff"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="content">
                <h3
                    class="text-[22px] text-dark leading-[1.5] font-medium tracking-[-0.06px] mb-[10px] dark:text-white">
                  Keep up to 90% of your profit
                </h3>
                <p class="text-dark dark:text-white/70">
                  In order to recognize your skills & efforts, UWM is offering up to 90% profit sharing with our
                  traders!
                </p>
              </div>
            </div>
            <div
                class="flex md:p-[30px] p-[20px] mb-[30px] rounded-[10px] bg-[#F5F9FF] relative z-10 overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.13)] dark:bg-toggle">
              <div class="thumb">
                <svg class="w-[60px] mr-[10px]" width="60" height="60" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 100 100" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                  <g id="e7LqVuKfdv12_tr" transform="translate(50.000002,50.000002) rotate(0)">
                    <g transform="translate(-50.000002,-50.000002)">
                      <g>
                        <path
                            d="M20.3,50l-3.6,3.3l4.2,2.5L18,59.7l4.6,1.6-2.1,4.4l4.8.7-1.2,4.7L29,71l-.2,4.9l4.7-1.2.7,4.8l4.4-2.1L40.2,82l3.9-2.9l2.5,4.2l3.3-3.6l3.3,3.6l2.5-4.2L59.6,82l1.6-4.6l4.4,2.1.7-4.8L71,75.9v-4.9l4.9.2-1.2-4.7l4.8-.7-2.1-4.4L82,59.8l-2.9-3.9l4.2-2.5L79.7,50l3.6-3.3-4.2-2.5L82,40.3l-4.6-1.6l2.1-4.4-4.8-.7l1.2-4.7L71,29l.2-4.9-4.7,1.2-.7-4.8-4.4,2.1L59.7,18l-3.9,2.9-2.5-4.2L50,20.3l-3.3-3.6-2.5,4.2L40.3,18l-1.6,4.6-4.4-2.1-.7,4.8-4.7-1.2L29,29l-4.9-.2l1.2,4.7-4.8.7l2.1,4.4L18,40.3l2.9,3.9-4.2,2.5L20.3,50Zm56.2,0l-3.9,2.2L76,55.1l-4.3,1.4L74.5,60l-4.4.5l2,4-4.5-.3l1.2,4.3-4.3-1.2.3,4.5-4-2-.5,4.4-3.5-2.8-1.4,4.3-2.9-3.4-2.2,3.9-2.2-3.9-2.9,3.4-1.4-4.3-3.5,2.8-.5-4.4-4,2l.3-4.5-4.3,1.2L33,64.2l-4.5.3l2-4-4.4-.5l2.8-3.5-4.2-1.4l3.4-2.9L24.2,50l3.9-2.2-3.4-2.9L29,43.5L26.1,40l4.4-.5-2-4l4.5.3-1.2-4.3l4.3,1.2-.3-4.5l4,2l.5-4.4l3.5,2.8l1.4-4.3l2.9,3.4l2.2-3.9l2.2,3.9l2.9-3.4l1.4,4.3l3.5-2.8.5,4.4l4-2-.3,4.5l4.3-1.2-1.2,4.3l4.5-.3-2,4l4.4.5-2.8,3.5l4.2,1.4-3.4,2.9l4,2.2Z"
                            class="fill-primary"></path>
                      </g>
                    </g>
                  </g>
                  <g id="e7LqVuKfdv15_ts" transform="translate(50.300001,50) scale(1,1)">
                    <g transform="translate(-50.300001,-50)">
                      <g>
                        <path
                            d="M29.8,50c0,11.3,9.2,20.5,20.5,20.5s20.5-9.2,20.5-20.5-9.2-20.5-20.5-20.5-20.5,9.2-20.5,20.5Z"
                            class="fill-primary"></path>
                        <g>
                          <path
                              d="M59.5,59.9c-.8,1.2-1.9,2.1-3.4,2.8s-3.3,1.1-5.4,1.1v3h-1.6v-3.1c-2.8-.2-5-1.1-6.7-2.5s-2.7-3.4-2.9-5.8h6.9c.1.8.3,1.5.8,2c.5.6,1.1.9,1.9,1.1v-6c-.4-.1-.7-.2-.8-.3-1.8-.5-3.3-1.1-4.5-1.6s-2.2-1.3-3-2.4-1.3-2.5-1.3-4.3c0-1.5.4-2.9,1.3-4.1.8-1.2,2-2,3.5-2.7c1.5-.6,3.1-1,4.9-1v-3.1h1.6v3.1c2.8.2,5,1,6.6,2.4s2.6,3.2,2.8,5.5h-7c-.1-.8-.4-1.4-.8-1.9s-.9-.8-1.6-1v5.9l1.2.4c1.8.6,3.3,1.1,4.5,1.7c1.1.5,2.1,1.3,3,2.4.8,1.1,1.2,2.4,1.2,4.2-.1,1.7-.4,3-1.2,4.2ZM47.1,45.5c.5.5,1.1.9,2,1.3v-5.5c-.9.1-1.5.3-2,.7s-.7,1-.7,1.8c0,.7.2,1.2.7,1.7ZM52.9,58c.5-.5.8-1.1.8-1.9c0-.7-.3-1.3-.8-1.8s-1.2-.9-2.2-1.2v5.7c1,0,1.7-.3,2.2-.8Z"
                              fill="#fff"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="content">
                <h3
                    class="text-[22px] text-dark leading-[1.5] font-medium tracking-[-0.06px] mb-[10px] dark:text-white">
                  Reach $2M Account Balance
                </h3>
                <p class="text-dark dark:text-white/70">
                  If you remain consistent & profitable, you will be eligible for a 25% increase in account balance
                  every 3 months, all the way up to $2 million.
                </p>
              </div>
            </div>
            <!-- payment method start-->
            <div
                class="md:p-[30px] p-[20px] mb-[30px] rounded-[10px] bg-[#F5F9FF] relative z-10 overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.13)] dark:bg-toggle">
              <h2 class="flex items-center text-[22px] text-dark leading-[1.5] font-medium tracking-[-0.06px] dark:text-white">
                Need other payment method?
              </h2>
              <p class="text-dark mb-[30px] dark:text-white/70">Select your preferred payment option below</p>
              <div class="content">
                <div
                    class="grid lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] grid-cols-[1fr_1fr] gap-[30px]">
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/bank-transfer.svg" alt="bank">
                    </div>
                    <span
                        class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      Bank Transfer
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/btc.svg" alt="bank">
                    </div>
                    <span
                        class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      BitCoin
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/eth.svg" alt="bank">
                    </div>
                    <span
                        class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      Ethereum
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/solana.svg" alt="bank">
                    </div>
                    <span
                        class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      Solana
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/usdc.svg" alt="bank">
                    </div>
                    <span
                        class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      USDC(ERC20)
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/usdc-trc20.svg" alt="bank">
                    </div>
                    <span
                        class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      USDC(TRC20)
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/perfect-money.svg" alt="bank">
                    </div>
                    <span
                        class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      Perfect Money
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/tether.svg" alt="bank">
                    </div>
                    <span
                        class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      USDT(TRC20)
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/tether.svg" alt="bank">
                    </div>
                    <span
                        class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      USDT(ERC20)
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/doge-coin.svg" alt="bank">
                    </div>
                    <span
                        class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      DogeCoin
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/lite-coin.svg" alt="bank">
                    </div>
                    <span
                        class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      LiteCoin
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/wmz-purse.svg" alt="bank">
                    </div>
                    <span
                        class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      WebMoney
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "checkout",
  data() {
    return {
      isMenubar: false,
      isUserInfo: false,
      isNotification: false,
      isSidebar: true,
    }
  }
}
</script>

<style scoped>

</style>