<script>
    import { gql, operationStore, query } from '@urql/svelte'
    import { page } from '$app/stores'
    
    const postQuery = gql`
    query Post {
        post(where: {id: "${$page.params.id}"}) {
            title
            image {
                url
                alt
            }
            author {
                name
            }
            publishedAt
            content {
                html
            }
            excerpt
        }
    }
    `
    const post = operationStore(postQuery)
    query(post)
</script>

{#if $post.fetching}
  <p>Loading post..</p>
{:else if $post.error}
  <p>Error! {$post.error}</p>
{:else}
	<div class="container px-6 py-4 mx-auto lg:h-128 lg:py-16 ">
		<h2>{$post.data.post.title}</h2>
        <p>{$post.data.post.excerpt}</p>
        <img src={$post.data.post.image[0].url} alt={$post.data.post.image[0].url}>
        {#each $post.data.post.content as content}
            {@html content.html}
        {/each}
	</div>
{/if}

