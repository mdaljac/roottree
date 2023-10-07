<template>
	<header class="flex">
		<nav
			class="fixed top-0 left-0 w-full h-full bg-black transform transition-transform lg:relative lg:top-auto lg:left-auto lg:w-auto lg:h-auto lg:bg-none lg:transform-none"
			:class="navState ? 'translate-x-0' : 'translate-x-full'">
			<ul class="flex flex-col px-6 py-20 lg:flex-row lg:p-0 lg:gap-x-10">
				<li><NuxtLink to="/">Home</NuxtLink></li>
				<li><NuxtLink to="/sample-page">Sample Page</NuxtLink></li>
			</ul>
		</nav>
		<button @click="nav.toggleNav" class="relative z-10 ml-auto lg:hidden">
			Toggle Nav
		</button>
	</header>
</template>

<script setup>
const nav = useNav();

// needs computed property, otherwise dynamic classes won't apply
const navState = computed(() => nav.navState.value);
</script>

<style lang="postcss" scoped></style>
