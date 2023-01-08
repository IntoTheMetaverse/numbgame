import { View, Text, Pressable, StyleSheet } from 'react-native';
import { onPress } from 'react'

function PrimaryButton ({children, onPress}) {
    return(
    <View style={styles.buttonOuterContainer}>
        <Pressable 
        //({pressed}) => just indicates to apply style if pressed vs style if not pressed
        style={({pressed}) => pressed 
            ? [styles.buttonInnerContainer, styles.pressed] 
            : styles.buttonInnerContainer}
        onPress={onPress}>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View>
)}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: 'gray',
        paddingVertical: 8,
        paddingHorizontal: 16,
        //android only
        elevation: 4,
        //iOS only
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    //iOS method of button visual feedback
    pressed: {
        opacity: 0.75
    }
});