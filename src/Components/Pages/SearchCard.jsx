

const SearchCard = ({filteredDatas}) => {
    return (
            <div className="flex justify-center">
                {filteredDatas?.map((filteredData) => (
                <div key={filteredData?.name}>
            <img src={filteredData?.image} alt="donarImage" />
            <div>
                <h2>{filteredData?.name}</h2>
                <h2>{filteredData?.email}</h2>
                <h2>{filteredData?.bloodGroup}</h2>
            </div>
        </div>
            ))}
            </div>
        
    );
};

export default SearchCard;