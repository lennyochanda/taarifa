<script>
	import '../tailwind.css';
    import { initClient } from '@urql/svelte'
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Recommended from '$lib/components/Recommended.svelte';

	initClient({
		url: 'https://api-eu-central-1.graphcms.com/v2/ckwi1vjvs1cyk01ze7bqg2mn1/master'
	})
</script>

<Header />

<div class="md:container md:mx-auto">
	<slot />
	<Recommended />
</div>
<Footer />