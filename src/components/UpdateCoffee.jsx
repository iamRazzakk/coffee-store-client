import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, quantity, supplier, test, category, details, photo } = coffee;
    const handleUpdateCoffee = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = { _id, name, quantity, supplier, test, category, details, photo };
        console.log(updateCoffee);
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK!'
                    })
                }
            })
    }
    return (
        <div className="bg-[#f4f3f0] p-24">
            <h1 className="text-3xl font-extrabold">Update coffee:{name}</h1>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name and quantity name */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="name" defaultValue={name} placeholder="Enter your coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input w-full input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form row supplyer and test */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Test</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="test" defaultValue={test} placeholder="Test" className="input w-full input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form category and details */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="category" defaultValue={category} placeholder="Enter your Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input w-full input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form for photo url */}
                <div className="mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="photo" defaultValue={photo} placeholder="Enter your Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateCoffee;