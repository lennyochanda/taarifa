<script>
	import { gql, operationStore, query } from '@urql/svelte'
	import PostCard from '$lib/components/PostCard.svelte'
	
	const postsQuery = gql`
    query Posts {
		posts {
			id
			title
			image {
				url
			}
			category
			excerpt 
			author {
				name
			}
			publishedAt
		}
    }
	`
	
	const posts = operationStore(postsQuery)
	
	query(posts)
</script>

<svelte:head>
	<title>HOME PAGE</title>
</svelte:head>

{#if $posts.fetching}
  <p>Loading posts..</p>
{:else if $posts.error}
  <p>Error! {$posts.error.message}</p>
{:else}
  <ul>
    {#each $posts.data.posts as post}
    	<li>
			<PostCard {...post} />
		</li>
    {/each}
  </ul>
{/if}

