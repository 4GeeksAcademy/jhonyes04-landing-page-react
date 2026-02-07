import { Card } from './Card';

const cards = [
    {
        imagen: 'https://picsum.photos/500/325?random=1',
        titulo: 'Título Uno',
        descripcion:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam in nobis adipisci quas ad quos eligendi rerum excepturi repellendus cumque.',
    },
    {
        imagen: 'https://picsum.photos/500/325?random=2',
        titulo: 'Título Dos',
        descripcion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates numquam asperiores debitis consequuntur qui esse animi sed possimus mollitia explicabo!',
    },
    {
        imagen: 'https://picsum.photos/500/325?random=3',
        titulo: 'Título Tres',
        descripcion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi sint est alias aspernatur necessitatibus, voluptates corporis voluptas molestias atque.',
    },
    {
        imagen: 'https://picsum.photos/500/325?random=4',
        titulo: 'Título 4',
        descripcion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perferendis suscipit fugiat alias, beatae dolore officia minus officiis culpa harum!',
    },
];

export const Cards = () => {
    return (
        <div className="container">
            <div className="row">
                {cards.map((card, index) => (
                    <div
                        className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch"
                        key={index}
                    >
                        <Card card={card} />
                    </div>
                ))}
            </div>
        </div>
    );
};
