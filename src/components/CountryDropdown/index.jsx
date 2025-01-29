import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState, useContext, useEffect } from 'react';
import { MyContext } from '../../App'; // Import the context

const CountryDropdown = () => {
    const [isOpenModel, setIsOpenModel] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const { stateList } = useContext(MyContext); // Access the state list from context
    const [filteredStates, setFilteredStates] = useState([]);
    const [selectedState, setSelectedState] = useState("India"); // Default location set to India
    const [selectedTab, setSelectedTab] = useState(null);

    const selectState = (state) => {
        setSelectedState(state.name); // Update the selected state name
        setSelectedTab(state.id);
        setIsOpenModel(false); // Close the dialog
    };

    // Filter states when search query or stateList changes
    useEffect(() => {
        if (stateList.length > 0) {
            const filtered = stateList.filter((state) =>
                state.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredStates(filtered);
        } else {
            setFilteredStates([]); // Clear filtered list if stateList is empty
        }
    }, [searchQuery, stateList]);

    return (
        <>
            <Button className="countryDrop" onClick={() => setIsOpenModel(true)}>
                <div className="info d-flex flex-column">
                    <span className="label">{selectedState !== "India" ? selectedState : "Your Location"}</span>
                    <span className="name">India</span> {/* Always show "India" below the selected state */}
                </div>
                <span className="ml-auto" style={{ marginLeft: 'auto' }}><FaAngleDown /></span>

            </Button>
            <Dialog
                onClose={() => setIsOpenModel(false)}
                open={isOpenModel}
                className="locationModel"
            >
                <h4>Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="close_" onClick={() => setIsOpenModel(false)}>
                    <IoClose />
                </Button>
                <div className="headerSearch w-100">
                    <input
                        type="text"
                        placeholder="Search Your Area"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button><IoIosSearch /></Button>
                </div>
                <ul className="countryList mt-3">
                    {filteredStates.length > 0 ? (
                        filteredStates.map((state) => (
                            <li key={state.id}>
                                <Button
                                    onClick={() => selectState(state)}
                                    className={`${selectedTab === state.id ? 'active' : ''}`}
                                >
                                    {state.name}
                                </Button>
                            </li>
                        ))
                    ) : (
                        <li>No states found</li>
                    )}
                </ul>
            </Dialog>
        </>
    );
};

export default CountryDropdown;
