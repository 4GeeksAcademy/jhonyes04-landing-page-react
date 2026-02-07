export const Card = ({ card: { imagen, titulo, descripcion } }) => {
    return (
        <div className="card my-4">
            <img src={imagen} alt="Imagen de prueba" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title text-center">{titulo}</h5>
                <p className="card-text text-center">{descripcion}</p>
            </div>
            <div className="card-footer text-center">
                <button className="btn btn-primary btn-sm">
                    Find Out More!
                </button>
            </div>
        </div>
    );
};
