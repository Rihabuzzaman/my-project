import PriceOption from "./PriceOption/PriceOption";

const PriceOptions = () => {
    const options = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 20,
            "currency": "USD",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 personal training session per month"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 40,
            "currency": "USD",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group classes",
                "5 personal training sessions per month",
                "Access to steam room and sauna"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 70,
            "currency": "USD",
            "features": [
                "All Standard Plan benefits",
                "Unlimited personal training sessions",
                "Access to premium lounge",
                "Monthly health assessments",
                "Diet and nutrition counseling"
            ]
        },
        {
            "id": 4,
            "name": "Elite Plan",
            "price": 100,
            "currency": "USD",
            "features": [
                "All Premium Plan benefits",
                "Private locker",
                "24/7 gym access",
                "Personalized workout plan",
                "Access to VIP events and workshops",
                "Complimentary sports massage each month"
            ]
        }
    ];
    
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best prices in the town</h2>
          <div className="grid grid-cols-3 gap-6">
          {
                options.map(option => <PriceOption key={option.id} option={option} />)
            }
          </div>
        </div>
    );
};

export default PriceOptions;
