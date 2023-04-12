
const Item = ({id, nombre, categoria, img, precio, stock}) => {

  return (
    <article>
        <header>
            <h2>{nombre}</h2>
        </header>
        <picture>
            <img src={img} alt={nombre} />
        </picture>
        <section>
            <p>
                Precio: ${precio}
            </p>
            <p>
                Stock disponible: {stock}
            </p>
        </section>
        <footer>
            <button>Ver detalle</button>
        </footer>
    </article>
  )
}

export default Item