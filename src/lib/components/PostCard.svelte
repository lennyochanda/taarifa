<script>
    export let image, title, excerpt, author, category, id, publishedAt;
</script>

<a href="/{id}">
    <article class="sm:w-10 card card-compact bg-base-100 shadow-xl min-w-[100%]">
        <figure><img src="{image[0].url}" alt="{image.alt}"/></figure>
        <div class="card-body">
            <h2 class="card-title font-bold text-lg leading-tight group-hover:underline mb-2 text-sky-900">
            {title}
            <div class="badge badge-neutral">{category}</div>
            </h2>
            <p class="text-sm">{excerpt}</p>
            <div class="card-actions justify-start">
                <div>{author.name} |</div>
                <div>{new Date(publishedAt).toLocaleString()}</div>
            </div>
        </div>
    </article>
</a>