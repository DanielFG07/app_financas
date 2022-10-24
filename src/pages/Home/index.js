import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movimentos from '../../components/Movimentos';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '145,90',
        date: '13/09/2014',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Pix Cliente X',
        value: '1.450,00',
        date: '26/09/2015',
        type: 1 // receitas / entradas
    },
    {
        id: 3,
        label: 'Salário',
        value: '3.500.00',
        date: '13/08/2019',
        type: 1 // receitas / entradas
    },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Roberto Silva"/>
      
      <Balance saldo = "7.250.90" gastos = "-3.245,90"/>
    
      <Actions/>
    <Text style={styles.title}>Últimas movimentações</Text>

    <FlatList 
    style={styles.list}
    data={list} //onde está o array para fazer a listagem
    keyExtractor={ (item) => String(item.id)} //para garantir que todo item (id) também vai ser uma string
    showsVerticalScrollIndicator={false} //para não ter a barra de rolagem igual tem no navegador na vertical
    renderItem={ ({ item }) => <Movimentos data={item}/>}
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    
  },

  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },

  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
