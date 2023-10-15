

const CoffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, test, category, details, photo } = coffee;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="" /></figure>
                <div className="flex justify-between w-full pr-4">
                    <div>
                        <h2 className="card-title">{name}!</h2>
                        <h3 className="">{quantity}</h3>
                        <p>{details}.</p>
                        <p>{category}</p>
                        <h2>{test}</h2>
                        <p>{supplier}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <button className="btn">View</button>
                            <button className="btn">Edit</button>
                            <button className="btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;