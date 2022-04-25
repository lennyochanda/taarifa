<script>
    export let image, title, excerpt, author, category, id, publishedAt;
</script>

<a href="/{id}">
    <article class="sm:w-16 card card-compact bg-base-100 shadow-xl mt-6 min-w-[100%]">
        <figure><img src="{image[0].url}" alt="{image.alt}"/></figure>
        <div class="card-body">
            <h2 class="card-title">
            {title}
            <div class="badge badge-neutral">{category}</div>
            </h2>
            <p>{excerpt}</p>
            <div class="card-actions justify-start">
                <div>{author.name} |</div>
                <div>{new Date(publishedAt).toLocaleString()}</div>
            </div>
        </div>
    </article>
</a>