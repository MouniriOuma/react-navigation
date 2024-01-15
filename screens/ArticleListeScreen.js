import { View,FlatList,TouchableOpacity,Text } from "react-native"

const ArticleListScreen=({navigation}) =>{
    const articles =[
        {id:1, title : "Article N1" , content: "contenu de l'article 1"},
        {id:2, title : "Article N2" , content: "contenu de l'article 2"},
        {id:3, title : "Article N3" , content: "contenu de l'article 3"},
        {id:4, title : "Article N4" , content: "contenu de l'article 4"},
        {id:5, title : "Article N5" , content: "contenu de l'article 5"},
        {id:6, title : "Article N6" , content: "contenu de l'article 6"},
        {id:7, title : "Article N7" , content: "contenu de l'article 7"},
        {id:8, title : "Article N8" , content: "contenu de l'article 8"},
        {id:9, title : "Article N9" , content: "contenu de l'article 9"},
        {id:10, title : "Article N10" , content: "contenu de l'article 10"},


    ]
    const renderItem = ({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ArticleDetails", { article: item })
          }
        >
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 10 }} >
            <Text >{item.title}</Text>
          </View>
        </TouchableOpacity>
      );
    
      return (
        <View>
          <FlatList
            data={articles}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
      );
    };
    export default ArticleListScreen;