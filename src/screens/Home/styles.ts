import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {  
        marginTop:50,  
        padding: 24,
        flex:1,
        backgroundColor:'#1A1A1A',
        color:'#fff',
        fontSize:14
    },
  
    containerAdd:{
        marginTop:-50, 
        marginBottom:20, 
        flexDirection:'row',
        
    },

    containerInfo:{
        paddingBottom:20, 
        flexDirection:'row',  
        justifyContent:'space-between',
        borderBottomWidth:2,
        borderBottomColor:'#262626'
    },

    infoTextCreate:{
        textAlign:'left',
        fontSize:14,
        fontWeight:700,
        color:'#4EA8DE'
    },

    infoTextClear:{
        textAlign:'left',
        fontSize:14,
        fontWeight:700,
        color:'#8284FA'
    },

    containerTask:{
        flexDirection:'row',
        backgroundColor:'#262626',
        color:'#fff',
        alignItems:'center',
        justifyContent:'center',
        minHeight: 52,
        borderRadius: 10,
        borderColor:"#333333",
        borderWidth:2,
        paddingLeft:15,
        paddingRight:15,
        padding:18,
        marginBottom:15,
    },

    containerTaskChecked:{
        flexDirection:'row',
        backgroundColor:'#262626',
        color:'#fff',
        alignItems:'center',
        justifyContent:'center',
        minHeight: 52,
        borderRadius: 10,
        borderColor:"#262626",
        borderWidth:2,
        paddingLeft:15,
        paddingRight:15,
        padding:20,
        marginBottom:15,
    },

    button:{
        backgroundColor:'#1E6F9F',
        borderRadius:10,
        width:52,
        height:52,
        alignItems:'center',
        justifyContent:'center',
        
    },
    buttonTask:{
        backgroundColor:'#1E6F9F',
        borderRadius:5,
        width:25,
        height:25,
        alignItems:'center',
        justifyContent:'center',
        
    },

    counter:{
        flex:1,
        
        backgroundColor:'#262626',
        height: 10,
        borderRadius: 30,
        color:'#fff',
        padding:16,
        marginRight:12,
    },

    input:{
        flex:1,
        backgroundColor:'#262626',
        height: 52,
        borderRadius: 10,
        color:'#fff',
        padding:16,
        marginRight:12,
    },

    inputFocus:{
        flex:1,
        backgroundColor:'#262626',
        height: 52,
        borderRadius: 10,
        borderColor:"#5E60CE",
        borderWidth:1,
        color:'#fff',
        padding:16,
        marginRight:12,
        
    },

    buttonText:{
        color:'#fff',
        fontSize:24,
    },

    listEmptyIcon:{
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
        backgroundColor:'#6c54d6c'
    },
    listEmptyTitle:{
        color:'#808080',
        fontSize:15,
        textAlign:'center',
        fontWeight:600,
        padding:5,
        paddingTop:25
    },

    listEmptyText:{
        color:'#808080',
        textAlign:'center',
        fontSize:15,
    },
    listText:{
        color:'#fff',
        fontSize:14,
        marginRight:12,
        //backgroundColor:'#6c54d6c'
    },
    listTextChecked:{
        color:'#808080',
        fontSize:14,
        marginRight:12,
        //backgroundColor:'#6c54d6c'
    },
    checkBox:{
        flex:1,
        color:'#fff',
        alignItems:'center',
        fontWeight:600,
        fontSize:17,
        marginRight:12,
    }
})