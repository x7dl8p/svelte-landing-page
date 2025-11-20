<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { getLocale } from '$lib/paraglide/runtime';

	let { children } = $props();

	onMount(() => {
		try {
			const locale = getLocale();
			if (typeof document !== 'undefined') {
				document.documentElement.lang = locale;
				document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
			}
		}
		catch {
			// ignore
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
