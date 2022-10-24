import React from 'react';
import {View, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';

import {Feather} from '@expo/vector-icons'; // importando uma biblioteca de icones que o expo já possui
import { MotiView, MotiText } from 'moti';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64; // pega o tamanho de espaçamento da statusbar
// e verifica se a pessoa está no android ou ios (se receber um valor da statusbar no android aumenta em + 22 se não aumenta em + 64)

export default function Header({ name }){
    return(
        <View style={styles.container}>
            <MotiView style={styles.content}
                from={{ //passa a onde ela vai
                translateY: -150,
                opacity: 0,
                }}
                animate={{//passa até onde ela vai
                translateY: 0,
                opacity: 1,
                }}
                transition={{//passa a transição dela
                type: "timing",
                duration: 800,
                delay: 300,
                }}>
                <MotiText style={styles.username}
                from={{
                    translateX: -300
                }}
                animate={{
                    translateX: 0
                }}
                transition={{
                    type: "timing",
                    duration: 800,
                    delay: 800,
                }}
                >{name}</MotiText>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>{/*botão*/}
                    <Feather name="user" size={27} color="#fff" /> {/*icone de uma pessoa*/}
                </TouchableOpacity>
            </MotiView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#23238E', //azul marinho
        paddingTop: StatusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },

    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },

    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    }
})