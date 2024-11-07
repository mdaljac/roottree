<template>
	<div class="w-10 h-12 relative">
		<div
			class="bg-white rounded-md absolute w-full h-5/6 z-10 flex items-center justify-center transform translate-y-1 letter">
			<span class="text-3xl text-black font-bold ml-0.5">{{ letter }}</span>
		</div>
		<div class="bg-gray-400 rounded-b-md absolute w-full h-1/6 bottom-0"></div>
	</div>
</template>

<script setup>
defineProps({
	letter: {
		type: String,
		default: "R",
	},
});
</script>

<style lang="scss" scoped></style>
