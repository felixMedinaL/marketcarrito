import Button from 'react-bootstrap/Button'

const Item = ({ name, img}) => {
    return(
        <section>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <h4>{ name }</h4>
            <Button variant="primary">Ver más detalles</Button>{' '}
        </section>
    )
}

export default Item