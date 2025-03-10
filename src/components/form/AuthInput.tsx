
import { View, TextInput } from 'react-native';
import React from 'react';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import { Colors } from '@/src/constants/Colors';
import { WIDTH } from '@/src/constants/Metrices';
import { AuthInputProps } from '@/src/@types';
import { baseShadow } from '../../assets/styles/shadow';
import { baseRadius } from '../../assets/styles/radius';

const AuthInput = (props: AuthInputProps) => {
    const colorScheme = useColorScheme();
    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{ padding: 10 }}>
            <TextInput
                placeholder={props.placeholder}
                onChangeText={props.onChangeText ? props.onChangeText : () => { }}
                onBlur={props.onBlur ? props.onBlur : () => { }}
                value={props.value ?? ''}
                style={[
                    // eslint-disable-next-line react-native/no-inline-styles
                    {
                        backgroundColor: Colors[colorScheme ?? 'light'].background,
                        height: 72,
                        width: WIDTH(90),
                        paddingHorizontal: WIDTH(6),
                        fontSize: 16,
                        color: Colors[colorScheme ?? 'light'].text,
                    },
                    baseShadow,
                    baseRadius,
                ]}
            />
        </View>
    );
};

export default AuthInput;
