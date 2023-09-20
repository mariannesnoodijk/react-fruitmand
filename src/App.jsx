import './App.css'
import Fruit from "./components/Fruitcounter.jsx";
import image from "./assets/react-aardbei.jpeg";
import {useState} from "react";
import {useForm} from 'react-hook-form';
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

    function handleFormSubmit(data) {
        // e.preventDefault()
        console.log(data)
        console.log(formState)
    }

    const { register, formState: { errors }, handleSubmit } = useForm();

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
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <label htmlFor="first-name-field">
                        First name:
                        <input
                            type="text"
                            name="firstName"
                            {...register("first-name", {
                                required: true,
                                minlength: 1,
                                maxLength: 12,
                            })}
                            value={formState.firstName}
                            onChange={handleChange}/>
                        {errors['first-name'] && <p>{errors['first-name.message']}</p>}
                    </label>
                    <br/>
                    <label htmlFor="last-name-field">
                        Last name:
                        <input
                            type="text"
                            name="lastName"
                            {...register("last-name", {

                                required: {
                                    value: true,
                                    message: 'Dit veld is verplicht',
                                },
                                minLength: {
                                    value: 2,
                                    message: 'Input moet minstens 2 karakters bevatten',
                                },
                                maxLength: {
                                    value: 12,
                                    message: 'Input mag maximaaal 12 karakters bevatten',
                                },
                            })}
                            value={formState.lastName}
                            onChange={handleChange}/>
                        {errors['last-name'] && <p>{errors['last-name.message']}</p>}
                    </label>
                    <br/>
                    <label htmlFor="age-field">
                        Leeftijd:
                        <input
                            type="number"
                            name="age"
                            {...register("age", {
                                required: {
                                    value: true,
                                    message: 'Dit veld is verplicht',
                                },
                                min: {
                                    value: 1,
                                    message: 'Input moet minstens 1 karakter bevatten',
                                },
                                max: {
                                    value: 3,
                                    message: 'Input mag maximaal 3 karakters bevatten',
                                },
                            })}
                            value={formState.age}
                            onChange={handleChange}/>
                    </label>
                    <br/>
                    <label htmlFor="zipcode-field">
                        Postcode:
                        <input
                            type="text"
                            name="zipCode"
                            {...register("zipcode", {
                                required: {
                                    value: true,
                                    message: 'Dit veld is verplicht',
                                },
                               // pattern:
                            })}
                            value={formState.zipCode}
                            onChange={handleChange}/>
                    </label>
                    <br/>
                    <label htmlFor="delivery-frequency-field">
                        Bezorgfrequentie:
                        <select
                            name="deliveryFrequency"
                            {...register("deliveryFrequency", {
                                required: {
                                    value: true,
                                    message: 'Dit veld is verplicht',
                                },
                            })}
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
                    <label htmlFor="timeslot-field">
                        <input
                            type="radio"
                            name="timeslot"
                            {...register("timeslot", {
                                required: true,
                            })}
                            value="day"
                            checked={formState.timeslot === "day"}
                            onChange={handleChange}
                        />
                        Overdag
                        <input
                            type="radio"
                            name="timeslot"
                            {...register("timeslot", {
                                required: true,
                            })}
                            value="night"
                            checked={formState.timeslot === "night"}
                            onChange={handleChange}
                        />
                        's Nachts
                    </label>
                    <br/>
                    <label htmlFor="comment-field">
                        Opmerking
                        <input
                            type="text-area"
                            id="comment"
                            name="comment"
                            {...register("comment")}
                        />
                    </label>
                    <br/>
                    <br/>
                    <label htmlFor="agreeTerms-field">
                        <input
                            type="checkbox"
                            name="agreeTerms"
                            {...register("agreeTerms", {
                                required: {
                                    value: true,
                                    message: 'Dit veld is verplicht',
                                }
                            })}
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
