/* eslint-disable react/prop-types */


const SearchCard = ({filteredDatas}) => {
    return (
            <div className="px-3 md:flex md:gap-6 justify-center mt-8">
                {filteredDatas?.map((filteredData) => (
                <div key={filteredData?.name} className="bg-white mb-4 md:m-0 p-4 rounded-md md:rounded-xl shadow-md">
            <img className="w-28 rounded-full mx-auto border-4 border-[#FF0563]" src={"https://i.ibb.co/Ct209q2/photo-1535713875002-d1d0cf377fde.jpg"} alt="donarImage" />
            <div>
                <h2 className="text-xl md:text-3xl">{filteredData?.name}</h2>
                <div className="text-gray-500">
                <h2 className="text-xl">Email: {filteredData?.email}</h2>
                <h2 className="text-xl">Blood Group: {filteredData?.bloodGroup}</h2>
                </div>
            </div>
        </div>
            ))}
            </div>
        
    );
};

export default SearchCard;