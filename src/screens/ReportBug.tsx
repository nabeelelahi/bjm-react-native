import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import BaseButton from "@/src/components/shared/BaseButton";
import AuthInput from "../components/form/AuthInput";
import { BaseContainer } from "../components/shared/BaseContainer";
import { ThemedView } from "../components/shared/ThemedView";
import { Colors } from "../constants/Colors";
import { ThemedText } from "../components/shared/ThemedText";
import * as Yup from "yup";
import { Formik } from "formik";
import { useRequest } from "../hooks/useRequest";
import { useNavigation } from "@react-navigation/native";
import Loader from "../components/shared/Loader";
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().min(3, "Description is too short").required("Description is required"),
});

const ReportBug = () => {
    const { execute, loading } = useRequest("user-feedback", "post", { type: "delay" });
    const navigation = useNavigation();
    const [image, setImage] = useState<any>(null);

    const pickImage = async (setFieldValue: any) => {
        const options: any = {
            mediaType: "photo",
            includeBase64: false,
            quality: 0.8,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) return;
            if (response.errorMessage) {
                console.log("Image picker error:", response.errorMessage);
                return;
            }

            const selected = response.assets?.[0];
            if (selected) {
                setImage(selected);
                setFieldValue("attachment", selected);
            }
        });
    };

    const onSubmit = (values: Record<string, any>) => {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);

        if (values.attachment) {
            formData.append("image", {
                uri: values.attachment.uri,
                name: values.attachment.fileName || "bug-image.jpg",
                type: values.attachment.type || "image/jpeg",
            });
        }

        execute({
            body: formData as never,
            headers: { "Content-Type": "multipart/form-data" },
            cbSuccess: (res) => {
                console.log(res);
                navigation.goBack()
            },
        });
    };

    return (
        <BaseContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ThemedView
                    lightColor={Colors.light.tintedBackground}
                    darkColor={Colors.dark.tintedBackground}
                    style={styles.container}
                >
                    <Formik
                        initialValues={{ title: "", description: "", attachment: null }}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                            <>
                                {/* Title */}
                                {/* <ThemedView> */}
                                <ThemedText style={styles.label}>Title</ThemedText>
                                <AuthInput
                                    placeholder=""
                                    onBlur={handleBlur("title")}
                                    onChangeText={handleChange("title")}
                                    value={values.title}
                                />
                                {touched.title && errors.title && (
                                    <Text style={styles.errorText}>{errors.title}</Text>
                                )}
                                {/* </ThemedView> */}

                                {/* Description */}
                                {/* <ThemedView> */}
                                <ThemedText style={styles.label}>Description</ThemedText>
                                <AuthInput
                                    placeholder=""
                                    onBlur={handleBlur("description")}
                                    onChangeText={handleChange("description")}
                                    value={values.description}
                                    multiline
                                    numberOfLines={5}
                                />
                                {touched.description && errors.description && (
                                    <Text style={styles.errorText}>{errors.description}</Text>
                                )}
                                {/* </ThemedView> */}

                                {/* Image Upload */}
                                <ThemedText style={styles.label}>Attachment</ThemedText>
                                <View style={{ width: "100%", marginTop: 10, paddingHorizontal: 10, flexDirection: 'row' }}>
                                    <TouchableOpacity
                                        style={styles.uploadButton}
                                        onPress={() => pickImage(setFieldValue)}
                                    >
                                        {image ?
                                            <EvilIcons name="pencil" size={30} color={Colors.light.primary} />
                                            :
                                            <AntDesign name="plus" size={30} color={Colors.light.primary} />
                                        }
                                        {/* <Text style={styles.uploadButtonText}>
                                            +
                                        </Text> */}
                                    </TouchableOpacity>

                                    {image && (
                                        <Image
                                            source={{ uri: image.uri }}
                                            style={styles.imagePreview}
                                            resizeMode="cover"
                                        />
                                    )}
                                </View>

                                {/* Submit */}
                                {loading ? <Loader /> : <BaseButton onPress={handleSubmit} title="Submit" />}
                            </>
                        )}
                    </Formik>
                </ThemedView>
            </ScrollView>
        </BaseContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    formContainer: {
        flex: 1,
        alignItems: "center",
    },
    label: {
        paddingHorizontal: 20,
    },
    errorText: {
        color: "red",
        marginHorizontal: 20,
    },
    uploadButton: {
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: Colors.light.primary || "#004D71",
        alignItems: "center",
        justifyContent: "center",
    },
    uploadButtonText: {
        // color: "#fff",
        fontWeight: "bold",
    },
    imagePreview: {
        // width: "100%",
        borderWidth: 2,
        borderColor: Colors.light.primary || "#004D71",
        height: 100,
        width: 100,
        marginLeft: 10,
    },
});

export default ReportBug;
