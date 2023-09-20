import './App.css'
import Fruit from "./components/Fruitcounter.jsx";
import image from "./assets/react-aardbei.jpeg";
import {useState} from "react";
import Fruitcounter from "./components/Fruitcounter.jsx";
import Button from "./components/Button.jsx";


function App() {

    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [kiwis, setKiwis] = useState(0);
    const [pineapple, setPineapple] = useState(0);

    function resetFruitCount() {
        setStrawberries(0);
        setBananas(0);
        setKiwis(0);
        setPineapple(0);
    }

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        age: 0,
        zipCode: '',
        deliveryFrequency: '',
        timeslot: '',
        comment: '',
        agreeTerms: false,
    });

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formState)
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <section className="fruit-counters">
                <Fruitcounter
                    // image={image}
                    title={"🍓 Aardbeien"}
                    counter={strawberries}
                    setCounter={setStrawberries}
                />
                <Fruitcounter
                    // image={image}
                    title={"🍌 Bananen"}
                    counter={bananas}
                    setCounter={setBananas}
                />
                <Fruitcounter
                    // image={image}
                    title={"🥝 Kiwi's"}
                    counter={kiwis}
                    setCounter={setKiwis}
                />
                <Fruitcounter
                    // image={image}
                    title={"🍍 Ananas"}
                    counter={pineapple}
                    setCounter={setPineapple}
                />

                <Button
                    type="button"
                    onClick={() => resetFruitCount()}
                    buttonText={"reset"}
                />
                {/*<button type="button" onClick={() => resetFruitCount()}>Reset</button>*/}

            </section>

            <section className="formbox">
                <form onSubmit={handleSubmit}>
                    <label>
                        First name:
                        <input
                            type="text"
                            name="firstName"
                            value={formState.firstName}
                            onChange={handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Last name:
                        <input
                            type="text"
                            name="lastName"
                            value={formState.lastName}
                            onChange={handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Leeftijd:
                        <input
                            type="number"
                            name="age"
                            value={formState.age}
                            onChange={handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Postcode:
                        <input
                            type="text"
                            name="zipCode"
                            value={formState.zipCode}
                            onChange={handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Bezorgfrequentie:
                        <select
                            name="deliveryFrequency"
                            value={formState.deliveryFrequency}
                            onChange={handleChange}
                        >
                            <option value="weekly">Iedere week</option>
                            <option value="bi-weekly">Om de week</option>
                            <option value="monthly">Iedere maand</option>
                        </select>
                    </label>
                    <br/>

                    <br/>
                    <label>
                        <input
                            type="radio"
                            name="timeslot"
                            value="day"
                            checked={formState.timeslot === "day"}
                            onChange={handleChange}
                        />
                        Overdag
                        <input
                            type="radio"
                            name="timeslot"
                            value="night"
                            checked={formState.timeslot === "night"}
                            onChange={handleChange}
                        />
                        's Nachts
                    </label>
                    <br/>
                    <label>
                        Opmerking
                        <input
                            type="text-area"
                            id="comment"
                            name="comment"
                        />
                    </label>
                    <br/>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={formState.agreeTerms}
                            onChange={handleChange}
                        />
                        Ik ga akkoord met de algemene voorwaarden
                    </label>
                    <br/>
                    <button type="submit">Verzend</button>
                </form>

            </section>
        </>
    )
}

export default App
