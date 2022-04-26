<script>
	import { gql, operationStore, query } from '@urql/svelte'
	import PostCard from '$lib/components/PostCard.svelte'
	
	const postsQuery = gql`
    query Posts {
		posts(where: {category: featured}) {
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

{#if $posts.fetching}
  <p>Loading posts..</p>
{:else if $posts.error}
  <p>Error! {$posts.error.message}</p>
{:else}
    {#each $posts.data.posts as post}
        {#if post.category === 'featured'}
        <h1 class="text-xl m-3 text-left text-red-600">Trending</h1>
            <div class="bg-gray-200 ">
                <div class="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
                    <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                        <div class="max-w-lg">
                            <h1 class="text-xl tracking-wide text-white text-red-600 lg:text-3xl lg:text-4xl">{post.title}</h1>
                            <p class="mt-4 text-gray-300 text-gray-600">{post.excerpt}</p>
                            <div class="mt-6">
                                <a href="/{post.id}"
                                    class="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-900 rounded-md hover:bg-blue-400">
                                    Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
                        <img class="object-cover w-full max-w-2xl rounded-md lg:h-full m-4"
                            src={post.image[0].url} alt={post.image[0].alt}>
                    </div>
                </div>
            </div>
        {/if}
    {/each}
{/if}
