<script>
	import '../tailwind.css';
    import { initClient } from '@urql/svelte'

	initClient({
		url: 'https://api-eu-central-1.graphcms.com/v2/ckwi1vjvs1cyk01ze7bqg2mn1/master'
	})
</script>


<div class="container mx-auto my-6 max-w-lg">
	<slot />
</div>