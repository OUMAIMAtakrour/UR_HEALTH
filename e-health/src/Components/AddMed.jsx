import React, { useState } from "react";

const AddMedicineForm = () => {
    const [medicineName, setMedicineName] = useState("");
    const [medicinePrice, setMedicinePrice] = useState("");
    const [medicineCategory, setMedicineCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMedicine = {
            name: medicineName,
            price: parseFloat(medicinePrice),
            category: medicineCategory,
        };
        console.log("New Medicine:", newMedicine);
        setMedicineName("");
        setMedicinePrice("");
        setMedicineCategory("");
    };

    return (
        <div className="max-w-md mx-auto py-8 ">
            <h2 className="text-3xl font-bold text-center mb-6">
                Add Medicine
            </h2>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="medicineName"
                    >
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="medicineName"
                        type="text"
                        placeholder="Medicine Name"
                        value={medicineName}
                        onChange={(e) => setMedicineName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="medicinePrice"
                    >
                        Price ($)
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="medicinePrice"
                        type="number"
                        placeholder="Medicine Price"
                        value={medicinePrice}
                        onChange={(e) => setMedicinePrice(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="medicineCategory"
                    >
                        Category
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="medicineCategory"
                        type="text"
                        placeholder="Medicine Category"
                        value={medicineCategory}
                        onChange={(e) => setMedicineCategory(e.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-end">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add Medicine
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddMedicineForm;
