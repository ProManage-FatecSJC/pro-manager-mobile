import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardButton: {
        backgroundColor: '#f8f8f8',

        marginBottom: 16,
        padding: 24,

        borderRadius: 32,

        borderColor: '#00688C',
        borderWidth: 2,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0,
        shadowRadius: 32,

        elevation: 2,
    },
    container: {
        flex: 1,
        gap: 16,
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    partnerNameWrapper: {
        paddingVertical: 8,
        paddingHorizontal: 16,

        backgroundColor: '#4994CE',

        borderRadius: 999,
    },
    partnerName: {
        fontSize: 16,

        color: '#f8f8f8',
    },
    partnerDetailsWrapper: {
        gap: 8,
    },
    partnerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    partnerTitle: {
        fontWeight: '700',
        fontSize: 18,
        marginRight: 8,

    },
    partnerText: {
        fontSize: 18,
    },
});
