import React, { Component } from 'react';
import './youtubeVideos.css';
import { Link } from "react-router-dom";
import Button from "../../components/CustomButtons/Button.js";

class YoutubeVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <div id="app" class="h-full grid">
                    <header class="bg-white col-span-3">
                        <div class="flex justify-between items-center px-5 py-2">
                            <div class="flex font-bold">
                                Well Women
			</div>
                            {/* <div class="flex-1 flex">
                                <div class="flex m-auto w-1/2 relative border yt-border-gray-600 rounded-sm">
                                    <input class="appearance-none px-3 py-2 w-full h-8 border-r yt-border-gray-600 placeholder-gray-500 focus:outline-none" type="search" placeholder="Search" />
                                    <div class="flex px-6 yt-bg-gray-100 yt-text-gray-500 hover:text-gray-700 hover:yt-bg-gray-200">
                                        <svg class="w-5 h-5 fill-current m-auto" viewBox="0 0 24 24">
                                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div> */}
                            <div class="flex items-center">
                                <div class="flex items-center mr-4">
                                    {/* <div class="p-2 yt-text-gray-500">
						<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
							<path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path>
						</svg>
					</div> */}
                                    {/* <div class="p-2 yt-text-gray-500">
						<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
							<path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>
						</svg>
					</div> */}
                                    <div class="p-2 yt-text-gray-500">
                                        <Button
                                            className='startbtn'
                                            color="danger"
                                            size="sm"
                                            rel="noopener noreferrer"
                                        >
                                            <Link to="/">
                                                Logout
                                    </Link>
                                        </Button>
                                    </div>
                                </div>
                                {/* <img class="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/women/26.jpg" alt="Profile" /> */}
                            </div>
                        </div>
                    </header>
                    {/* <nav v-show="sidebar.open" class="bg-white overflow-auto flex-shrink-0 w-64 col-auto">
		<div class="border-b yt-border-gray-400 py-2">
			<div class="py-2 px-5 yt-bg-gray-400 flex items-center text-sm text-gray-700 font-medium">
				<div class="mr-4 yt-text-red-100">
					<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
						<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path>
					</svg>
				</div>
				Home
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4 yt-text-gray-500">
					<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
						<path d="M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z"></path>
					</svg>
				</div>
				Trending
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4 yt-text-gray-500">
					<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
						<path d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"></path>
					</svg>
				</div>
				Subscriptions
			</div>
		</div>
		<div class="border-b yt-border-gray-400 py-2">
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4 yt-text-gray-500">
					<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
						<path fill="none" d="M0 0h24v24H0z"></path>
						<path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path>
					</svg>
				</div>
				Library
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4 yt-text-gray-500">
					<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
						<path d="M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z"></path>
					</svg>
				</div>
				History
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4 yt-text-gray-500">
					<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
						<path d="M18.4 5.6v12.8H5.6V5.6h12.8zm0-1.8H5.6a1.8 1.8 0 0 0-1.8 1.8v12.8a1.8 1.8 0 0 0 1.8 1.9h12.8a1.8 1.8 0 0 0 1.9-1.9V5.6a1.8 1.8 0 0 0-1.9-1.8z"></path>
						<path d="M10.2 9v6.5l5-3.2-5-3.2z" class="style-scope yt-icon"></path>
					</svg>
				</div>
				Your videos
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4 yt-text-gray-500">
					<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
						<path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path>
					</svg>
				</div>
				Watch later
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4 yt-text-gray-500">
					<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
						<path d="M3.75 18.75h3v-9h-3v9zm16.5-8.25c0-.83-.68-1.5-1.5-1.5h-4.73l.7-3.43.03-.24c0-.3-.13-.6-.33-.8l-.8-.78L8.7 8.7c-.3.26-.45.64-.45 1.05v7.5c0 .82.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.9l2.27-5.3c.06-.18.1-.36.1-.55v-1.5z"></path>
					</svg>
				</div>
				Liked videos
			</div>
		</div>
		<div class="border-b yt-border-gray-400 py-2">
			<div class="font-medium px-4 py-2 text-sm yt-text-gray-500 uppercase">
				Subscriptions
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4">
					<div class="w-6 h-6 rounded-full overflow-hidden">
						<img class="block w-full h-full object-cover" src="https://picsum.photos/24.webp?random=1" alt="Comedy Central" />
					</div>
				</div>
				Comedy Central
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4">
					<div class="w-6 h-6 rounded-full overflow-hidden">
						<img class="block w-full h-full object-cover" src="https://picsum.photos/24.webp?random=2" alt="Ben Awad" />
					</div>
				</div>
				Ben Awad
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4">
					<div class="w-6 h-6 rounded-full overflow-hidden">
						<img class="block w-full h-full object-cover" src="https://picsum.photos/24.webp?random=3" alt="Nobu Design" />
					</div>
				</div>
				Nobu Design
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4">
					<div class="w-6 h-6 rounded-full overflow-hidden">
						<img class="block w-full h-full object-cover" src="https://picsum.photos/24.webp?random=4" alt="Andre Madarang" />
					</div>
				</div>
				Andre Madarang
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4">
					<div class="w-6 h-6 rounded-full overflow-hidden">
						<img class="block w-full h-full object-cover" src="https://picsum.photos/24.webp?random=5" alt="Bitfumes" />
					</div>
				</div>
				Bitfumes
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4">
					<div class="w-6 h-6 rounded-full overflow-hidden">
						<img class="block w-full h-full object-cover" src="https://picsum.photos/24.webp?random=6" alt="Vox" />
					</div>
				</div>
				Vox
			</div>
		</div>
		<div class="border-b yt-border-gray-400 py-2">
			<div class="font-medium px-4 py-2 text-sm yt-text-gray-500 uppercase">
				More From Youtube
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4 yt-text-gray-500">
					<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
						<path fill-rule="nonzero" d="M21.78 8s-.2-1.37-.8-1.97c-.75-.8-1.6-.8-2-.85C16.2 4.98 12 5 12 5s-4.18-.02-6.97.18c-.4.05-1.24.05-2 .85-.6.6-.8 1.97-.8 1.97s-.2 1.63-.23 3.23v1.7c.03 1.6.23 3.2.23 3.2s.2 1.4.8 2c.76.8 1.75.76 2.2.85 1.57.15 6.6.18 6.77.18 0 0 4.2 0 7-.2.38-.04 1.23-.04 2-.84.6-.6.8-1.98.8-1.98s.2-1.6.2-3.22v-1.7c-.02-1.6-.22-3.22-.22-3.22zm-11.8 7V9.16l5.35 3.03L9.97 15z"></path>
					</svg>
				</div>
				YouTube Premium
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4 yt-text-gray-500">
					<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
						<path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path>
					</svg>
				</div>
				YouTube Movies
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4 yt-text-gray-500">
					<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
						<path d="M22,13V8l-5-3l-5,3l0,0L7,5L2,8v5l10,6L22,13z M9,11H7v2H6v-2H4v-1h2V8h1v2h2V11z M15,13 c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S15.55,13,15,13z M18,11c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S18.55,11,18,11z"></path>
					</svg>
				</div>
				Gaming
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4 yt-text-gray-500">
					<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
						<path d="M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"></path>
						<circle cx="12" cy="12" r="3"></circle>
					</svg>
				</div>
				Live
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4 yt-text-gray-500">
					<svg class="w-6 h-6 fill-current" viewBox="0 0 593 599.79">
						<path d="M296.5 214.26l195.89 113.06H100.61L296.5 214.26m0-42.72L6.89 338.69c-12.17 7-7.19 25.63 6.87 25.63h565.49c14 0 19-18.61 6.86-25.63L296.5 171.54zM315 150.12h-37V97.2s14.52-.61 18.5-.84c14.93-.85 29.41-13.77 29.41-30a29.41 29.41 0 0 0-58.82 0h-37A66.41 66.41 0 1 1 315 130.14z"></path>
						<path d="M259.39 144.69h74.23v48.27h-74.23zM186.01 549.93h37.11v49.86h-37.11zM334.47 549.93h37.11v49.86h-37.11zM378.46 356.41h56.28v144.32h-56.28zM260.24 549.93h37.11v49.86h-37.11z"></path>
						<path d="M168.87 327.09h217.51v230H168.87z"></path>
					</svg>
				</div>
				Fashion & Beauty
			</div>
		</div>
		<div class="border-b yt-border-gray-400 py-2">
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4 yt-text-gray-500">
					<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
						<path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.1-1.65c.2-.15.25-.42.13-.64l-2-3.46c-.12-.22-.4-.3-.6-.22l-2.5 1c-.52-.4-1.08-.73-1.7-.98l-.37-2.65c-.06-.24-.27-.42-.5-.42h-4c-.27 0-.48.18-.5.42l-.4 2.65c-.6.25-1.17.6-1.7.98l-2.48-1c-.23-.1-.5 0-.6.22l-2 3.46c-.14.22-.08.5.1.64l2.12 1.65c-.04.32-.07.65-.07.98s.02.66.06.98l-2.1 1.65c-.2.15-.25.42-.13.64l2 3.46c.12.22.4.3.6.22l2.5-1c.52.4 1.08.73 1.7.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.6-.25 1.17-.6 1.7-.98l2.48 1c.23.1.5 0 .6-.22l2-3.46c.13-.22.08-.5-.1-.64l-2.12-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
					</svg>
				</div>
				Settings
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4 yt-text-gray-500">
					<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
						<path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
					</svg>
				</div>
				Report history
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4 yt-text-gray-500">
					<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
					</svg>
				</div>
				Help
			</div>
			<div class="py-2 px-5 flex items-center text-sm hover:yt-bg-gray-100">
				<div class="mr-4 yt-text-gray-500">
					<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
						<path d="M0 0h24v24H0z" fill="none"></path>
						<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path>
					</svg>
				</div>
				Send feedback
			</div>
		</div>
	</nav> */}
                    <main class="p-6 flex-1 overflow-auto col-span-2">
                        <div class="border-b-4 yt-border-gray-400 mb-10 pb-10">
                            <div class="text-xl font-bold mb-6">
                                Recommended
			</div>
                            <div class="grid sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                <div>
                                    <div class="relative">
                                        <img class="w-full" src="https://picsum.photos/263/147.webp?random=1" alt="" />
                                        <span class="absolute bg-black bottom-0 font-bold mb-1 mr-1 px-1 py-px right-0 rounded-sm text-white text-xs">1:40</span>
                                    </div>
                                    <div class="flex mt-4">
                                        <img class="mr-4 h-10 w-10 block flex-shrink-0 rounded-full object-cover" src="https://picsum.photos/68.webp?random=1" alt="" />
                                        <div class="text-sm w-full">
                                            <div class="font-bold text-line-clamp-2 mb-1 relative pr-6">
                                                Recursion in 100 Seconds
								<button class="absolute right-0 inset-y-0 yt-text-gray-800">
                                                    <svg class="h-6 fill-current" viewBox="0 0 24 24">
                                                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="text-line-clamp-1 yt-text-gray-500 leading-tight">
                                                Fireship
							</div>
                                            <div class="yt-text-gray-500">
                                                <span>45K views</span> • <span>2 months ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="relative">
                                        <img class="w-full" src="https://picsum.photos/263/147.webp?random=2" alt="" />
                                        <span class="absolute bg-black bottom-0 font-bold mb-1 mr-1 px-1 py-px right-0 rounded-sm text-white text-xs">3:17</span>
                                    </div>
                                    <div class="flex mt-4">
                                        <img class="mr-4 h-10 w-10 block flex-shrink-0 rounded-full object-cover" src="https://picsum.photos/68.webp?random=2" alt="" />
                                        <div class="text-sm">
                                            <div class="font-bold text-line-clamp-2 mb-1">
                                                [MV] 가호(Gaho) - A song for you (ENG SUB)
							</div>
                                            <div class="text-line-clamp-1 yt-text-gray-500 leading-tight">
                                                Planetarium Records
							</div>
                                            <div class="yt-text-gray-500">
                                                <span>58K views</span> • <span>2 days ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="relative">
                                        <img class="w-full" src="https://picsum.photos/263/147.webp?random=3" alt="" />
                                        <span class="absolute bg-black bottom-0 font-bold mb-1 mr-1 px-1 py-px right-0 rounded-sm text-white text-xs">3:14</span>
                                    </div>
                                    <div class="flex mt-4">
                                        <img class="mr-4 h-10 w-10 block flex-shrink-0 rounded-full object-cover" src="https://picsum.photos/68.webp?random=3" alt="" />
                                        <div class="text-sm">
                                            <div class="font-bold text-line-clamp-2 mb-1">
                                                ENG) My sister put her face on freshly washed cats.
							</div>
                                            <div class="text-line-clamp-1 yt-text-gray-500 leading-tight">
                                                ポムさんとしまちゃん / ねこべや。
							</div>
                                            <div class="yt-text-gray-500">
                                                <span>5.5M views</span> • <span>5 months ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="relative">
                                        <img class="w-full" src="https://picsum.photos/263/147.webp?random=4" alt="" />
                                        <div class="absolute inset-x-0 bottom-0 border-b-4 yt-border-red-100"></div>
                                    </div>
                                    <div class="flex mt-4">
                                        <img class="mr-4 h-10 w-10 block flex-shrink-0 rounded-full object-cover" src="https://picsum.photos/68.webp?random=4" alt="" />
                                        <div class="text-sm">
                                            <div class="font-bold text-line-clamp-2 mb-1">
                                                Sunday Coffee: Smooth Jazz Relax Music to Chill Out - Coffee
                                                House Jazz
							</div>
                                            <div class="text-line-clamp-1 yt-text-gray-500 leading-tight">
                                                Cafe Music BGM channel
							</div>
                                            <div class="yt-text-gray-500">3.9K watching</div>
                                            <span class="border yt-border-red-100 font-medium px-1 py-px yt-text-red-200 text-xs">LIVE NOW</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="relative">
                                        <img class="w-full" src="https://picsum.photos/263/147.webp?random=5" alt="" />
                                        <span class="absolute bg-black bottom-0 font-bold mb-1 mr-1 px-1 py-px right-0 rounded-sm text-white text-xs">11:49</span>
                                    </div>
                                    <div class="flex mt-4">
                                        <img class="mr-4 h-10 w-10 block flex-shrink-0 rounded-full object-cover" src="https://picsum.photos/68.webp?random=5" alt="" />
                                        <div class="text-sm">
                                            <div class="font-bold text-line-clamp-2 mb-1">
                                                [골라봐야지][오늘 생축♡] 매력부자 분량부자♥ 수아.. 아, 아니
                                                권나라 예능 모먼트 몰아보기 #아는형님 #JTBC봐야지
							</div>
                                            <div class="text-line-clamp-1 yt-text-gray-500 leading-tight">
                                                JTBC Voyage
							</div>
                                            <div class="yt-text-gray-500">
                                                <span>359K views</span> • <span>2 weeks ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="relative">
                                        <img class="w-full" src="https://picsum.photos/263/147.webp?random=6" alt="" />
                                        <span class="absolute bg-black bottom-0 font-bold mb-1 mr-1 px-1 py-px right-0 rounded-sm text-white text-xs">11:49</span>
                                    </div>
                                    <div class="flex mt-4">
                                        <img class="mr-4 h-10 w-10 block flex-shrink-0 rounded-full object-cover" src="https://picsum.photos/68.webp?random=6" alt="" />
                                        <div class="text-sm">
                                            <div class="font-bold text-line-clamp-2 mb-1">
                                                Vue.js 3 What's coming - Paul Bele | JSHeroes Meetups
							</div>
                                            <div class="text-line-clamp-1 yt-text-gray-500 leading-tight">
                                                JSHeroes
							</div>
                                            <div class="yt-text-gray-500">
                                                <span>89 views</span> • <span>1 day ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="relative">
                                        <img class="w-full" src="https://picsum.photos/263/147.webp?random=7" alt="" />
                                        <span class="absolute bg-black bottom-0 font-bold mb-1 mr-1 px-1 py-px right-0 rounded-sm text-white text-xs">11:49</span>
                                    </div>
                                    <div class="flex mt-4">
                                        <img class="mr-4 h-10 w-10 block flex-shrink-0 rounded-full object-cover" src="https://picsum.photos/68.webp?random=7" alt="" />
                                        <div class="text-sm">
                                            <div class="font-bold text-line-clamp-2 mb-1">
                                                Animal Expert David Mizejewski: Brown Bear Cub & Baby
                                                Alligator - CONAN on TBS
							</div>
                                            <div class="text-line-clamp-1 yt-text-gray-500 leading-tight">
                                                Team Coco
							</div>
                                            <div class="yt-text-gray-500">
                                                <span>14M views</span> • <span>8 years ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-b-4 border-gray-400 pb-10">
                            <div class="text-xl font-bold mb-6">
                                Breaking news
			</div>
                            <div class="grid sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                <div>
                                    <div class="relative">
                                        <img class="w-full" src="https://picsum.photos/263/147.webp?random=8" alt="" />
                                        <span class="absolute bg-black bottom-0 font-bold mb-1 mr-1 px-1 py-px right-0 rounded-sm text-white text-xs">1:40</span>
                                    </div>
                                    <div class="flex mt-4">
                                        <img class="mr-4 h-10 w-10 block flex-shrink-0 rounded-full object-cover" src="https://picsum.photos/68.webp?random=8" alt="" />
                                        <div class="text-sm">
                                            <div class="font-bold text-line-clamp-2 mb-1">
                                                Medical evacuation plane catches fire, explodes at Naia
							</div>
                                            <div class="text-line-clamp-2 yt-text-gray-500 leading-tight">
                                                INQUIRER.net
							</div>
                                            <div class="yt-text-gray-500">
                                                <span>233K views</span> • <span>13 hours ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </React.Fragment>
        );
    }
}

export default YoutubeVideo;