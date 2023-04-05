<main>
    <section>
        <div class="front">
            <span class="title">Projektmenedzsment emészthető módon</span>
            <a href="#leirasok" class="button">Kezdjünk bele!</a>
        </div>
        <div class="back">
            
        </div>
    </section>
    <section id="leirasok">
        <div></div>
    </section>
    <section>
        
    </section>
    <section>
        
    </section>
</main>

<style lang="scss">
    @import '../scss/palette.scss';

    section {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    section:nth-child(odd) {
        background-color: $blue-0;
        color: white;
    }

    section:nth-child(1) {
        display: grid;
        align-items: center;

        & > * {
            grid-column: 1;
            grid-row: 1;
        }
    }

    .front {
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            width: 40%;
            font-size: 2rem;
            font-weight: bold;
            text-align: center;
        }
    }

    .button {
        display: inline-block;
        color: white;
        background-color: $blue-2;
        font-weight: 600;
        transition: .3s;
        padding: 10px 20px;
        border-radius: 8px;
        text-decoration: none;
        
        &:hover {
            background-color: $blue-1;
            transition: .3s;
            transform: scale(.95);
        }
    }
</style>

<script lang="ts">
</script>
