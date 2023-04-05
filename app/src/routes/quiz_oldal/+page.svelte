<main>
    <div class="card platina">
        <img src="wave_top.svg" alt="wave_top">
        <div class="kerdes">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A saepe optio nemo eos aperiam iusto id, deserunt magni praesentium accusamus unde quo laudantium placeat veniam tempore. Est laborum tempore fugiat.</p>
        </div>
        <img src="wave_bottom.svg" alt="wave_bottom">
    </div>

    <div class="card kek">
        
        <div class="kerdes">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A saepe optio nemo eos aperiam iusto id, deserunt magni praesentium accusamus unde quo laudantium placeat veniam tempore. Est laborum tempore fugiat.</p>
        </div>
        
    </div>

    <div class="card platina">
        <img src="wave_top.svg" alt="wave_top">
        <div class="kerdes">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dignissimos? Atque, quibusdam odit ab perspiciatis temporibus ipsam ullam deleniti asperiores voluptas mollitia? Aspernatur, facere. Nulla, sapiente! Fugit delectus debitis inventore.</p>            
        </div>
        
        <img src="wave_bottom.svg" alt="wave_bottom">
    </div>
    
</main>

<style lang="scss">
    main{
        display: flex;
        flex-direction: column;
    }

    .card{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card img{
        width: 100vw;
        height: auto;
    }

    .card{
        margin: 0px;
        padding: 0px;
        width: 100vw;
        height: 100vh;
    }

    .platina{
        background-color: #E2E2E2;
    }

    .kek{
        background-color: #5465FF;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .kerdes{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

</style>

<script lang="ts">
</script>
