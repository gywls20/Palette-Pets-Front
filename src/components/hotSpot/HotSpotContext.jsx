// eslint-disable-next-line no-unused-vars
import React, {createContext, useState} from 'react';

const HotSpotContext = createContext();

const HotSpotProvider = ({ children }) => {
    const [hotSpots, setHotSpots] = useState([]);

    const addHotSpot = (hotSpot)=> {
        setHotSpots([...hotSpots, { ...hotSpot, id:hotSpots.length + 1 }]);
    };

    const updateHotSpot = (updateHotSpot) => {
        setHotSpots(hotSpots.map(hotSpot => (hotSpot.id === updateHotSpot.id ? updateHotSpot : hotSpot)));
    };

    const deleteHotSpot = (deleteHotSpot) => {
        setHotSpots(hotSpots.filter(hotSpot => hotSpot.id !== deleteHotSpot.id));
    };

    return (
        <HotSpotContext.Provider value={{ hotSpots, addHotSpot, updateHotSpot, deleteHotSpot }}>
            {children}
        </HotSpotContext.Provider>
    );

};

export { HotSpotContext, HotSpotProvider};