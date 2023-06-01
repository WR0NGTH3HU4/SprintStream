<div class="profile-display">
    {#if selected != -1}
        <img src="{profiles[selected].kep}" alt="">
        <div class="info">
            <h1>{profiles[selected].nev}</h1>
            <p>{profiles[selected].leiras}</p>

            <div class="media">
                <h2>Linkek</h2>
                {#each profiles[selected].media as media}
                    <a href="{media.link}">{media.tipus}</a>
                {/each}
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
    div.profile-display {
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 1rem;
        box-sizing: border-box;
    }

    img {
        object-fit: cover;
        width: 33%;
        display: block;
        flex: 1 0 33%;
    }

    .info {
        display: flex;
        flex-direction: column;
        flex: 1 1 77%;

        .media {
            margin-top: auto;
        }
    }
</style>

<script lang="ts">
	import type { Profile } from "../util/model/Profile";

    export let selected = -1;
	export let profiles: Profile[];
</script>
