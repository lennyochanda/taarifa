<script>
    import {keyword} from '$lib/stores'
    let searchBox
    let searchInput

    $: $keyword = searchInput

    function openSearchBox () {
        searchBox = !searchBox
    }
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/">Home</a></li>
        <li><a href="/world">World</a></li>
        <li><a href="/politics">Politics</a></li>
        <li><a href="/entertainment">Entertainment</a></li>
        <li><a href="/technology">Technology</a></li>
        <li><a href="/business">Business</a></li>
        <li><a href="/sports">Sports</a></li>
      </ul>
    </div>
    {#if !searchBox}
        <div class="navbar-center">
            <a href="/" class="btn btn-ghost normal-case text-xl">TDNEWS</a>
        </div>
    {/if}
  </div>
  <div class="navbar-end">
    {#if searchBox}
        <div class="flex-none gap-2">
            <div class="form-control">
                <input type="text" placeholder="Search" class="input input-bordered md:w-80" bind:value={searchInput}>
            </div>
        </div>
    {/if}
    <button class="btn btn-ghost btn-circle" on:click={openSearchBox}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>