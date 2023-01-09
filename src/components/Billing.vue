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
    <div class="dashboard-info">
      This is a sample dashboard, start trading for real data.
    </div>
    <div class="inner-content">
      <div class="breadcrumb-wrap">
        <div class="breadcrumb-title">
          <svg class="breadcrumb-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
          </svg>
          Billing
        </div>
      </div>
      <div class="dashboard-wrapper">
        <!-- account information start -->
        <div class="flex flex-wrap mx-[-15px]">
          <div class="w-full px-[15px]">
            <div class="flex flex-wrap mx-[-15px]">
              <div class="w-full px-[15px]">
                <div class="card-wrap">
                  <div class="content">
                    <div class="tabs-wrap mb-[30px]">
                      <ul class="flex flex-wrap justify-center items-center gap-[20px] mb-[40px]">
                        <li class="inline-block">
                          <button
                              class="flex items-center px-[30px] py-[12px] rounded-[10px] shadow-[0_4px_10px_rgba(64,123,255,0.13)] dark:shadow-[0_4px_10px_rgba(255,255,255,0.13)]"
                              @click="toggleTabs(1)"
                              :class="{'text-dark bg-white dark:bg-toggle dark:text-white': openTab !== 1, 'text-white bg-primary': openTab === 1}">
                            <svg class="w-[20px] h-[24px] mr-[10px] " focusable="false" viewBox="0 0 24 24"
                                 aria-hidden="true"
                                 :class="{'fill-primary': openTab !== 1, 'fill-white': openTab === 1}">
                              <path
                                  d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
                            </svg>
                            My Plan
                          </button>
                        </li>
                        <li class="inline-block">
                          <button
                              class="flex items-center px-[30px] py-[12px] rounded-[10px] shadow-[0_4px_10px_rgba(64,123,255,0.13)] dark:shadow-[0_4px_10px_rgba(255,255,255,0.13)]"
                              @click="toggleTabs(2)"
                              :class="{'text-dark bg-white dark:bg-toggle dark:text-white': openTab !== 2, 'text-white bg-primary': openTab === 2}">
                            <svg class="w-[20px] h-[24px] mr-[10px] " focusable="false" viewBox="0 0 24 24"
                                 aria-hidden="true"
                                 :class="{'fill-primary': openTab !== 2, 'fill-white': openTab === 2}">
                              <path
                                  d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
                            </svg>
                            Payment Method
                          </button>
                        </li>
                        <li class="inline-block mr-[10px]">
                          <button
                              class="flex items-center px-[30px] py-[12px] rounded-[10px] shadow-[0_4px_10px_rgba(64,123,255,0.13)] dark:shadow-[0_4px_10px_rgba(255,255,255,0.13)]"
                              @click="toggleTabs(3)"
                              :class="{'text-dark bg-white dark:bg-toggle dark:text-white': openTab !== 3, 'text-white bg-primary': openTab === 3}">
                            <svg class="w-[20px] h-[24px] mr-[10px] " focusable="false" viewBox="0 0 24 24"
                                 aria-hidden="true"
                                 :class="{'fill-primary': openTab !== 3, 'fill-white': openTab === 3}">
                              <path
                                  d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path>
                            </svg>
                            Payment History
                          </button>
                        </li>
                      </ul>
                      <div class="w-full bg-white shadow-[0_4px_10px_rgba(64,123,255,0.13)] rounded-[10px] dark:bg-toggle dark:shadow-[0_4px_10px_rgba(255,255,255,0.13)]">
                        <div class="md:p-[30px] p-[20px]">
                          <div class="tab-content tab-space">
                            <div :class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                              <div class="my-plan-content text-center mb-[50px]">
                                <h4 class="text-dark text-[18px] font-semibold leading-[1.5] tracking-[-0.06px] mb-[20px] dark:text-white">
                                  Free Plan</h4>
                                <p class="text-[#4A485F] text-[15px] font-normal leading-[1.5] tracking-[-0.06px] dark:text-white/70">
                                  Your are currently registered under Free subscription plan. You could start trading by
                                  subscribing a new account.
                                </p>
                              </div>
                              <div class="plan-content">
                                <h2 class="text-dark md:text-[28px] text-[20px] font-semibold leading-[1.5] tracking-[-0.24px] mb-[10px] text-center dark:text-white">
                                  Start a New Account
                                </h2>
                                <div class="plan-tab-nav text-center">
                                  <ul class="relative z-20 mx-auto mb-[40px] inline-flex items-center rounded-[100px] overflow-hidden shadow-[0_4px_10px_rgba(64,123,255,0.13)]">
                                    <li class="inline-block">
                                      <button
                                          class="md:w-[160px] w-[100px] text-center md:text-[16px] text-[13px] md:px-[30px] px-[15px] py-[12px] rounded-[100px]"
                                          @click="toggleTabs2(1)"
                                          :class="{'text-dark dark:text-white': openTab2 !== 1, 'text-white': openTab2 === 1}">
                                        Express
                                      </button>
                                    </li>
                                    <li class="inline-block">
                                      <button
                                          class="md:w-[160px] w-[100px] text-center md:text-[16px] text-[13px] md:px-[30px] px-[15px] py-[12px] rounded-[100px]"
                                          @click="toggleTabs2(2)"
                                          :class="{'text-dark dark:text-white': openTab2 !== 2, 'text-white': openTab2 === 2}">
                                        Evaluation
                                      </button>
                                    </li>
                                    <li class="shape -z-10 absolute left-0 top-0 md:w-[160px] w-[100px] h-[100%] rounded-[100px] bg-primary transition-all duration-300 ease-linear"
                                        :class="{'md:translate-x-[160px] translate-x-[100px]': openTab2 !== 1, 'translate-x-[0]': openTab2 === 1}"></li>
                                  </ul>
                                </div>
                                <div :class="{'hidden': openTab2 !== 1, 'block': openTab2 === 1}">
                                  <div class="flex flex-wrap 2xl:justify-start justify-center mx-[-15px]">
                                    <div class="2xl:w-4/12 xl:w-4/12 lg:w-5/12 md:w-6/12 w-full px-[15px]">
                                      <div class="bg-[#F5F9FF] rounded-[10px] mb-[30px]">
                                        <div class="bg-dark p-[25px] rounded-[10px]">
                                          <span class="w-[30px] h-[2px] bg-white block mb-[10px]"></span>
                                          <h3 class="text-white text-[18px] font-medium leading-[1.5] tracking-[-0.06px] uppercase mb-[12px]">
                                            EXPRESS FUND
                                          </h3>
                                          <p class="text-white text-[38px] font-semibold leading-[1.5] tracking-[-0.06px] uppercase">
                                            $25,000
                                          </p>
                                        </div>
                                        <div class="content py-[15px] px-[25px]">
                                          <div class="content-list">
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              One Step Assessment Process
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              5% Daily Drawdown
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              10% Overall Drawdown
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              10 Trading Days
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              One Time Refundable Fee $229
                                            </p>
                                          </div>
                                          <router-link to="/payment"
                                                       class="flex items-center justify-center bg-primary text-white xl:py-[10px] py-[15px] px-[30px] font-semibold rounded-[5px] w-full xl:min-h-[60px] capitalize">
                                            Get Funded
                                          </router-link>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="2xl:w-4/12 xl:w-4/12 lg:w-5/12 md:w-6/12 w-full px-[15px]">
                                      <div class="bg-[#F5F9FF] rounded-[10px] mb-[30px]">
                                        <div class="bg-dark p-[25px] rounded-[10px]">
                                          <span class="w-[30px] h-[2px] bg-white block mb-[10px]"></span>
                                          <h3 class="text-white text-[18px] font-medium leading-[1.5] tracking-[-0.06px] uppercase mb-[12px]">
                                            EXPRESS FUND
                                          </h3>
                                          <p class="text-white text-[38px] font-semibold leading-[1.5] tracking-[-0.06px] uppercase">
                                            $50,000
                                          </p>
                                        </div>
                                        <div class="content py-[15px] px-[25px]">
                                          <div class="content-list">
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              One Step Assessment Process
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              5% Daily Drawdown
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              10% Overall Drawdown
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              10 Trading Days
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              One Time Refundable Fee $379
                                            </p>
                                          </div>
                                          <router-link to="/payment"
                                                       class="flex items-center justify-center bg-primary text-white xl:py-[10px] py-[15px] px-[30px] font-semibold rounded-[5px] w-full xl:min-h-[60px] capitalize">
                                            Get Funded
                                          </router-link>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="2xl:w-4/12 xl:w-4/12 lg:w-5/12 md:w-6/12 w-full px-[15px]">
                                      <div class="bg-[#F5F9FF] rounded-[10px] mb-[30px]">
                                        <div class="bg-dark p-[25px] rounded-[10px]">
                                          <span class="w-[30px] h-[2px] bg-white block mb-[10px]"></span>
                                          <h3 class="text-white text-[18px] font-medium leading-[1.5] tracking-[-0.06px] uppercase mb-[12px]">
                                            EXPRESS FUND
                                          </h3>
                                          <p class="text-white text-[38px] font-semibold leading-[1.5] tracking-[-0.06px] uppercase">
                                            $100,000
                                          </p>
                                        </div>
                                        <div class="content py-[15px] px-[25px]">
                                          <div class="content-list">
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              One Step Assessment Process
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              5% Daily Drawdown
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              10% Overall Drawdown
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              10 Trading Days
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              One Time Refundable Fee $699
                                            </p>
                                          </div>
                                          <router-link to="/payment"
                                                       class="flex items-center justify-center bg-primary text-white xl:py-[10px] py-[15px] px-[30px] font-semibold rounded-[5px] w-full xl:min-h-[60px] capitalize">
                                            Get Funded
                                          </router-link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div :class="{'hidden': openTab2 !== 2, 'block': openTab2 === 2}">
                                  <div class="flex flex-wrap 2xl:justify-start justify-center mx-[-15px]">
                                    <div class="2xl:w-3/12 xl:w-4/12 lg:w-5/12 md:w-6/12 w-full px-[15px]">
                                      <div class="bg-[#F5F9FF] rounded-[10px] mb-[30px]">
                                        <div class="bg-dark p-[25px] rounded-[10px]">
                                          <span class="w-[30px] h-[2px] bg-white block mb-[10px]"></span>
                                          <h3 class="text-white text-[18px] font-medium leading-[1.5] tracking-[-0.06px] uppercase mb-[12px]">
                                            EVALUATION FUND</h3>
                                          <p class="text-white text-[38px] font-semibold leading-[1.5] tracking-[-0.06px] uppercase">
                                            $25,000</p>
                                        </div>
                                        <div class="content py-[15px] px-[25px]">
                                          <div class="content-list">
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              Two Step Assessment Process
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              5% Daily Drawdown
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              10% Overall Drawdown
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              5 Trading Days
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              One Time Refundable Fee $199
                                            </p>
                                          </div>
                                          <router-link to="/payment"
                                                       class="flex items-center justify-center bg-primary text-white xl:py-[10px] py-[15px] px-[30px] font-semibold rounded-[5px] w-full xl:min-h-[60px] capitalize">
                                            Get Funded
                                          </router-link>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="2xl:w-3/12 xl:w-4/12 lg:w-5/12 md:w-6/12 w-full px-[15px]">
                                      <div class="bg-[#F5F9FF] rounded-[10px] mb-[30px]">
                                        <div class="bg-dark p-[25px] rounded-[10px]">
                                          <span class="w-[30px] h-[2px] bg-white block mb-[10px]"></span>
                                          <h3 class="text-white text-[18px] font-medium leading-[1.5] tracking-[-0.06px] uppercase mb-[12px]">
                                            EVALUATION FUND</h3>
                                          <p class="text-white text-[38px] font-semibold leading-[1.5] tracking-[-0.06px] uppercase">
                                            $50,000</p>
                                        </div>
                                        <div class="content py-[15px] px-[25px]">
                                          <div class="content-list">
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              Two Step Assessment Process
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              5% Daily Drawdown
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              10% Overall Drawdown
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              5 Trading Days
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              One Time Refundable Fee $299
                                            </p>
                                          </div>
                                          <router-link to="/payment"
                                                       class="flex items-center justify-center bg-primary text-white xl:py-[10px] py-[15px] px-[30px] font-semibold rounded-[5px] w-full xl:min-h-[60px] capitalize">
                                            Get Funded
                                          </router-link>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="2xl:w-3/12 xl:w-4/12 lg:w-5/12 md:w-6/12 w-full px-[15px]">
                                      <div class="bg-[#F5F9FF] rounded-[10px] mb-[30px]">
                                        <div class="bg-dark p-[25px] rounded-[10px]">
                                          <span class="w-[30px] h-[2px] bg-white block mb-[10px]"></span>
                                          <h3 class="text-white text-[18px] font-medium leading-[1.5] tracking-[-0.06px] uppercase mb-[12px]">
                                            EVALUATION FUND</h3>
                                          <p class="text-white text-[38px] font-semibold leading-[1.5] tracking-[-0.06px] uppercase">
                                            $100,000</p>
                                        </div>
                                        <div class="content py-[15px] px-[25px]">
                                          <div class="content-list">
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              Two Step Assessment Process
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              5% Daily Drawdown
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              10% Overall Drawdown
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              5 Trading Days
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              One Time Refundable Fee $549
                                            </p>
                                          </div>
                                          <router-link to="/payment"
                                                       class="flex items-center justify-center bg-primary text-white xl:py-[10px] py-[15px] px-[30px] font-semibold rounded-[5px] w-full xl:min-h-[60px] capitalize">
                                            Get Funded
                                          </router-link>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="2xl:w-3/12 xl:w-4/12 lg:w-5/12 md:w-6/12 w-full px-[15px]">
                                      <div class="bg-[#F5F9FF] rounded-[10px] mb-[30px]">
                                        <div class="bg-dark p-[25px] rounded-[10px]">
                                          <span class="w-[30px] h-[2px] bg-white block mb-[10px]"></span>
                                          <h3 class="text-white text-[18px] font-medium leading-[1.5] tracking-[-0.06px] uppercase mb-[12px]">
                                            EVALUATION FUND</h3>
                                          <p class="text-white text-[38px] font-semibold leading-[1.5] tracking-[-0.06px] uppercase">
                                            $200,000</p>
                                        </div>
                                        <div class="content py-[15px] px-[25px]">
                                          <div class="content-list">
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              Two Step Assessment Process
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              5% Daily Drawdown
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              10% Overall Drawdown
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              5 Trading Days
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              One Time Refundable Fee $999
                                            </p>
                                          </div>
                                          <router-link to="/payment"
                                                       class="flex items-center justify-center bg-primary text-white xl:py-[10px] py-[15px] px-[30px] font-semibold rounded-[5px] w-full xl:min-h-[60px] capitalize">
                                            Get Funded
                                          </router-link>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="2xl:w-3/12 xl:w-4/12 lg:w-5/12 md:w-6/12 w-full px-[15px]">
                                      <div class="bg-[#F5F9FF] rounded-[10px] mb-[30px]">
                                        <div class="bg-dark p-[25px] rounded-[10px]">
                                          <span class="w-[30px] h-[2px] bg-white block mb-[10px]"></span>
                                          <h3 class="text-white text-[18px] font-medium leading-[1.5] tracking-[-0.06px] uppercase mb-[12px]">
                                            EVALUATION FUND</h3>
                                          <p class="text-white text-[38px] font-semibold leading-[1.5] tracking-[-0.06px] uppercase">
                                            $300,000</p>
                                        </div>
                                        <div class="content py-[15px] px-[25px]">
                                          <div class="content-list">
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              Two Step Assessment Process
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              5% Daily Drawdown
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              10% Overall Drawdown
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              5 Trading Days
                                            </p>
                                            <p class="relative pl-[25px] py-[10px] text-[#4A485F] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[10px]">
                                              <svg
                                                  class="absolute left-0 top-[50%] w-[20px] h-[20px] fill-primary mr-[10px] translate-y-[-50%]"
                                                  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                              </svg>
                                              One Time Refundable Fee $999
                                            </p>
                                          </div>
                                          <router-link to="/payment"
                                                       class="flex items-center justify-center bg-primary text-white xl:py-[10px] py-[15px] px-[30px] font-semibold rounded-[5px] w-full xl:min-h-[60px] capitalize">
                                            Get Funded
                                          </router-link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div :class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                              <div class="my-plan-content flex justify-between text-center mb-[50px] gap-[20px]">
                                <h4 class="text-dark md:text-[18px] text-[16px] font-semibold leading-[1.5] tracking-[-0.06px] dark:text-white">
                                  Payment Method
                                </h4>
                                <a href="#"
                                   class="inline-flex items-center text-primary md:text-[18px] text-[16px] font-semibold leading-[1.5] tracking-[-0.06px] dark:text-white">
                                  <svg class="w-[20px] h-[20px] fill-primary mr-[5px]" focusable="false"
                                       viewBox="0 0 24 24"
                                       aria-hidden="true">
                                    <path
                                        d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                  </svg>
                                  Add Card
                                </a>
                              </div>
                              <div class="payment-method text-center py-[40px]">
                                <div class="thumb inline-block mb-[24px]">
                                  <img src="/assets/img/thumb/thumb-11.png" alt="thumb">
                                </div>
                                <p class="text-dark lg:text-[22px] text-[18px] font-semibold leading-[1.185] tracking-[-0.06px] dark:text-white/70">
                                  No history found!
                                </p>
                              </div>
                              <div
                                  class="info text-center p-[20px] rounded-[10px] bg-[#F5F9FF] relative z-10 overflow-hidden mt-[50px]  dark:bg-dark">
                                <p class="text-[#4A485F] xl:text-[16px] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[20px]  dark:text-white/70">
                                  Need other payment methods? Select your preferred payment option below
                                </p>
                                <div class="bank-thumb-wrap flex flex-wrap justify-center gap-[10px]">
                                  <div
                                      class="thumb bg-white w-[85px] p-[10px] my-[5px] shadow-[0_1px_7px_rgba(0,0,0,0.15)] rounded-[5px]">
                                    <img src="/assets/img/bank/BANK.png" alt="img">
                                  </div>
                                  <div
                                      class="thumb bg-white w-[85px] p-[10px] my-[5px] shadow-[0_1px_7px_rgba(0,0,0,0.15)] rounded-[5px]">
                                    <img src="/assets/img/bank/BTC.png" alt="img">
                                  </div>
                                  <div
                                      class="thumb bg-white w-[85px] p-[10px] my-[5px] shadow-[0_1px_7px_rgba(0,0,0,0.15)] rounded-[5px]">
                                    <img src="/assets/img/bank/DOGE.png" alt="img">
                                  </div>
                                  <div
                                      class="thumb bg-white w-[85px] p-[10px] my-[5px] shadow-[0_1px_7px_rgba(0,0,0,0.15)] rounded-[5px]">
                                    <img src="/assets/img/bank/ETH.png" alt="img">
                                  </div>
                                  <div
                                      class="thumb bg-white w-[85px] p-[10px] my-[5px] shadow-[0_1px_7px_rgba(0,0,0,0.15)] rounded-[5px]">
                                    <img src="/assets/img/bank/LTC.png" alt="img">
                                  </div>
                                  <div
                                      class="thumb bg-white w-[85px] p-[10px] my-[5px] shadow-[0_1px_7px_rgba(0,0,0,0.15)] rounded-[5px]">
                                    <img src="/assets/img/bank/Perfect_money.png" alt="img">
                                  </div>
                                  <div
                                      class="thumb bg-white w-[85px] p-[10px] my-[5px] shadow-[0_1px_7px_rgba(0,0,0,0.15)] rounded-[5px]">
                                    <img src="/assets/img/bank/SOLANA.png" alt="img">
                                  </div>
                                  <div
                                      class="thumb bg-white w-[85px] p-[10px] my-[5px] shadow-[0_1px_7px_rgba(0,0,0,0.15)] rounded-[5px]">
                                    <img src="/assets/img/bank/USDC.png" alt="img">
                                  </div>
                                  <div
                                      class="thumb bg-white w-[85px] p-[10px] my-[5px] shadow-[0_1px_7px_rgba(0,0,0,0.15)] rounded-[5px]">
                                    <img src="/assets/img/bank/USDT.png" alt="img">
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div :class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                              <div
                                  class="my-plan-content flex md:flex-nowrap flex-wrap justify-between text-center mb-[50px] gap-[20px]">
                                <h4 class="text-dark md:text-[18px] text-[16px] font-semibold leading-[1.5] tracking-[-0.06px] dark:text-white">
                                  Payment History
                                </h4>
                                <a href="#"
                                   class="inline-flex items-center text-primary md:text-[18px] text-[16px] font-semibold leading-[1.5] tracking-[-0.06px] dark:text-white">
                                  Topup & Reset History
                                </a>
                              </div>
                              <div class="payment-history text-center py-[40px]">
                                <div class="thumb inline-block mb-[24px]">
                                  <img src="/assets/img/thumb/thumb-11.png" alt="thumb">
                                </div>
                                <p class="text-dark lg:text-[22px] text-[18px] font-semibold leading-[1.185] tracking-[-0.06px] dark:text-white/70">
                                  No history found!
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- account information end -->
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Billing",
  data() {
    return {
      isMenubar: false,
      isUserInfo: false,
      isNotification: false,
      isSidebar: true,
      openTab: 1,
      openTab2: 1
    }
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber
    },
    toggleTabs2: function (tabNumber) {
      this.openTab2 = tabNumber
    }
  }
}
</script>

<style scoped>

</style>