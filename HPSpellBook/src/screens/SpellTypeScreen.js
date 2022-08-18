import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import SpellTypes from "../components/SpellTypes";

const SpellTypeScreen = () => {

    const [spellType, setSpellType] = useState([]);

    return (
        <View>
            <SpellTypes result={{
            spellType: spellType,
            setSpellType: setSpellType
            }}/>
            {/* Added this line to test that the function is working upon clicking the spell type */}
            <Text>{spellType}</Text>
        </View>
    );

}

export default SpellTypeScreen; 