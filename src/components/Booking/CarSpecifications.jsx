export default function CarSpecifications({ car }) {
    // const specs = [
    //   { label: "Transmission", value: car.transmission },
    //   { label: "Fuel Type", value: car.fuel_type },
    //   { label: "Seats", value: `${car.seats} seats` },
    //   { label: "Year", value: car.year },
    // ];
  
    // return (
    //   <div className="grid grid-cols-2 gap-4 py-4 border-t">
    //     {specs.map((spec, index) => (
    //       <div key={index}>
    //         <p className="text-sm text-gray-500">{spec.label}</p>
    //         <p className="font-semibold capitalize">{spec.value}</p>
    //       </div>
    //     ))}
    //   </div>
    // );

    const colorOfCar = { background: car.color };
    return (
      <div className="space-y-4">
              <div className="flex space-x-8 items-center">
                <div className="flex flex-col items-center">
                  <p className="font-medium mb-2">Color</p>
                  <div className="flex space-x-2">
                    <button
                      style={colorOfCar}
                      className="w-6 h-6 rounded-full bg- gray-400 ring-2 ring-offset-2 ring-navy-600"
                    />
                  </div>
                </div>
                <div>
                <p className="font-medium mb-2">Year</p>
                  <p className="font-semibold capitalize">
                    {car.year}
                  </p>
                </div>
              </div>
              <div className="flex space-x-8">
                <div>
                  <p className="text-sm text-gray-500">Transmission</p>
                  <p className="font-semibold capitalize">
                    {car.transmission}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fuel Type</p>
                  <p className="font-semibold capitalize">
                    {car.fuel_type}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Seats</p>
                  <p className="font-semibold capitalize">{car.seats} seats</p>
                </div>
              </div>
            </div>
    );
  }