<script>
    export let image, title, excerpt, author, category, id, publishedAt;
</script>

<a href="/{id}">
    <article class="card card-compact w-80 bg-base-100 shadow-xl">
        <figure><img src="{image[0].url}" alt="{image.alt}"/></figure>
        <div class="card-body">
            <h2 class="card-title">
            {title}
            <div class="badge badge-secondary">{category}</div>
            </h2>
            <p>{excerpt}</p>
            <div class="card-actions justify-start">
                <div>{author.name} |</div>
                <div>{new Date(publishedAt).toLocaleString()}</div>
            </div>
        </div>
    </article>
</a>