<template>
	<div style="height: 2000px">
		<section class="h-[100dvh] flex flex-col justify-center relative">
			<div class="container">
				<div class="max-w-4xl">
					<h1
						class="font-sans font-bold text-8xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-white mb-3 capitalize leading-tight">
						Enhance your digital presence
					</h1>
					<p class="text-3xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
						eum voluptas ex, libero quia fuga commodi, corporis unde velit
						praesentium aliquid. Earum facilis ex qui, voluptatibus ratione
						autem molestiae aspernatur.
					</p>
				</div>
			</div>

			<!-- <div
				class="absolute bottom-5 w-full flex items-center justify-center space-x-10">
				<div class="flex items-center space-x-1">
					<Letter class="key" letter="R" />
					<Letter class="key" letter="O" />
					<Letter class="key" letter="O" />
					<Letter class="key" letter="T" />
				</div>
				<div class="flex items-center space-x-1">
					<Letter class="key" letter="T" />
					<Letter class="key" letter="R" />
					<Letter class="key" letter="E" />
					<Letter class="key" letter="E" />
				</div>
				<IconsEnter class="key-enter" />
			</div> -->
		</section>

		<!-- <div class="flex items-center justify-center">
			<div class="lg:w-1/3 relative group">
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
		</div> -->
	</div>
</template>

<script setup>
const { $gsap } = useNuxtApp();
const preloader = usePreloader();

const runtimeConfig = useRuntimeConfig();

const { data: articles } = await useFetch(
	`${runtimeConfig.public.apiBase}/articles`,
);

watch(
	() => preloader.pageMounted.value,
	(newValue, oldValue) => {
		if (newValue) {
			const lettersTl = $gsap.timeline({
				onComplete: () => enterTl().play(),
			});
			const letters = $gsap.utils.toArray(".key .letter");

			letters.forEach((letter, i) => {
				const anim = $gsap
					.timeline({ defaults: { duration: 0.2 } })
					.to(letter, {
						y: 10,
						backgroundColor: "#3BBD9E",
					})
					.to(letter, {
						y: 4,
						backgroundColor: "white",
					});

				lettersTl.add(anim, i * 0.1);
			});
		}
	},
);

const enterTl = () => {
	const tl = $gsap.timeline({
		defaults: { duration: 0.2 },
	});
	tl.to(".enter-parent", { y: 15.5 })
		.to(
			".enter-child",
			{
				fill: "#3BBD9E",
			},
			"<",
		)
		.to(".enter-parent", { y: 0 })
		.to(
			".enter-child",
			{
				fill: "white",
			},
			"<",
		);

	return tl;
};
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
