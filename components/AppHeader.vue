<template>
	<header
		class="py-4 lg:py-6 fixed w-full top-0 left-0 container z-40 bg-black">
		<div class="flex items-center justify-between relative z-10">
			<a href="/">
				<img src="/logo.svg" alt="Root Tree logo" class="h-16 lg:h-20" />
			</a>
			<button @click="nav.toggleNav">
				<template v-if="navState">
					<IconsX class="h-8 lg:h-10" />
				</template>
				<template v-else>
					<IconsMenu class="h-5 lg:h-6" />
				</template>
			</button>
		</div>

		<nav
			class="fixed top-0 left-0 w-full h-full bg-black transform transition-transform"
			:class="navState ? 'translate-x-0' : 'translate-x-full'">
			<!-- <ul class="flex flex-col px-6 py-20 lg:flex-row lg:p-0 lg:gap-x-10">
				<li><NuxtLink to="/">Home</NuxtLink></li>
			</ul> -->
		</nav>
	</header>
</template>

<script setup>
const nav = useNav();

// needs computed property, otherwise dynamic classes won't apply
const navState = computed(() => nav.navState.value);
</script>

<style lang="postcss" scoped></style>
