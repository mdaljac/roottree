import { onBeforeRouteLeave } from "vue-router";

export const usePreloader = () => {
	const { $gsap } = useNuxtApp();
	const isLoading = ref(true);
	const preloaderAnimDuration = 1;
	const preloaderAnimEasing = "power4.out";

	const showPreloader = () => {
		$gsap.to("#preloader", {
			scaleY: 1,
			transformOrigin: "bottom",
			duration: preloaderAnimDuration,
			ease: preloaderAnimEasing,
		});
	};

	const hidePreloader = () => {
		$gsap.to("#preloader", {
			scaleY: 0,
			transformOrigin: "top",
			duration: preloaderAnimDuration,
			ease: preloaderAnimEasing,
		});
	};

	watch(
		() => isLoading.value,
		(newValue, oldValue) => {
			newValue ? showPreloader() : hidePreloader();
		},
	);

	onBeforeRouteLeave((to, from, next) => {
		isLoading.value = true;

		setTimeout(() => {
			next();
		}, preloaderAnimDuration * 1000);
	});

	return {
		isLoading,
		showPreloader,
		hidePreloader,
	};
};
