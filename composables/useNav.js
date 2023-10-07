const navState = ref(false);

export const useNav = () => {
	const router = useRouter();

	const toggleNav = () => {
		navState.value = !navState.value;
	};

	router.afterEach((to, from) => {
		if (navState.value) toggleNav();
	});

	return {
		navState,
		toggleNav,
	};
};
