function Categories() {
  return (
    <div>
      <h3 className="uppercase before:bg-[#FF6600] before:w-1 before:h-4 before:block  flex before:mr-5 p-5 items-center font-bold text-lg">
        events by categories
      </h3>
      <div className="grid grid-cols-3 p-3 ml-5">
        <div className="bg-categories-color-green w-80 h-60">events</div>
        <div className="bg-categories-color-red w-80">sports</div>
        <div className="bg-categories-color-purple w-80">parties</div>
        <div className="bg-categories-color-dark-yellow w-80 h-60">
          communities
        </div>
        <div className="bg-categories-color-light-blue w-80">theaters</div>
        <div className="bg-categories-color-pink w-80">concerts</div>
      </div>
    </div>
  );
}

export default Categories;
