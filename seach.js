import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList
} from "react-native";
import { Avatar, ListItem, Icon } from "react-native-elements";
import db from "../config";

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTransactions: [],
      lastVisibleTransaction: null,
      searchText: ""
    };
  }

  /* A função componentDidMount é um método de ciclo de vida
   em componentes React que é executado após o componente ter sido montado
   Adicione esse método abaixo: */
  ??? = async () => {
    /*Ao chamar getTransactions() dentro de componentDidMount, o componente garante que a função é executada assim que o componente é montado na tela, ou seja,
     as informações são buscadas imediatamente quando o componente é exibido para o usuário. 
     Chame essa função abaixo:*/
    ???;
  };
/*A função getTransactions é usada para obter as transações da coleção "transactions" do banco de dados Firebase.
Como você poderia criar a função ' getTransactions' e obter a coleção 'transactions'? */
  ???
      .limit(10)
      .get()
      .then(snapshot => {
        snapshot.docs.map(doc => {
          this.setState({
            /* Cada vez que um documento é processado, suas informações são adicionadas ao array allTransactions.

            'lastVisibleTransaction' é usada como ponto de referência para a próxima consulta do banco de dados. 
            A cada iteração da função getTransactions, a referência 'lastVisibleTransaction' é atualizada com o
             último documento recuperado, para que a próxima consulta comece a partir da última transação.
             Adicione essa propriedade abaixo:
            */
           
            allTransactions: [...this.state.allTransactions, doc.data()],
            ???: doc
          });
        });
      });
  };

  handleSearch = async text => {
    /* o texto de pesquisa é convertido para letras maiúsculas e, em seguida, dividido em um array de caracteres 
    Como você poderia fazer isso? */
    var enteredText =??? ;

    this.setState({
      allTransactions: []
    });
    /*Se o texto de pesquisa estiver vazio, ou seja, se o usuário não inseriu nada, a função getTransactions é chamada.
    Faça isso abaixo: */
    ???

    /*O código acima faz uma pesquisa no banco de dados Firestore para recuperar transações correspondentes a um
     determinado livro ou ID de aluno, dependendo do que foi digitado na barra de pesquisa. O objetivo é filtrar
      as transações para exibir apenas aquelas relacionadas ao livro ou aluno específico que está sendo procurado.
      
      Programe que...
      se a primeira letra do texto dor igual a 'B', 
      acesse a coleção 'transactions'*/
    ???
        .where("???", "==", text)
        .get()
        .then(snapshot => {
          snapshot.docs.map(doc => {
            this.setState({
              allTransactions: [...this.state.allTransactions, doc.data()],
              lastVisibleTransaction: doc
            });
          });
        });
    } else if (enteredText[0] === "S") {
      db.collection("transactions")
        .where("???", "==", text)
        .get()
        .then(snapshot => {
          snapshot.docs.map(doc => {
            this.setState({
              allTransactions: [...this.state.allTransactions, doc.data()],
              lastVisibleTransaction: doc
            });
          });
        });
    }
  };
