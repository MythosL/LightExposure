import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        console.log("Data stored successfully");
    } catch (e) {
        console.log("Failed to store data");
    }
};

export const getItemFor = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            console.log("Data retrieved successfully");
            return value;
        }
    } catch (e) {
        console.log("Failed to retrieve data", e);
    }
}

    