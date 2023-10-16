import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, test, category, details, photo } = coffee;
    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="" /></figure>
                <div className="flex justify-between w-full pr-4">
                    <div className="pl-4">
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
                            <Link to={`updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn bg-orange-600">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;