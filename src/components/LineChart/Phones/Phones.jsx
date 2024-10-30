import axios from "axios";
import { useEffect, useState } from "react";

const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(response => {
                const phoneData = response.data.data; // Correctly access response data

                // Create a new array with formatted phone data
                const phonesWithFakeData = phoneData.map(phone => {
                    const price = parseInt(phone.slug.split('-')[1]); // Fix the split method
                    const obj = {
                        name: phone.phone_name,
                        price: price || 0 // Set to 0 if price is NaN
                    };
                    return obj;
                });

                setPhones(phonesWithFakeData); // Use setPhones (capitalization)
            })
            .catch(error => {
                console.error('Error fetching phones:', error);
            });
    }, []);

    return (
        <div>
            <h2 className="text-5xl">Phones: {phones.length}</h2>
            <ul className="mt-4">
                {phones.map((phone, index) => (
                    <li key={index} className="text-xl">
                        {phone.name} - ${phone.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Phones;
