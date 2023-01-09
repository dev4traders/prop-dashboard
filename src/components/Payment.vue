<template>
  <header class="header-area" :class="isSidebar ? 'header-area' : 'xl:!w-[calc(100%-73px)] xl:!ml-[73px]'">
    <div class="header-left">
      <div class="toggle-menu group xl:!flex !hidden" @click="isSidebar = !isSidebar">
        <svg class="toggle-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
        </svg>
      </div>
      <div class="logo text-center h-[80px] xl:!hidden !flex items-center justify-center">
        <router-link to="/">
          <img class="inline-block h-[50px] hidden dark:block" src="/assets/img/logo/logo-s.png" alt="logo">
          <img class="inline-block h-[50px] block dark:hidden" src="/assets/img/logo/logo-dark.png" alt="logo">
        </router-link>
      </div>
    </div>
    <div class="header-right">
      <router-link to="/billing" class="trading-btn group md:!flex !hidden">
        <svg class="trading-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"></path>
        </svg>
        Start Trading
      </router-link>
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
      <div class="h-notification group">
        <div class="hn-icon group-hover:bg-dark" @click="isNotification = !isNotification">
          <svg class="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
          </svg>
        </div>
        <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 scale-75"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition duration-300 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-75">
          <div class="notification-open" v-if="isNotification">
            <h1 class="text-dark font-bold pb-[15px] mb-[20px] border-b border-dark dark:text-white dark:border-white">Notifications</h1>
            <div class="content text-center">
              <p>No Notification Here</p>
            </div>
          </div>
        </transition>
      </div>
      <div class="author-wrapper relative lg:!flex !hidden">
        <div class="author-wrap cursor-pointer" @click="isUserInfo = !isUserInfo">
          <div class="thumb">
            <img class="w-[40px] h-[40px] rounded-[5px]" src="/assets/img/author/author.jpeg" alt="author">
          </div>
          <div class="name ml-[15px]">
            d4t
            <svg class="inline-block w-[24px] h-[24px] fill-dark dark:fill-white" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 10l5 5 5-5z"></path>
            </svg>
          </div>
        </div>
        <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 scale-75"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition duration-300 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-75">
          <div
              class="user-info-open absolute right-0 top-[70px] md:w-[228px] w-[280px] py-[10px] px-[20px] bg-white rounded-[10px] shadow-[0_4px_10px_rgba(64,123,255,0.13)] lg:origin-center origin-right dark:bg-dark"
              v-if="isUserInfo">
            <ul>
              <li class="border-b border-[#DFE5F2]">
                <a href="#" class="block text-primary text-[18px] leading-[1.5] tracking-[-0.05px] py-[10px] dark:group-hover:!fill-primary">
                  mikha.dev@gmail.com
                </a>
              </li>
              <li class="border-b border-[#DFE5F2] group">
                <router-link to="/profile" class="flex items-center text-[#4A485F] text-[18px] leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 ease-linear group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                  <svg class="w-[22px] h-[22px] mr-[10px] fill-[#4A485F] transition-all duration-350 ease-linear group-hover:!fill-primary dark:fill-white dark:group-hover:!fill-primary" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                  </svg>
                  My Profile
                </router-link>
              </li>
              <li class="group">
                <router-link to="/login" class="flex items-center text-[#4A485F] text-[18px] leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 ease-linear group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                  <svg class="w-[22px] h-[22px] mr-[10px] fill-[#4A485F] transition-all duration-350 ease-linear group-hover:!fill-primary dark:fill-white dark:group-hover:!fill-primary" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z"></path>
                  </svg>
                  Logout
                </router-link>
              </li>
            </ul>
          </div>
        </transition>
      </div>
      <div class="mobile-bar group" @click="isMenubar = !isMenubar">
        <svg class="mobile-bar-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </div>
    </div>
  </header>
  <div class="menu-overlay"
       :class="isMenubar ? 'fixed z-[99] left-0 top-0 w-full h-full bg-dark/80 cursor-pointer' : 'hidden'"
       @click="isMenubar = !isMenubar"></div>
  <aside class="sidebar" :class="[isSidebar ? 'sidebar' : 'sidebar-toggle xl:!w-[73px]', isMenubar ? '!left-0' : '']">
    <div class="logo text-center h-[80px] flex items-center justify-center">
      <router-link to="/">
        <img class="inline-block h-[50px]" src="/assets/img/logo/logo-s.png" alt="logo">
      </router-link>
    </div>
    <div class="lg:hidden flex flex-wrap flex-col items-center justify-center">
      <img class="w-[55px] h-[55px] rounded-full" src="/assets/img/author/author.jpeg" alt="author">
      <h4 class="text-white text-[15px] mt-[8px]">mikha dev</h4>
      <p class="text-primary text-[12px] mt-[8px]">mikha.dev@gmail.com</p>
    </div>
    <div class="main-menu">
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link group">
            <svg class="nav-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
            </svg>
            <span class="text">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/trading-overview" class="nav-link group">
            <svg class="nav-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path
                  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path>
            </svg>
            <span class="text">Trading Overview</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/utilities" class="nav-link group">
            <svg class="nav-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path
                  d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path>
            </svg>
            <span class="text">Utilities</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/withdraw" class="nav-link group">
            <svg class="nav-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path>
            </svg>
            <span class="text">Withdraw</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="top-up-reset" class="nav-link group">
            <svg class="nav-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path
                  d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"></path>
            </svg>
            <span class="text">Top-up & Reset</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/billing" class="nav-link group">
            <svg class="nav-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path
                  d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
            </svg>
            <span class="text">Billing</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/news-calendar" class="nav-link group">
            <svg class="nav-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path
                  d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
            </svg>
            <span class="text">News Calendar</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/help" class="nav-link group">
            <svg class="nav-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path
                  d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"></path>
            </svg>
            <span class="text">Help</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/courses" class="nav-link group">
            <svg class="nav-icon" fill="none" stroke-width="1.5" stroke="currentColor" focusable="false"
                 viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"/>
            </svg>
            <span class="text">Courses</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="app-info" :class="isSidebar ? 'flex' : 'xl:hidden'">
      <span>Available On</span>
      <a href="#"><img src="/assets/img/icon/play-store.png" alt="icon"></a>
      <a href="#"><img src="/assets/img/icon/apple-store.png" alt="icon"></a>
    </div>
    <div class="app-bottom" :class="isSidebar ? 'block' : 'xl:hidden'">
      <div class="app-account">
        <h4>Start New <span>Account</span></h4>
        <div class="thumb">
          <img class="h-[90px]" src="/assets/img/thumb/thumb-2.png" alt="thumb">
        </div>
        <a href="#" class="app-btn">Get Funded Now</a>
      </div>
    </div>
    <div class="sidebar-shape-1"></div>
    <div class="sidebar-shape-2"></div>
  </aside>
  <main class="content-wrapper" :class="isSidebar ? 'content-wrapper' : 'xl:!pl-[73px]'">
    <div class="inner-content">
      <div class="dashboard-wrapper">
        <div class="flex flex-wrap justify-center mx-[-15px] mt-[30px]">
          <div class="2xl:w-5/12 lg:w-6/12 w-full px-[15px]">
            <!-- payment start-->
            <div class="md:p-[30px] p-[20px] mb-[30px] rounded-[10px] bg-[#F5F9FF] relative z-10 overflow-hidden">
              <div
                  class="flex items-center text-[22px] text-dark leading-[1.5] font-medium tracking-[-0.06px] pb-[10px] mb-[20px] border-b border-dark/10">
                <svg class="w-[24px] h-[24px] mr-[10px] stroke-primary" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/>
                </svg>
                Payment
              </div>
              <div class="content">
                <h3 class="xl:text-[20px] text-[18px] text-dark font-medium">Confirm your payment</h3>
                <p class="max-w-[600px] text-[16px] text-dark">
                  Kindly confirm your payment. After confirmation, you’ll be charged according to the selected plan from
                  your payment account.
                </p>
                <div class="payment-form mt-[40px]">
                  <label class="block text-dark font-medium xl:text-[18px] text-[16px] mb-[10px]" for="">Card Number</label>
                  <div class="input-wrap flex gap-[10px] w-full border border-dark rounded-[5px] relative mb-[40px]">
                    <svg class="w-[20px] h-[18px] absolute left-[10px] top-[50%] translate-y-[-50%] pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                    <input class="md:flex-1 w-[60%] h-[50px] bg-transparent border-none outline-0 md:pl-[50px] pl-[40px] placeholder:text-[14px]" type="text" placeholder="Card number">
                    <input class="md:w-[80px] w-[60px] text-center h-[50px] bg-transparent border-none outline-0 placeholder:text-[14px]" type="text" placeholder="MM / YY">
                    <input class="md:w-[60px] w-[60px] text-center h-[50px] bg-transparent border-none outline-0 placeholder:text-[14px]" type="text" placeholder="CVC">
                  </div>
                  <div class="input-wrap  mb-[40px]">
                    <label class="block text-dark font-medium xl:text-[18px] text-[16px] mb-[10px]" for="">Do you have any coupon?</label>
                    <div class="flex w-full border border-dark rounded-[5px] relative">
                      <button class="px-[30px] h-[100%] absolute right-0 top-[50%] translate-y-[-50%] bg-primary text-white border-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        Apply
                      </button>
                      <input class="w-full h-[50px] bg-transparent border-none outline-0 pl-[20px] placeholder:text-[14px]" type="text" placeholder="Coupon Code">
                    </div>
                  </div>
                  <div class="flex">
                    <div class="flex mr-[10px] pt-[8px]">
                      <input class="w-[15px] h-[15px]" type="checkbox" name="agree" id="apply">
                    </div>
                    <div class="info">
                      <label class="text-dark xl:text-[18px] text-[16px] font-medium leading-[1.7] cursor-pointer" for="apply">
                        I Declare That I Have Read And Agree With <a href="#" class="text-primary">Terms & Condition</a>, <a href="#" class="text-primary">Risk Disclosure</a> &
                        <a href="#" class="text-primary">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="2xl:w-5/12 lg:w-6/12 w-full px-[15px]">
            <!-- order summary start-->
            <div class="md:p-[30px] p-[20px] mb-[30px] rounded-[10px] bg-[#F5F9FF] relative z-10 overflow-hidden">
              <div
                  class="flex items-center text-[22px] text-dark leading-[1.5] font-medium tracking-[-0.06px] pb-[10px] mb-[20px] border-b border-dark/10">
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
                    <p class="text-dark/50 text-[16px] font-semibold">Plan</p>
                    <p class="text-dark/50 text-[16px] font-semibold">Evaluation-15000 USD</p>
                  </div>
                  <div class="flex justify-between items-center border-b border-dark/10 pb-[10px] mb-[10px]">
                    <p class="text-dark/50 text-[16px] font-semibold">Price</p>
                    <p class="text-dark/50 text-[16px] font-semibold">$99</p>
                  </div>
                  <div class="flex justify-between items-center border-b border-dark/10 pb-[10px] mb-[10px]">
                    <p class="text-dark/50 text-[16px] font-semibold">Discount</p>
                    <p class="text-dark/50 text-[16px] font-semibold">-$0.00</p>
                  </div>
                  <div class="flex justify-between items-center">
                    <p class="text-dark text-[16px] font-semibold">Total Amount</p>
                    <p class="text-dark text-[16px] font-semibold">$99</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- payment method start-->
            <div class="md:p-[30px] p-[20px] mb-[30px] rounded-[10px] bg-[#F5F9FF] relative z-10 overflow-hidden">
              <h2 class="flex items-center text-[22px] text-dark leading-[1.5] font-medium tracking-[-0.06px]">
                Need other payment method?
              </h2>
              <p class="text-dark mb-[30px]">Select your preferred payment option below</p>
              <div class="content">
                <div class="grid lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] grid-cols-[1fr_1fr] gap-[30px]">
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/bank-transfer.svg" alt="bank">
                    </div>
                    <span class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      Bank Transfer
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/btc.svg" alt="bank">
                    </div>
                    <span class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      BitCoin
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/eth.svg" alt="bank">
                    </div>
                    <span class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      Ethereum
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/solana.svg" alt="bank">
                    </div>
                    <span class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      Solana
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/usdc.svg" alt="bank">
                    </div>
                    <span class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      USDC(ERC20)
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/usdc-trc20.svg" alt="bank">
                    </div>
                    <span class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      USDC(TRC20)
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/perfect-money.svg" alt="bank">
                    </div>
                    <span class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      Perfect Money
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/tether.svg" alt="bank">
                    </div>
                    <span class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      USDT(TRC20)
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/tether.svg" alt="bank">
                    </div>
                    <span class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      USDT(ERC20)
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/doge-coin.svg" alt="bank">
                    </div>
                    <span class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      DogeCoin
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/lite-coin.svg" alt="bank">
                    </div>
                    <span class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
                      LiteCoin
                    </span>
                  </div>
                  <div class="bank-info rounded-[5px] overflow-hidden">
                    <div class="thumb bg-white 2xl:min-h-[117px] min-h-[80px] flex items-center justify-center">
                      <img class="w-full" src="/assets/img/bank/wmz-purse.svg" alt="bank">
                    </div>
                    <span class="text-white block font-medium text-center py-2 text-xs 2xl:text-base whitespace-nowrap bg-primary">
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
  name: "Payment",
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