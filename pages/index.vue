<template>
	<div>
		<h1 class="uppercase text-7xl font-bold">testing font R</h1>
		<p class="text-3xl">Animation typewriter style using GSAP</p>

		<p class="mt-20 text-xl">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cupiditate
			molestiae fugiat nihil exercitationem doloribus delectus, magni eos natus
			earum iure deleniti dicta aut illo obcaecati ipsam aperiam officiis harum!
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
			labore sapiente esse, iure nihil necessitatibus modi nostrum cum amet
			quod? Voluptate in quam minus maiores voluptas veritatis soluta natus
			neque.
		</p>

		<div class="my-20 flex items-center justify-center">
			<div class="w-1/3 relative group">
				<NuxtImg src="/img/team/kia-black.jpg" class="" />
				<NuxtImg
					src="/img/team/kia-color.jpg"
					class="absolute top-0 left-0 w-full h-full color-img" />

				<div
					class="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center">
					<div
						class="opacity-0 transition-opacity group-hover:opacity-100 flex flex-col items-center justify-center">
						<span class="text-7xl font-bold">YUYI</span>
						<span>glavno smetalo</span>
					</div>
				</div>
			</div>
		</div>

		<!-- device detection -->
		<!-- <div class="mt-10">
			<p>Device detection:</p>
			<p>is mobile: {{ $device.isMobile }}</p>
			<p>is tablet: {{ $device.isTablet }}</p>
			<p>is desktop: {{ $device.isDesktop }}</p>
		</div> -->

		<!-- static image -->
		<!-- <div class="container mt-10">
			<p>Nuxt-img component:</p>
			<NuxtImg src="/static.jpeg" class="w-full lg:w-1/2" />
		</div> -->

		<!-- api data -->
		<!-- <div class="container mt-10">
			<ul class="grid grid-cols-1 md:grid-cols-2">
				<li
					v-for="article in articles.data"
					:key="article.id"
					class="border flex flex-col p-3 space-y-2">
					<span>Article title: {{ article.title }}</span>
					<span>Article status: {{ article.status }}</span>
					<ul class="flex flex-wrap gap-2">
						<li
							v-for="tag in article.tags"
							:key="tag"
							class="border border-white rounded-full p-1">
							{{ tag }}
						</li>
					</ul>
				</li>
			</ul>
		</div> -->
	</div>
</template>

<script setup>
import vivus from "vivus";

const { $gsap } = useNuxtApp();
const preloader = usePreloader();

const runtimeConfig = useRuntimeConfig();

const { data: articles } = await useFetch(
	`${runtimeConfig.public.apiBase}/articles`,
);
</script>

<style lang="postcss" scoped>
.color-img {
	clip-path: inset(0 100% 0 0);
	transition: clip-path 0.6s;
}

.group:hover .color-img {
	clip-path: inset(0 0 0 0);
}
</style>
