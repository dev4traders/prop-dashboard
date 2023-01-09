<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
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
        <img class="inline-block h-[32px]" src="/assets/img/logo/logo-s.png" alt="logo">
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
            <svg class="nav-icon" fill="none" stroke-width="1.5" stroke="currentColor" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
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
    <div
        class="calender-header py-[96px] px-[15px] xl:ml-[-20px] text-center"
        STYLE="background-image: linear-gradient(90deg, rgba(12, 148, 0, 0.95) 0%, rgba(12, 148, 0, 0.3) 100%), url(/assets/img/thumb/calendar-bg.svg)">
      <h2 class="text-white text-[26px] font-bold mb-[15px]">Economic Calendar</h2>
      <p class="text-white md:text-[18px] text-[16px] font-normal leading-[1.5]">
        View our interactive economic calendar for important events and releases
      </p>
    </div>
    <div class="inner-content">
      <div class="dashboard-wrapper">
        <div class="flex flex-wrap mx-[-15px]">
          <div class="w-full px-[15px]">
            <!-- filter country -->
            <div
                class="hidden lg:flex bg-white border-1 relative -mt-[55px] gap-3 2xl:px-16 px-8 rounded-md shadow-[0_4px_10px_rgba(64,123,255,0.13)] py-9 justify-evenly dark:bg-dark">
              <div
                  class="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                <div
                    class="w-[30px] relative h-[30px] shadow-[0px_4px_15px_rgba(0, 0, 0, 0.06)] border-[1px] border-[#EBEBEB] rounded-full bg-[#fff]">
                  <div
                      class="w-[16px] h-[16px] absolute -top-[6%] left-[21%] transform translatex-[50%] translate-y-[50%] bg-[#635BFD] rounded-full"></div>
                </div>
                <p class="font-rubik text-[#7e7e7e] text-[15px]">ALL</p>
              </div>
              <div
                  class="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                <img class="w-[26px] h-[26px] rounded-full" src="/assets/img/flug/NZD.svg" alt="flug">
                <p class="font-rubik text-[#7e7e7e] text-[15px]">NZD</p>
              </div>
              <div
                  class="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                <img class="w-[26px] h-[26px] rounded-full" src="/assets/img/flug/AUD.svg" alt="flug">
                <p class="font-rubik text-[#7e7e7e] text-[15px]">AUD</p>
              </div>
              <div
                  class="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                <img class="w-[26px] h-[26px] rounded-full" src="/assets/img/flug/CAD.svg" alt="flug">
                <p class="font-rubik text-[#7e7e7e] text-[15px]">CAD</p>
              </div>
              <div
                  class="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                <img class="w-[26px] h-[26px] rounded-full" src="/assets/img/flug/EUR.svg" alt="flug">
                <p class="font-rubik text-[#7e7e7e] text-[15px]">EUR</p>
              </div>
              <div
                  class="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                <img class="w-[26px] h-[26px] rounded-full" src="/assets/img/flug/GBP.svg" alt="flug">
                <p class="font-rubik text-[#7e7e7e] text-[15px]">GBP</p>
              </div>
              <div
                  class="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                <img class="w-[26px] h-[26px] rounded-full" src="/assets/img/flug/USD.svg" alt="flug">
                <p class="font-rubik text-[#7e7e7e] text-[15px]">USD</p>
              </div>
              <div
                  class="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                <img class="w-[26px] h-[26px] rounded-full" src="/assets/img/flug/CHF.svg" alt="flug">
                <p class="font-rubik text-[#7e7e7e] text-[15px]">CHF</p>
              </div>
              <div
                  class="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                <img class="w-[26px] h-[26px] rounded-full" src="/assets/img/flug/JPY.svg" alt="flug">
                <p class="font-rubik text-[#7e7e7e] text-[15px]">JPY</p>
              </div>
              <div
                  class="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                <img class="w-[26px] h-[26px] rounded-full" src="/assets/img/flug/CNY.svg" alt="flug">
                <p class="font-rubik text-[#7e7e7e] text-[15px]">CNY</p>
              </div>
            </div>
            <!-- filter day -->
            <div
                class="hidden lg:flex px-12 bg-white rounded-md py-8 filterWith mt-[30px] shadow-[0_4px_10px_rgba(64,123,255,0.13)] flex-wrap dark:bg-dark">
              <div class="w-[38%] 2xl:pr-16 pr-8">
                <h3 class="font-bold text-[#636363] font-rubik text-xl pb-4 dark:text-white">Days</h3>
                <div class="grid 2xl:grid-cols-[1fr_1fr_1fr] grid-cols-[1fr_1fr] gap-6 text-center">
                  <div
                      class="border border-[#EBEBEB] px-[15px] py-[10px] rounded-[5px] text-dark transition-all duration-300 ease-linear hover:border-primary hover:text-primary cursor-pointer dark:text-white">
                    Sunday
                  </div>
                  <div
                      class="border border-[#EBEBEB] px-[15px] py-[10px] rounded-[5px] text-dark transition-all duration-300 ease-linear hover:border-primary hover:text-primary cursor-pointer dark:text-white">
                    Monday
                  </div>
                  <div
                      class="border border-[#EBEBEB] px-[15px] py-[10px] rounded-[5px] text-dark transition-all duration-300 ease-linear hover:border-primary hover:text-primary cursor-pointer dark:text-white">
                    Tuesday
                  </div>
                  <div
                      class="border border-[#EBEBEB] px-[15px] py-[10px] rounded-[5px] text-dark transition-all duration-300 ease-linear hover:border-primary hover:text-primary cursor-pointer dark:text-white">
                    Wednesday
                  </div>
                  <div
                      class="border border-[#EBEBEB] px-[15px] py-[10px] rounded-[5px] text-dark transition-all duration-300 ease-linear hover:border-primary hover:text-primary cursor-pointer dark:text-white">
                    Thursday
                  </div>
                  <div
                      class="border border-[#EBEBEB] px-[15px] py-[10px] rounded-[5px] text-dark transition-all duration-300 ease-linear hover:border-primary hover:text-primary cursor-pointer dark:text-white">
                    Friday
                  </div>
                </div>
              </div>
              <div class="w-[30%] 2xl:px-16 px-8 2xl:mr-16 mr-8 border-l-[1px] border-r-[1px] border-[#EFEFEF]">
                <h3 class="font-bold text-[#636363] font-rubik text-xl pb-4 dark:text-white">Impact</h3>
                <div class="grid 2xl:grid-cols-[1fr_1fr] grid-cols-1 gap-6">
                  <label
                      class="flex flex-wrap justify-center items-center px-[10px] py-[10px] border border-[#3b82f6] bg-[#3b82f6]/10 rounded-full cursor-pointer dark:bg-[#3b82f6]"
                      for="low">
                    <span class="mr-2 text-dark text-base font-medium shadow-badge dark:text-white">Low</span>
                    <input class="w-[14px] h-[14px] cursor-pointer" readonly="" type="checkbox" id="low">
                  </label>
                  <label
                      class="flex flex-wrap justify-center items-center px-[10px] py-[10px] border border-[#f89b63] bg-[#f89b63]/10 rounded-full cursor-pointer dark:bg-[#f89b63]"
                      for="medium">
                    <span class="mr-2 text-dark text-base font-medium shadow-badge dark:text-white">Medium</span>
                    <input class="w-[14px] h-[14px] cursor-pointer" readonly="" type="checkbox" id="medium">
                  </label>
                  <label
                      class="flex flex-wrap justify-center items-center px-[10px] py-[10px] border border-[#e60a16] bg-[#e60a16]/10 rounded-full cursor-pointer dark:bg-[#e60a16]"
                      for="high">
                    <span class="mr-2 text-dark text-base font-medium shadow-badge dark:text-white">High</span>
                    <input class="w-[14px] h-[14px] cursor-pointer" readonly="" type="checkbox" id="high">
                  </label>
                  <label
                      class="flex flex-wrap justify-center items-center px-[10px] py-[10px] border border-[#00b55b] bg-[#00b55b]/10 rounded-full cursor-pointer dark:bg-[#00b55b]"
                      for="holiday">
                    <span class="mr-2 text-dark text-base font-medium shadow-badge dark:text-white">Holiday</span>
                    <input class="w-[14px] h-[14px] cursor-pointer" readonly="" type="checkbox" id="holiday">
                  </label>
                </div>
              </div>
              <div class="2xl:w-[22%] w-[28%]">
                <h3 class="font-bold text-[#636363] font-rubik text-xl pb-4 dark:text-white">Restrictions</h3>
                <div class="flex flex-wrap gap-6">
                  <label
                      class="flex flex-wrap justify-center items-center px-[30px] py-[10px] border border-[#e60a16] bg-[#e60a16]/10 rounded-full cursor-pointer dark:bg-[#e60a16]"
                      for="restrictions">
                    <span class="mr-2 text-dark text-base font-medium shadow-badge dark:text-white">Restrictions</span>
                    <input class="w-[14px] h-[14px] cursor-pointer" readonly="" type="checkbox" id="restrictions">
                  </label>
                  <label
                      class="flex flex-wrap justify-center items-center px-[30px] py-[10px] border border-[#ebebeb] bg-[#ebebeb]/10 rounded-full cursor-pointer dark:bg-[#ebebeb]"
                      for="no-restrictions">
                    <span class="mr-2 text-dark text-base font-medium shadow-badge dark:text-dark">No Restrictions</span>
                    <input class="w-[14px] h-[14px] cursor-pointer" readonly="" type="checkbox" id="no-restrictions">
                  </label>
                </div>
              </div>
            </div>

            <!-- filter table -->
            <div class="mt-[30px] mb-[80px]">
              <div class="table-wrap overflow-x-auto w-full">
                <div class="table-responsive 2xl:w-full w-[1400px]">
                  <div class="t-head flex border-[1px] border-[#F2F2F2] py-3.5 px-2 rounded-md">
                    <div class="w-[13%] 2xl:pl-[20px]">
                      <h3 class="text-dark font-semibold dark:text-white">IMPACT</h3>
                    </div>
                    <div class="w-[30%]">
                      <h3 class="text-dark font-semibold dark:text-white">EVENT</h3>
                    </div>
                    <div class="w-[15%]">
                      <h3 class="text-dark font-semibold dark:text-white">CURRENCY</h3>
                    </div>
                    <div class="w-[14%] flex items-center">
                      <h3 class="pr-2 text-dark font-semibold dark:text-white">DATE</h3>
                      <div class="relative cursor-pointer group">
                        <svg class="fill-gray-500 dark:fill-white/70" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                             aria-hidden="true">
                          <path
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                        </svg>
                        <div
                            class="absolute bg-gray-900 text-white font-rubik whitespace-nowrap p-2 rounded top-[calc(100%+10px)] left-[50%] -translate-x-1/2 before:absolute before:content-[''] before:w-[10px] before:h-[10px] before:bg-gray-900 before:rotate-45 before:top-[-5px] before:left-[50%] before:translate-x-[-50%] hidden group-hover:block">
                          GMT +6
                        </div>
                      </div>
                    </div>
                    <div class="w-[13%] text-center">
                      <h3 class="text-dark font-semibold dark:text-white">FORECAST</h3>
                    </div>
                    <div class="w-[13%] text-center">
                      <h3 class="text-dark font-semibold dark:text-white">PREVIOUS</h3>
                    </div>
                  </div>
                  <div class="t-body">
                    <div class="t-row flex items-center px-[10px] py-[15px] border border-[#F2F2F2]">
                      <div class="w-[13%] 2xl:pl-[20px]">
                        <button
                            class="text-dark text-[16px] font-semibold px-[30px] py-[6px] border border-[#00b55b] bg-[#00b55b]/10 rounded-full cursor-pointer dark:text-white">
                          Holiday
                        </button>
                      </div>
                      <div class="w-[30%]">
                        <p class="text-dark dark:text-white">Bank Holiday</p>
                      </div>
                      <div class="w-[15%]">
                        <div class="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                          <img class="w-[26px] h-[26px] rounded-full mr-[5px]" src="/assets/img/flug/AUD.svg" alt="flug">
                          <p class="text-dark">AUD</p>
                        </div>
                      </div>
                      <div class="w-[14%] flex items-center justify-between">
                        <p class="text-dark dark:text-white">3rd Oct, 04:00 AM</p>
                        <button>
                          <svg class="fill-dark dark:fill-white" width="37" height="37" viewBox="0 0 37 37" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                            <path
                                d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                            <path
                                d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white"></p></div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white"></p></div>
                    </div>
                    <div class="t-row flex items-center px-[10px] py-[15px] border border-[#F2F2F2] ">
                      <div class="w-[13%] 2xl:pl-[20px]">
                        <button
                            class="text-dark text-[16px] font-semibold px-[30px] py-[6px] border border-[#3b82f6] bg-[#3b82f6]/10 rounded-full cursor-pointer dark:text-white">
                          Low
                        </button>
                      </div>
                      <div class="w-[30%]">
                        <p class="text-dark dark:text-white">Tankan Manufacturing Index</p>
                      </div>
                      <div class="w-[15%]">
                        <div class="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                          <img class="w-[26px] h-[26px] rounded-full mr-[5px]" src="/assets/img/flug/JPY.svg" alt="flug">
                          <p class="text-dark">JPY</p>
                        </div>
                      </div>
                      <div class="w-[14%] flex items-center justify-between">
                        <p class="text-dark dark:text-white">3rd Oct, 04:00 AM</p>
                        <button>
                          <svg class="fill-dark dark:fill-white" width="37" height="37" viewBox="0 0 37 37" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                            <path
                                d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                            <path
                                d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white">11</p></div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white">9</p></div>
                    </div>
                    <div class="t-row flex items-center px-[10px] py-[15px] border border-[#F2F2F2] ">
                      <div class="w-[13%] 2xl:pl-[20px]">
                        <button
                            class="text-dark text-[16px] font-semibold px-[30px] py-[6px] border border-[#3b82f6] bg-[#3b82f6]/10 rounded-full cursor-pointer dark:text-white">
                          Low
                        </button>
                      </div>
                      <div class="w-[30%]">
                        <p class="text-dark dark:text-white">Tankan Non-Manufacturing Index</p>
                      </div>
                      <div class="w-[15%]">
                        <div class="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                          <img class="w-[26px] h-[26px] rounded-full mr-[5px]" src="/assets/img/flug/JPY.svg" alt="flug">
                          <p class="text-dark">JPY</p>
                        </div>
                      </div>
                      <div class="w-[14%] flex items-center justify-between">
                        <p class="text-dark dark:text-white">3rd Oct, 04:00 AM</p>
                        <button>
                          <svg class="fill-dark dark:fill-white" width="37" height="37" viewBox="0 0 37 37" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                            <path
                                d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                            <path
                                d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white">13</p></div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white">13</p></div>
                    </div>
                    <div class="t-row flex items-center px-[10px] py-[15px] border border-[#F2F2F2] ">
                      <div class="w-[13%] 2xl:pl-[20px]">
                        <button
                            class="text-dark text-[16px] font-semibold px-[30px] py-[6px] border border-[#3b82f6] bg-[#3b82f6]/10 rounded-full cursor-pointer dark:text-white">
                          Low
                        </button>
                      </div>
                      <div class="w-[30%]">
                        <p class="text-dark dark:text-white">BOJ Summary of Opinions</p>
                      </div>
                      <div class="w-[15%]">
                        <div class="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                          <img class="w-[26px] h-[26px] rounded-full mr-[5px]" src="/assets/img/flug/JPY.svg" alt="flug">
                          <p class="text-dark">JPY</p>
                        </div>
                      </div>
                      <div class="w-[14%] flex items-center justify-between">
                        <p class="text-dark dark:text-white">3rd Oct, 04:00 AM</p>
                        <button>
                          <svg class="fill-dark dark:fill-white" width="37" height="37" viewBox="0 0 37 37" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                            <path
                                d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                            <path
                                d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white"></p></div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white"></p></div>
                    </div>
                    <div class="t-row flex items-center px-[10px] py-[15px] border border-[#F2F2F2]">
                      <div class="w-[13%] 2xl:pl-[20px]">
                        <button
                            class="text-dark text-[16px] font-semibold px-[30px] py-[6px] border border-[#00b55b] bg-[#00b55b]/10 rounded-full cursor-pointer dark:text-white">
                          Holiday
                        </button>
                      </div>
                      <div class="w-[30%]">
                        <p class="text-dark dark:text-white">Bank Holiday</p>
                      </div>
                      <div class="w-[15%]">
                        <div class="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                          <img class="w-[26px] h-[26px] rounded-full mr-[5px]" src="/assets/img/flug/AUD.svg" alt="flug">
                          <p class="text-dark">AUD</p>
                        </div>
                      </div>
                      <div class="w-[14%] flex items-center justify-between">
                        <p class="text-dark dark:text-white">3rd Oct, 04:00 AM</p>
                        <button>
                          <svg class="fill-dark dark:fill-white" width="37" height="37" viewBox="0 0 37 37" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                            <path
                                d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                            <path
                                d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white"></p></div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white"></p></div>
                    </div>
                    <div class="t-row flex items-center px-[10px] py-[15px] border border-[#F2F2F2] ">
                      <div class="w-[13%] 2xl:pl-[20px]">
                        <button
                            class="text-dark text-[16px] font-semibold px-[30px] py-[6px] border border-[#3b82f6] bg-[#3b82f6]/10 rounded-full cursor-pointer dark:text-white">
                          Low
                        </button>
                      </div>
                      <div class="w-[30%]">
                        <p class="text-dark dark:text-white">Tankan Manufacturing Index</p>
                      </div>
                      <div class="w-[15%]">
                        <div class="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                          <img class="w-[26px] h-[26px] rounded-full mr-[5px]" src="/assets/img/flug/JPY.svg" alt="flug">
                          <p class="text-dark">JPY</p>
                        </div>
                      </div>
                      <div class="w-[14%] flex items-center justify-between">
                        <p class="text-dark dark:text-white">3rd Oct, 04:00 AM</p>
                        <button>
                          <svg class="fill-dark dark:fill-white" width="37" height="37" viewBox="0 0 37 37" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                            <path
                                d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                            <path
                                d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white">11</p></div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white">9</p></div>
                    </div>
                    <div class="t-row flex items-center px-[10px] py-[15px] border border-[#F2F2F2] ">
                      <div class="w-[13%] 2xl:pl-[20px]">
                        <button
                            class="text-dark text-[16px] font-semibold px-[30px] py-[6px] border border-[#3b82f6] bg-[#3b82f6]/10 rounded-full cursor-pointer dark:text-white">
                          Low
                        </button>
                      </div>
                      <div class="w-[30%]">
                        <p class="text-dark dark:text-white">Tankan Non-Manufacturing Index</p>
                      </div>
                      <div class="w-[15%]">
                        <div class="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                          <img class="w-[26px] h-[26px] rounded-full mr-[5px]" src="/assets/img/flug/JPY.svg" alt="flug">
                          <p class="text-dark">JPY</p>
                        </div>
                      </div>
                      <div class="w-[14%] flex items-center justify-between">
                        <p class="text-dark dark:text-white">3rd Oct, 04:00 AM</p>
                        <button>
                          <svg class="fill-dark dark:fill-white" width="37" height="37" viewBox="0 0 37 37" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                            <path
                                d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                            <path
                                d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white">13</p></div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white">13</p></div>
                    </div>
                    <div
                        class="t-row flex items-center px-[10px] py-[15px] border border-[#F2F2F2] !border-l-[8px] !border-l-[#e60a16] !bg-[#e60a16]/10">
                      <div class="w-[13%] 2xl:pl-[20px]">
                        <button
                            class="text-dark text-[16px] font-semibold px-[30px] py-[6px] border border-[#e60a16] bg-[#e60a16]/10 rounded-full cursor-pointer dark:text-white">
                          High
                        </button>
                      </div>
                      <div class="w-[30%]">
                        <p class="text-dark dark:text-white">CPI m/m</p>
                      </div>
                      <div class="w-[15%]">
                        <div class="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                          <img class="w-[26px] h-[26px] rounded-full mr-[5px]" src="/assets/img/flug/CHF.svg" alt="flug">
                          <p class="text-dark">CHF</p>
                        </div>
                      </div>
                      <div class="w-[14%] flex items-center justify-between">
                        <p class="text-dark dark:text-white">3rd Oct, 04:00 AM</p>
                        <button>
                          <svg class="fill-dark dark:fill-white" width="37" height="37" viewBox="0 0 37 37" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                            <path
                                d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                            <path
                                d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white">0.1%</p></div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white">0.3%</p></div>
                    </div>
                    <div class="t-row flex items-center px-[10px] py-[15px] border border-[#F2F2F2]">
                      <div class="w-[13%] 2xl:pl-[20px]">
                        <button
                            class="text-dark text-[16px] font-semibold px-[30px] py-[6px] border border-[#00b55b] bg-[#00b55b]/10 rounded-full cursor-pointer dark:text-white">
                          Holiday
                        </button>
                      </div>
                      <div class="w-[30%]">
                        <p class="text-dark dark:text-white">Bank Holiday</p>
                      </div>
                      <div class="w-[15%]">
                        <div class="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                          <img class="w-[26px] h-[26px] rounded-full mr-[5px]" src="/assets/img/flug/AUD.svg" alt="flug">
                          <p class="text-dark">AUD</p>
                        </div>
                      </div>
                      <div class="w-[14%] flex items-center justify-between">
                        <p class="text-dark dark:text-white">3rd Oct, 04:00 AM</p>
                        <button>
                          <svg class="fill-dark dark:fill-white" width="37" height="37" viewBox="0 0 37 37" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                            <path
                                d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                            <path
                                d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white"></p></div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white"></p></div>
                    </div>
                    <div class="t-row flex items-center px-[10px] py-[15px] border border-[#F2F2F2] ">
                      <div class="w-[13%] 2xl:pl-[20px]">
                        <button
                            class="text-dark text-[16px] font-semibold px-[30px] py-[6px] border border-[#3b82f6] bg-[#3b82f6]/10 rounded-full cursor-pointer dark:text-white">
                          Low
                        </button>
                      </div>
                      <div class="w-[30%]">
                        <p class="text-dark dark:text-white">Tankan Manufacturing Index</p>
                      </div>
                      <div class="w-[15%]">
                        <div class="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                          <img class="w-[26px] h-[26px] rounded-full mr-[5px]" src="/assets/img/flug/JPY.svg" alt="flug">
                          <p class="text-dark">JPY</p>
                        </div>
                      </div>
                      <div class="w-[14%] flex items-center justify-between">
                        <p class="text-dark dark:text-white">3rd Oct, 04:00 AM</p>
                        <button>
                          <svg class="fill-dark dark:fill-white" width="37" height="37" viewBox="0 0 37 37" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                            <path
                                d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                            <path
                                d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white">11</p></div>
                      <div class="w-[13%]"><p class="text-dark text-center dark:text-white">9</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="t-navigation flex items-center justify-end mt-[40px]">
                <button
                    class="inline-block text-center w-[45px] h-[48px] text-dark text-[16px] font-semibold bg-[#f1f1f1] rounded-[5px] ml-[10px]">
                  <svg class="inline-block fill-dark" width="7" height="15" viewBox="0 0 7 15" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.83749 14.0013C5.68809 14.0018 5.54048 13.9688 5.4055 13.9048C5.27052 13.8407 5.15161 13.7473 5.05749 13.6313L0.227488 7.63125C0.0804062 7.45232 0 7.22788 0 6.99625C0 6.76463 0.0804062 6.54018 0.227488 6.36125L5.22749 0.361252C5.39723 0.157036 5.64114 0.0286112 5.90556 0.0042315C6.16999 -0.0201482 6.43327 0.0615137 6.63749 0.231252C6.8417 0.400991 6.97013 0.644902 6.99451 0.909329C7.01889 1.17375 6.93723 1.43704 6.76749 1.64125L2.29749 7.00125L6.61749 12.3613C6.73977 12.508 6.81745 12.6868 6.84133 12.8763C6.86521 13.0659 6.83429 13.2583 6.75223 13.4308C6.67018 13.6034 6.54042 13.7488 6.37831 13.8499C6.2162 13.9509 6.02852 14.0035 5.83749 14.0013Z"></path>
                  </svg>
                </button>
                <button
                    class="inline-block text-center w-[45px] h-[48px] text-white text-[16px] font-semibold bg-primary rounded-[5px] ml-[10px]">
                  1
                </button>
                <button
                    class="inline-block text-center w-[45px] h-[48px] text-dark text-[16px] font-semibold bg-[#f1f1f1] rounded-[5px] ml-[10px]">
                  2
                </button>
                <button
                    class="inline-block text-center w-[45px] h-[48px] text-dark text-[16px] font-semibold bg-[#f1f1f1] rounded-[5px] ml-[10px]">
                  3
                </button>
                <button
                    class="inline-block text-center w-[45px] h-[48px] text-dark text-[16px] font-semibold bg-[#f1f1f1] rounded-[5px] ml-[10px]">
                  4
                </button>
                <button
                    class="inline-block text-center w-[45px] h-[48px] text-dark text-[16px] font-semibold bg-[#f1f1f1] rounded-[5px] ml-[10px]">
                  <svg class="inline-block fill-dark" width="7" height="15" viewBox="0 0 7 15" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.16251 0.998748C1.31191 0.99824 1.45952 1.03121 1.5945 1.09524C1.72948 1.15927 1.84839 1.25273 1.94251 1.36875L6.77251 7.36875C6.91959 7.54768 7 7.77212 7 8.00375C7 8.23537 6.91959 8.45982 6.77251 8.63875L1.77251 14.6387C1.60277 14.843 1.35886 14.9714 1.09444 14.9958C0.83001 15.0201 0.566729 14.9385 0.362512 14.7687C0.158296 14.599 0.0298715 14.3551 0.00549173 14.0907C-0.018888 13.8262 0.0627732 13.563 0.232512 13.3587L4.70251 7.99875L0.382513 2.63875C0.26023 2.49196 0.182552 2.31322 0.158673 2.12367C0.134793 1.93412 0.16571 1.7417 0.247766 1.56917C0.329822 1.39665 0.459582 1.25123 0.621692 1.15014C0.783803 1.04905 0.971478 0.996516 1.16251 0.998748Z"></path>
                  </svg>
                </button>
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
  name: "NewsCalendar",
  data() {
    return {
      isMenubar: false,
      isUserInfo: false,
      isNotification: false,
      isSidebar: true,
    }
  },
}
</script>

<style scoped>

</style>