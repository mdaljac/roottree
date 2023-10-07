<template>
	<div>
		<h1 class="text-4xl">Sample page</h1>
	</div>
</template>

<script setup>
const preloader = usePreloader();
preloader.isLoading.value = false;
</script>

<style lang="scss" scoped></style>
