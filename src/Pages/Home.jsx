import Clock from "../Components/Clock.jsx"
import Display from "../Components/Display.jsx"
import Name from "../Components/Name.jsx"
import Title from "../Components/Title.jsx"

function Home(){
    return(
        <main>
            <section>
                <h2>hi</h2>

                <Clock />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea itaque voluptatem ipsum quam iste et minus.</p>
            </section>
            <Name />
            <article>
                <Title heading={"h2"} text={"animals"} />
                <ul>
                    <Display toDisplay={["cat", "dog", "bird"]} />
                </ul>
                
            </article>

            <article>
                <Title heading={"h2"} text={"fruits"} />
                <ul>
                     <Display toDisplay={["tomate", "orange", "poire"]} />
                </ul>
            </article>



        </main>
    )
}

export default Home