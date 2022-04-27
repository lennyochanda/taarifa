<script>
	import { gql, operationStore, query } from '@urql/svelte'
	
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
  <p>Loading posts..</p> <progress class="progress w-56"></progress>
{:else if $posts.error}
  <p>Error! {$posts.error.message}</p>
{:else}
    {#each $posts.data.posts as post}
        {#if post.category === 'featured'}
        <div class="container mx-auto">
            <div class="bg-gray-200 p-5">
                <div class="container mx-auto lg:flex lg:h-128 lg:py-10 ">
                    <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                        <div>
                            <div class="flex">
                                <p class="pr-2.5 py-2.5 text-sky-900 font-bold">Trending</p>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M21 7L13 15L9 11L3 17M21 7H15M21 7V13" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                 </svg>
                            </div>
                             <h1 class="text-xl tracking-wide text-red-600 lg:text-4xl leading-tight sm:mb-1.5 group-hover:underline text-2xl md:text-3xl font-bold text-lg mb-2">{post.title}</h1>
                            <p class="mt-4 text-gray-300 text-gray-600 text-left text:sm">{post.excerpt}</p>
                            <div class="mt-6">
                                <a href="/{post.id}"
                                    class="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-sky-900 rounded-md hover:bg-blue-600">
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
        </div>
        {/if}
    {/each}
{/if}
