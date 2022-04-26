<script>
	import { gql, operationStore, query } from '@urql/svelte'
	import PostCard from '$lib/components/PostCard.svelte'
	import { keyword } from '$lib/stores'

	
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
	
	let posts = operationStore(postsQuery)
	
	query(posts)
</script>

{#if $posts.fetching}
  <p>Loading posts..</p>
{:else if $posts.error}
  <p>Error! {$posts.error.message}</p>
{:else if !$keyword}
	<div class="container px-6 py-4 mx-auto lg:h-128 lg:py-16 ">
		<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		  {#each $posts.data.posts as post}
			  {#if post.category !== 'featured'}
				  <PostCard {...post} />
			  {/if}
		  {/each}
		</ul>
	</div>
{:else if $keyword}
	<div class="container px-6 py-4 mx-auto lg:h-128 lg:py-16 ">
		<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		  {#each $posts.data.posts as post}
			  {#if post.title.toLowerCase().includes($keyword.toLowerCase())}
				  <PostCard {...post} />
			  {/if}
		  {/each}
		</ul>
	</div>
{/if}