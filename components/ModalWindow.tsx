import React from "react";
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';

type ModalProps = {
    visible: boolean
    onClose: () => void
}

const ModalWindow: React.FC<ModalProps> = ({
    visible,
    onClose,
}) => (
    <Modal 
        animationType='slide'
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalContent}>
                <Text style={styles.modalText}>This is modal.</Text>
                <Pressable onPress={onClose}>
                    <Text style={styles.modalText}>Close</Text>
                </Pressable>
            </View>
        </View>
    </Modal>
)

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 20,
        padding: 35,
        width: 300,
        backgroundColor: '#e0e0e0',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
    },
    modalText: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        textAlign: 'center',
    }
})

export default ModalWindow