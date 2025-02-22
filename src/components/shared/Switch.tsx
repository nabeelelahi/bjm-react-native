import { Switch } from 'react-native'
import React, { useState } from 'react'

export default BaseSwitch = () => {
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <Switch
            trackColor={{ false: '#767577', true: '#E5386D' }}
            thumbColor={isEnabled ? '#fff' : '#fff'}
            ios_backgroundColor="#3e3e3e"
            style={{ transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }] }}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />

    )
}