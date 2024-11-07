const isLoading = ref(true);
const firstLoad = ref(true);
const preloaderAnimDuration = 1;
const preloaderAnimEasing = "power4.out";

export const usePreloader = () => {
	const { $gsap, $pixelRatio } = useNuxtApp();
	const { isMobile, isTablet, isDesktop } = useDevice();
	const pageMounted = ref(false);

	const showPreloader = () => {
		$gsap.to("#preloader", {
			autoAlpha: 1,
			duration: preloaderAnimDuration,
			ease: preloaderAnimEasing,
		});
	};

	const hidePreloader = () => {
		$gsap
			.timeline()
			.to("#preloader-logotype", {
				autoAlpha: 0,
				duration: 1,
				filter: "blur(20px)",
				autoAlpha: 0,
			})
			.to(
				"#preloader-logo",
				{
					scale: 2,
					y: 0,
					duration: 1,
				},
				">-0.8",
			)
			.fromTo(
				".typewritter",
				{ width: 0 },
				{
					width: isMobile ? "155px" : "233px",
					duration: 1.5,
					ease: "steps(12)",
				},
			)
			.fromTo(
				".typewritter",
				{ "border-right-color": "rgba(255,255,255,0)" },
				{
					"border-right-color": "rgba(255,255,255,0.75)",
					repeat: -1,
					ease: "steps(12)",
				},
				"<",
			)
			.to({}, { duration: 2 })
			.to("#preloader", {
				autoAlpha: 0,
				pointerEvents: "none",
				onComplete: () => (pageMounted.value = true),
			});
	};

	onMounted(() => {
		if (firstLoad.value) {
			// gsap animation on first load
			$gsap
				.timeline()
				.to("#preloader-logo-wrapper", {
					autoAlpha: 1,
					duration: 1,
				})
				.fromTo(".preloader-root", { y: isMobile ? 20 : 45 }, { y: 0 })
				.fromTo(".preloader-tree", { y: isMobile ? -20 : -45 }, { y: 0 }, "<")
				.fromTo(
					"#preloader-logo",
					{ autoAlpha: 0, filter: "blur(20px)" },
					{ autoAlpha: 1, filter: "blur(0px)", duration: 1 },
					">-0.5",
				)
				.then(() => (firstLoad.value = false));
		}

		isLoading.value = false;
	});

	watch(
		[() => isLoading.value, () => firstLoad.value],
		([isLoading, firstLoad]) => {
			if (firstLoad) return;
			isLoading ? showPreloader() : hidePreloader();
		},
	);

	return {
		isLoading,
		showPreloader,
		hidePreloader,
		pageMounted,
	};
};
