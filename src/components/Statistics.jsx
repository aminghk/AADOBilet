function Statistics() {
  return (
    <div>
      <div className="grid grid-cols-3 items-center  bg-color-primary p-4 h-80 mt-12 text-white ">
        <div className="ml-40">
          <h3
            className="text-6xl after:bg-white after:block after:w-10 after:h-1 
          after:mx-auto after:mt-8 after: mb-8"
          >
            124
          </h3>
          <h4 className="text-2xl">Events organized</h4>
        </div>

        <div>
          <h3
            className="text-6xl after:bg-white after:block after:w-10 after:h-1 
          after:mx-auto after:mt-8 after: mb-8"
          >
            2541
          </h3>
          <h4 className="text-2xl">Active users</h4>
        </div>

        <div className="mr-40">
          <h3
            className="text-6xl after:bg-white after:block after:w-10 after:h-1 
          after:mx-auto after:mt-8 after: mb-8"
          >
            54230
          </h3>
          <h4 className="text-2xl">Tickets sold</h4>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
