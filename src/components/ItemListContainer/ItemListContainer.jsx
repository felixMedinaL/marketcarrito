

const ItemListContainer = (props) => {
    console.log(ItemListContainer);
    return (
        <div>
            <h1>{props.greeting}</h1>
            {props.children.map(c => <div>{c}</div>)}
        </div>

    );

}

export default ItemListContainer;