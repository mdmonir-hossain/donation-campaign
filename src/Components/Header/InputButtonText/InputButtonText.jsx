const InputButtonText = () => {
  return (
    <div className="text-center lg:-mt-[250px] -mt-[150px] text-3xl font-bold ">
      <h1>I Grow By Helping People In Need</h1>
      <div className="flex items-center justify-center mt-5">
        <input className="border-gray-400 rounded-lg border py-1 w-[200px] " type="text" />
        <button className="btn bg-red-600 text-white ">Search</button>
      </div>
    </div>
  );
};

export default InputButtonText;
