import {View,Text,Button} from 'react-native'


const ArticleDetailsScreen = ({route,navigation})=>{
    const {article}=route.params;
    return(
        <View style={{padding:16}} >
            <Text style={{fontSize:28 , fontWeight: 'bold'}}  >{article.title}</Text>
            <Text style={{marginTop:8}} >{article.content}</Text>
            <View style={{ marginTop: 16 }} >
            <Button title='Retour' onPress={()=>navigation.navigate('ArticleList')} />
            </View>
        </View>
    )
}
export default ArticleDetailsScreen;