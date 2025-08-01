import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';

const MyPDFViewer = ({ route }: any) => {
    const navigation = useNavigation()
    const source = {
        uri: route.params.file_url,
        cache: true,
    };

    useEffect(() => {
        navigation.setOptions({
            headerTitle: route.params.title.length > 12 ? route.params.title.substring(0, 12).trim() + '...' : route.params.title,
        });
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Pdf
                source={source}
                trustAllCerts={false}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={{
                    flex: 1,
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                }}
            />
        </View>
    );
};

export default MyPDFViewer;
