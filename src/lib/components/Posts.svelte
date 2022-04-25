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
				alt
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
	<div class="container px-6 py-4 mx-auto lg:h-128 lg:py-16 ">
		<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		  {#each $posts.data.posts as post}
			  {#if post.category !== 'featured'}
				  <PostCard {...post} />
			  {/if}
		  {/each}
		</ul>
	</div>
{/if}
