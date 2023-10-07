<template>
	<div>
		<h1 class="text-4xl">Home page</h1>

		<!-- device detection -->
		<div class="mt-10">
			<p>Device detection:</p>
			<p>is mobile: {{ $device.isMobile }}</p>
			<p>is tablet: {{ $device.isTablet }}</p>
			<p>is desktop: {{ $device.isDesktop }}</p>
		</div>

		<!-- static image -->
		<div class="container mt-10">
			<p>Nuxt-img component:</p>
			<NuxtImg src="/static.jpeg" class="w-full lg:w-1/2" />
		</div>

		<!-- api data -->
		<div class="container mt-10">
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
		</div>
	</div>
</template>

<script setup>
const preloader = usePreloader();

const runtimeConfig = useRuntimeConfig();

const { data: articles } = await useFetch(
	`${runtimeConfig.public.apiBase}/articles`,
);

preloader.isLoading.value = false;
</script>

<style lang="scss" scoped></style>
