import React from 'react';

export const Jumbotron = () => {
    return (
        <div className="container">
            <div className="bg-light border rounded-3 p-4 mt-4">
                <h1 className="display-2">A Warm Welcome!</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis voluptatum unde maxime debitis qui eaque amet
                    ducimus nulla eligendi perferendis laboriosam, animi nobis
                    harum corrupti totam maiores eveniet repellat temporibus
                    aspernatur. Dicta, eum asperiores iusto neque nulla
                    molestiae optio beatae.
                </p>
                <button className="btn btn-primary" type="button">
                    Call to action!
                </button>
            </div>
        </div>
    );
};
