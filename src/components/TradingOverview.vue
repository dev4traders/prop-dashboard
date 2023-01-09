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
    <div class="dashboard-info">
      This is a sample dashboard, start trading for real data.
    </div>
    <div class="inner-content">
      <div class="breadcrumb-wrap">
        <div class="breadcrumb-title">
          <svg class="breadcrumb-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path>
          </svg>
          Trading Overview
        </div>
      </div>
      <div class="dashboard-wrapper">
        <div class="flex flex-wrap mx-[-15px]">
          <div class="xl:w-8/12 lg:w-7/12 w-full px-[15px]">
            <!-- trading objectives start-->
            <div class="flex flex-wrap mx-[-15px]">
              <div class="w-full px-[15px]">
                <div class="card-wrap">
                  <h3 class="card-title">Trading Objectives</h3>
                  <div class="content">
                    <!-- trading-row start-->
                    <div class="flex flex-wrap mx-[-15px]">
                      <div class="xl:w-6/12 w-full px-[15px]">
                        <!-- trading-card start-->
                        <div class="bg-white p-[30px] rounded-[15px] mb-[30px] dark:bg-toggle">
                          <p class="text-dark text-[18px] leading-[1.5] tracking-[-0.05px] mb-[20px] dark:text-white">
                            Minimum Trading Days
                            <svg class="inline-block w-[17px] h-[17px] fill-dark/70 ml-[5px] dark:fill-white" focusable="false"
                                 viewBox="0 0 24 24"
                                 aria-hidden="true">
                              <path
                                  d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
                            </svg>
                          </p>
                          <p class="flex flex-wrap items-center justify-between text-dark text-[18px] leading-[1.5] tracking-[-0.05px] mb-[15px] dark:text-white">
                            <span>Minimum</span>
                            <span>10 days</span>
                          </p>
                          <p class="flex flex-wrap items-center justify-between text-dark text-[18px] leading-[1.5] tracking-[-0.05px] mb-[15px] dark:text-white">
                            <span>Current Result</span>
                            <span class="text-primary">2 days</span>
                          </p>
                          <p>
                            <span class="text-primary bg-primary/20 text-[14px] py-[6px] px-[16px] rounded-[5px]">Ongoing</span>
                          </p>
                        </div>
                        <!-- trading-card end-->
                      </div>
                      <div class="xl:w-6/12 w-full px-[15px]">
                        <!-- trading-card start-->
                        <div class="bg-white p-[30px] rounded-[15px] mb-[30px] dark:bg-toggle">
                          <p class="text-dark text-[18px] leading-[1.5] tracking-[-0.05px] mb-[20px] dark:text-white">
                            Daily Loss Limit
                            <svg class="inline-block w-[17px] h-[17px] fill-dark/70 ml-[5px] dark:fill-white" focusable="false"
                                 viewBox="0 0 24 24"
                                 aria-hidden="true">
                              <path
                                  d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
                            </svg>
                          </p>
                          <p class="flex flex-wrap items-center justify-between text-dark text-[18px] leading-[1.5] tracking-[-0.05px] mb-[15px] dark:text-white">
                            <span>Max. Loss</span>
                            <span>$1250</span>
                          </p>
                          <p class="flex flex-wrap items-center justify-between text-dark text-[18px] leading-[1.5] tracking-[-0.05px] mb-[15px] dark:text-white">
                            <span>Max. Loss recorded</span>
                            <span class="text-primary">$1000</span>
                          </p>
                          <p>
                            <span class="text-primary bg-primary/20 text-[14px] py-[6px] px-[16px] rounded-[5px]">Ongoing</span>
                          </p>
                        </div>
                        <!-- trading-card end-->
                      </div>
                      <div class="xl:w-6/12 w-full px-[15px]">
                        <!-- trading-card start-->
                        <div class="bg-white p-[30px] rounded-[15px] dark:bg-toggle">
                          <p class="text-dark text-[18px] leading-[1.5] tracking-[-0.05px] mb-[20px] dark:text-white">
                            Monthy Loss Limit
                            <svg class="inline-block w-[17px] h-[17px] fill-dark/70 ml-[5px] dark:fill-white" focusable="false"
                                 viewBox="0 0 24 24"
                                 aria-hidden="true">
                              <path
                                  d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
                            </svg>
                          </p>
                          <p class="flex flex-wrap items-center justify-between text-dark text-[18px] leading-[1.5] tracking-[-0.05px] mb-[15px] dark:text-white">
                            <span>Max. Loss</span>
                            <span>$2750</span>
                          </p>
                          <p class="flex flex-wrap items-center justify-between text-dark text-[18px] leading-[1.5] tracking-[-0.05px] mb-[15px] dark:text-white">
                            <span>Max. Loss recorded</span>
                            <span class="text-primary">$1500</span>
                          </p>
                          <p>
                            <span class="text-primary bg-primary/20 text-[14px] py-[6px] px-[16px] rounded-[5px]">Ongoing</span>
                          </p>
                        </div>
                        <!-- trading-card end-->
                      </div>
                    </div>
                    <!-- trading-row end-->
                  </div>
                </div>
              </div>
            </div>
            <!-- trading objectives end-->
            <!-- loss start-->
            <div class="flex flex-wrap mx-[-15px]">
              <div class="xl:w-6/12 w-full px-[15px]">
                <!-- today-loss start-->
                <div class="card-wrap">
                  <h3 class="card-title">Trading Growth Curve</h3>
                  <div class="content">
                    <div
                        class="flex flex-wrap items-center justify-between text-dark text-[18px] leading-[1.5] tracking-[-0.05px] border-b border-[#000]/10 pb-[10px] mb-[10px] dark:text-white">
                      <p class="inline-flex items-center">
                        <svg class="inline-block w-[20px] h-[20px] fill-dark mr-[5px] dark:fill-white" focusable="false"
                             viewBox="0 0 24 24" aria-hidden="true">
                          <path
                              d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                        Today's Permitted Loss
                      </p>
                      <p class="text-primary bg-primary/20 text-[18px] font-bold py-[6px] px-[16px] rounded-[5px] dark:text-white dark:bg-primary">
                        $750</p>
                    </div>
                    <div
                        class="flex flex-wrap items-center justify-between text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                      <p class="inline-flex items-center">
                        <svg class="inline-block w-[20px] h-[20px] fill-dark mr-[5px] dark:fill-white" focusable="false"
                             viewBox="0 0 24 24" aria-hidden="true">
                          <path
                              d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                        Max Permitted Loss
                      </p>
                      <p class="text-primary bg-primary/20 text-[18px] font-bold py-[6px] px-[16px] rounded-[5px] dark:text-white dark:bg-primary">
                        $1500
                      </p>
                    </div>
                  </div>
                </div>
                <!-- today-loss end-->
              </div>
              <div class="xl:w-6/12 w-full px-[15px]">
                <!-- lose-counter start-->
                <div class="card-wrap">
                  <h3 class="card-title text-center">Today's Permitted Loss Will Reset In</h3>
                  <div class="content text-center py-[30px]">
                    <div class="lose-counter inline-block text-white bg-primary py-[5px] px-[15px] rounded-[5px]">
                      <span class="hour">-2</span>:<span class="minute">56</span>:<span class="second">29</span>
                    </div>
                  </div>
                </div>
                <!-- lose-counter end-->
              </div>
            </div>
            <!-- loss end-->

            <!-- consistency start-->
            <div class="flex flex-wrap mx-[-15px]">
              <div class="w-full px-[15px]">
                <div class="card-wrap">
                  <h3 class="card-title">Consistency</h3>
                  <div class="content overflow-hidden">
                    <!-- consistency-table start-->
                    <div class="consistency-wrap overflow-x-auto">
                      <div class="responsive-wrap 2xl:min-w-full xl:min-w-[1000px] lg:min-w-[1100px] min-w-[1100px]">
                        <div
                            class="heading grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1.2fr] border-b border-[#000]/10 py-[10px]">
                          <p class=" text-dark md:text-[18px] text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] dark:text-white">
                            Consistency
                          </p>
                          <p class="inline-flex items-center text-dark md:text-[18px] text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] dark:text-white">
                            Current Avg.
                            <svg class="inline-block w-[17px] h-[17px] fill-dark mr-[5px] dark:fill-white" focusable="false"
                                 viewBox="0 0 24 24"
                                 aria-hidden="true">
                              <path
                                  d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
                            </svg>
                          </p>
                          <p class="inline-flex items-center text-dark md:text-[18px] text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] dark:text-white">
                            Overall Avg.
                            <svg class="inline-block w-[17px] h-[17px] fill-dark mr-[5px] dark:fill-white" focusable="false"
                                 viewBox="0 0 24 24"
                                 aria-hidden="true">
                              <path
                                  d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
                            </svg>
                          </p>
                          <p class="inline-flex items-center text-dark md:text-[18px] text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] dark:text-white">
                            Upper Limit
                            <svg class="inline-block w-[17px] h-[17px] fill-dark mr-[5px] dark:fill-white" focusable="false"
                                 viewBox="0 0 24 24"
                                 aria-hidden="true">
                              <path
                                  d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
                            </svg>
                          </p>
                          <p class="inline-flex items-center text-dark md:text-[18px] text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] dark:text-white">
                            Lower Limit
                            <svg class="inline-block w-[17px] h-[17px] fill-dark mr-[5px] dark:fill-white" focusable="false"
                                 viewBox="0 0 24 24"
                                 aria-hidden="true">
                              <path
                                  d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
                            </svg>
                          </p>
                          <p class="inline-flex items-center text-dark md:text-[18px] text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] dark:text-white">
                            Standard Deviation
                            <svg class="inline-block w-[17px] h-[17px] fill-dark mr-[5px] dark:fill-white" focusable="false"
                                 viewBox="0 0 24 24"
                                 aria-hidden="true">
                              <path
                                  d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
                            </svg>
                          </p>
                        </div>
                        <div
                            class="content grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1.2fr] border-b border-[#000]/10 py-[10px]">
                          <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                            Trade
                          </p>
                          <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                            8.00
                          </p>
                          <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                            12.00
                          </p>
                          <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                            30.00
                          </p>
                          <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                            4.80
                          </p>
                          <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                            2
                          </p>
                        </div>
                        <div class="content grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1.2fr] py-[10px]">
                          <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                            Lot
                          </p>
                          <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                            30.00
                          </p>
                          <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                            22.00
                          </p>
                          <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                            55.00
                          </p>
                          <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                            8.80
                          </p>
                          <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                            2
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- consistency-table end-->
                  </div>
                </div>
              </div>
            </div>
            <!-- consistency end-->
          </div>
          <div class="xl:w-4/12 lg:w-5/12 w-full px-[15px]">
            <!--  Account Growth-->
            <div class="flex flex-wrap mx-[-15px]">
              <div class="w-full px-[15px]">
                <div class="card-wrap">
                  <div class="card-heading flex items-center justify-between mb-[20px]">
                    <h3 class="card-title !mb-0">Account Growth</h3>
                    <div class="icon">
                      <svg class="w-[17px] h-[17px] dark:fill-white" focusable="false" viewBox="0 0 24 24" aria-hidden="true"
                           title="Account Growth Percentage">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="content">
                    <p class="text-dark text-[28px] text-center leading-[1.5] font-medium tracking-[-0.05px] py-[30px] dark:text-white">
                      0%</p>
                  </div>
                </div>
              </div>
            </div>
            <!--  Details Stats -->
            <div class="card-wrap">
              <h3 class="card-title">Details Stats</h3>
              <div class="content text-center">
                  <div class="stats-list flex flex-wrap items-center justify-between mb-[15px] border-b border-dark/10 dark:border-white/10">
                    <div class="text">
                      <p class="inline-flex items-center text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <img class="inline-block w-[20px] h-[20px] mr-[5px]" src="/assets/img/icon/icon-equity.svg"
                             alt="icon">
                        Equity
                        <svg class="inline-block w-[17px] h-[17px] fill-dark ml-[5px] dark:fill-white" focusable="false"
                             viewBox="0 0 24 24" aria-hidden="true">
                          <path
                              d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                      </p>
                    </div>
                    <div class="numb text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                      $58500.00
                    </div>
                  </div>
                  <div
                      class="stats-list flex flex-wrap items-center justify-between mb-[15px] border-b border-dark/10 dark:border-white/10">
                    <div class="text">
                      <p class="inline-flex items-center text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <img class="inline-block w-[20px] h-[20px] mr-[5px]" src="/assets/img/icon/icon-balance.svg"
                             alt="icon">
                        Balance
                        <svg class="inline-block w-[17px] h-[17px] fill-dark ml-[5px] dark:fill-white" focusable="false"
                             viewBox="0 0 24 24" aria-hidden="true">
                          <path
                              d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                      </p>
                    </div>
                    <div class="numb text-dark text-[18px] leading-[1.5] tracking-[-0.05px] py-[15px] dark:text-white">
                      $50000.00
                    </div>
                  </div>
                  <div
                      class="stats-list flex flex-wrap items-center justify-between mb-[15px]  border-b border-dark/10 dark:border-white/10">
                    <div class="text">
                      <p class="inline-flex items-center text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <img class="inline-block w-[20px] h-[20px] mr-[5px]"
                             src="/assets/img/icon/icon-line-chart-up.svg"
                             alt="icon">
                        Avg. Winning Trade
                        <svg class="inline-block w-[17px] h-[17px] fill-dark ml-[5px] dark:fill-white" focusable="false"
                             viewBox="0 0 24 24" aria-hidden="true">
                          <path
                              d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                      </p>
                    </div>
                    <div class="numb text-dark text-[18px] leading-[1.5] tracking-[-0.05px] py-[15px] dark:text-white">
                      $70.00
                    </div>
                  </div>
                  <div
                      class="stats-list flex flex-wrap items-center justify-between mb-[15px]  border-b border-dark/10 dark:border-white/10">
                    <div class="text">
                      <p class="inline-flex items-center text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <img class="inline-block w-[20px] h-[20px] mr-[5px]"
                             src="/assets/img/icon/icon-line-chart-down.svg"
                             alt="icon">
                        Avg. Losing Trade
                        <svg class="inline-block w-[17px] h-[17px] fill-dark ml-[5px] dark:fill-white" focusable="false"
                             viewBox="0 0 24 24" aria-hidden="true">
                          <path
                              d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                      </p>
                    </div>
                    <div class="numb text-dark text-[18px] leading-[1.5] tracking-[-0.05px] py-[15px] dark:text-white">
                      -$20.00
                    </div>
                  </div>
                  <div
                      class="stats-list flex flex-wrap items-center justify-between mb-[15px]  border-b border-dark/10 dark:border-white/10">
                    <div class="text">
                      <p class="inline-flex items-center text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <img class="inline-block w-[20px] h-[20px] mr-[5px]"
                             src="/assets/img/icon/icon-line-chart-down.svg"
                             alt="icon">
                        Avg. Losing Trade
                        <svg class="inline-block w-[17px] h-[17px] fill-dark ml-[5px] dark:fill-white" focusable="false"
                             viewBox="0 0 24 24" aria-hidden="true">
                          <path
                              d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                      </p>
                    </div>
                    <div class="numb text-dark text-[18px] leading-[1.5] tracking-[-0.05px] py-[15px] dark:text-white">
                      105
                    </div>
                  </div>
                  <div
                      class="stats-list flex flex-wrap items-center justify-between mb-[15px]  border-b border-dark/10 dark:border-white/10">
                    <div class="text">
                      <p class="inline-flex items-center text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <img class="inline-block w-[20px] h-[20px] mr-[5px]"
                             src="/assets/img/icon/icon-grid.svg"
                             alt="icon">
                        Avg. Losing Trade
                        <svg class="inline-block w-[17px] h-[17px] fill-dark ml-[5px] dark:fill-white" focusable="false"
                             viewBox="0 0 24 24" aria-hidden="true">
                          <path
                              d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                      </p>
                    </div>
                    <div class="numb text-dark text-[18px] leading-[1.5] tracking-[-0.05px] py-[15px] dark:text-white">
                      Lots
                    </div>
                  </div>
                  <div
                      class="stats-list flex flex-wrap items-center justify-between mb-[15px]  border-b border-dark/10 dark:border-white/10">
                    <div class="text">
                      <p class="inline-flex items-center text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <img class="inline-block w-[20px] h-[20px] mr-[5px]"
                             src="/assets/img/icon/icon-vertical-align-center.svg"
                             alt="icon">
                        Average RRR
                        <svg class="inline-block w-[17px] h-[17px] fill-dark ml-[5px]" focusable="false"
                             viewBox="0 0 24 24" aria-hidden="true">
                          <path
                              d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                      </p>
                    </div>
                    <div class="numb text-dark text-[18px] leading-[1.5] tracking-[-0.05px] py-[15px] dark:text-white">
                      0
                    </div>
                  </div>
                  <div class="stats-list flex flex-wrap items-center justify-between mb-[15px] ">
                    <div class="text">
                      <p class="inline-flex items-center text-dark text-[18px] leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <img class="inline-block w-[20px] h-[20px] mr-[5px]"
                             src="/assets/img/icon/icon-merge-type.svg"
                             alt="icon">
                        Win Rate
                        <svg class="inline-block w-[17px] h-[17px] fill-dark ml-[5px] dark:fill-white" focusable="false"
                             viewBox="0 0 24 24" aria-hidden="true">
                          <path
                              d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                        </svg>
                      </p>
                    </div>
                    <div class="numb text-dark text-[18px] leading-[1.5] tracking-[-0.05px] py-[15px] dark:text-white">
                      65%
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <!-- trading history start-->
        <div class="flex flex-wrap mx-[-15px]">
          <div class="w-full px-[15px]">
            <div class="card-wrap">
              <div class="card-heading flex items-center justify-between mb-[20px]">
                <h3 class="card-title !mb-0">Trading History</h3>
                <a href="#" class="bg-primary text-white py-[10px] px-[15px] font-semibold rounded-[5px]">Download</a>
              </div>
              <div class="content">
                <!-- trading-table start-->
                <div class="trading-wrap overflow-x-auto">
                  <div class="responsive-wrap min-w-[1200px]">
                    <div
                        class="heading grid grid-cols-[50px_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[10px] border-b border-[#000]/10 py-[10px]">
                      <p class=" text-dark text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] dark:text-white">
                        SN
                      </p>
                      <p class="inline-flex items-center text-dark text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] dark:text-white">
                        Open Time
                      </p>
                      <p class="inline-flex items-center text-dark text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] dark:text-white">
                        Open Price
                      </p>
                      <p class="inline-flex items-center text-dark text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] dark:text-white">
                        Close Time
                      </p>
                      <p class="inline-flex items-center text-dark text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] dark:text-white">
                        Close Price
                      </p>
                      <p class="inline-flex items-center text-dark text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] dark:text-white">
                        lots
                      </p>
                      <p class="inline-flex items-center text-dark text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] dark:text-white">
                        Profit
                      </p>
                      <p class="inline-flex items-center text-dark text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] dark:text-white">
                        Commission
                      </p>
                      <p class="inline-flex items-center text-dark text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] dark:text-white">
                        Swap
                      </p>
                      <p class="inline-flex items-center text-dark text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] dark:text-white">
                        Symbol
                      </p>
                      <p class="inline-flex items-center text-dark text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] dark:text-white">
                        Type
                      </p>
                      <p class="inline-flex items-center text-dark text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] dark:text-white">
                        Details
                      </p>
                    </div>
                    <div
                        class="content grid items-center grid-cols-[50px_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[10px] border-b border-[#000]/10 py-[10px]">
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        1
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        2022.01.01 08:01:47
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        47199.83
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        2022.01.01 08:10:02
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        47254.29
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        1
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        $54.46
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        -$236.00
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        0
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        BTCUSD
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        Buy
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <a href="#"
                           class="inline-block px-[10px] py-[5px] text-dark border border-dark rounded-[5px] transition-all duration-300 ease-linear hover:bg-primary hover:border-primary hover:text-white dark:bg-primary dark:text-white">View</a>
                      </p>
                    </div>
                    <div
                        class="content grid items-center grid-cols-[50px_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[10px] border-b border-[#000]/10 py-[10px]">
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        2
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        2022.01.01 08:01:47
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        47199.83
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        2022.01.01 08:10:02
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        47254.29
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        1
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        $54.46
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        -$236.00
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        0
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        BTCUSD
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        Buy
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <a href="#"
                           class="inline-block px-[10px] py-[5px] text-dark border border-dark rounded-[5px] transition-all duration-300 ease-linear hover:bg-primary hover:border-primary hover:text-white  dark:bg-primary dark:text-white">View</a>
                      </p>
                    </div>
                    <div
                        class="content grid items-center grid-cols-[50px_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[10px] border-b border-[#000]/10 py-[10px]">
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        3
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        2022.01.01 08:01:47
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        47199.83
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        2022.01.01 08:10:02
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        47254.29
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        1
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        $54.46
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        -$236.00
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        0
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        BTCUSD
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        Buy
                      </p>
                      <p class="text-[14px] text-dark leading-[1.5] tracking-[-0.05px] dark:text-white">
                        <a href="#"
                           class="inline-block px-[10px] py-[5px] text-dark border border-dark rounded-[5px] transition-all duration-300 ease-linear hover:bg-primary hover:border-primary hover:text-white  dark:bg-primary  dark:text-white">View</a>
                      </p>
                    </div>
                  </div>
                </div>
                <!-- trading-table end-->
              </div>
            </div>
          </div>
        </div>
        <!-- trading history end-->
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "TradingOverview",
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