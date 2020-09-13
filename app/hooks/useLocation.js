import { useState, useEffect } from "react";

import * as Location from 'expo-location';

export default useLocation = () => {
    const [location, setLocation] = useState();

    const getUserLocation = async () => {
        try {
            const {granted} = await Location.requestPermissionsAsync();

            if(!granted) return ;

            const {coords: {longitude, latitude}} = await Location.getLastKnownPositionAsync();
            setLocation({longitude, latitude});

        } catch (error) {
            
        }
    }

    useEffect(() => {
        getUserLocation();
    }, []);

    return location;
}