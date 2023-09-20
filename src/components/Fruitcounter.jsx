

function Product( { image, title, counter, setCounter, children }) {
    return (
        <article className="fruit">
            <h2>{title}</h2>
            <button type="button" disabled={counter === 0}
                    onClick={() => setCounter(counter - 1)}>-
            </button>
            <p>{counter}</p>
            <button type="button" onClick={() => setCounter(counter + 1)}>+</button>
        </article>
    );
}


export default Product;