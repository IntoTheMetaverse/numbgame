import { Text, StyleSheet } from 'react-native';
function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 3,
        borderColor: 'yellow',
        borderRadius: 12,
        padding: 12
    }
});