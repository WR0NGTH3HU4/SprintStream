<div class="profile-display">
    {#if selected != -1}
        <img src="{profiles[selected].kep}" alt="">
        <div class="info">
            <span>
                <h1>{profiles[selected].nev}</h1>
                <p>{profiles[selected].leiras}</p>
            </span>

            <div class="media">
                <h2>Linkek</h2>
                <span class="links">
                    {#each profiles[selected].media as media}
                        <a href="{media.link}" class="link">
                            <img src="./icons/{media.tipus}.png" alt="">
                        </a>
                    {/each}
                </span>
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
    @media screen and (max-width: 600px) {
        img {
            width: 100% !important;
        }

        div.profile-display {
            flex-direction: column !important;
        }
    }

    div.profile-display {
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 2rem;
        gap: 2rem;
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
        gap: 2rem;

        .media {
            margin-top: auto;

            .links {
                display: flex;
                justify-content: flex-start;
                gap: 1rem;
            }
        }
    }

    .link {
        transition: .3s ease-out;

        img {
            height: 3rem;
            width: 3rem;
        }

        &:hover {
            transform: scale(.85);
            transition: .3s ease-out;
        }
    }
</style>

<script lang="ts">
	import type { Profile } from "../util/model/Profile";

    export let selected = -1;
	export let profiles: Profile[];
</script>
