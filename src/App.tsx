import React, { useState } from "react";
import {SafeAreaView,View,Text,TextInput,Pressable, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const Separator = () => <View style={styles.separator} />;

function App(){
	const [data,setData] = useState('');
	const [todo,setTodo] = useState([])

	const addTodo=()=>{
		if(data==''){
			return
		}else{
			setTodo([...todo,{id:Date.now(),text:data}]);
			setData('');	
		}
	}

  const addnewTodo=()=>{
    if(data.trim() !==''){
      setTodo([...todo,setTodo]);
    }
    setData('')
  }

  const removetodo=(id)=>{

    const removetodo = todo.filter((e)=> e.id !== id)
    setTodo(removetodo)


  }

	return(
		<SafeAreaView style={styles.container}>
			<View ><Text style={styles.text}>Todo App_1</Text></View>
			<TextInput 
			style={styles.input}
			onChangeText={setData}
			value={data}
			placeholder="name"/>
			 <Separator />
			 <View style={styles.fixToText}>
			<Button
			 onPress={addTodo}
			 title="Add Todo Text"
			 color="#841584"
			 accessibilityLabel="Learn more about this purple button"/>
			 </View>
			<View>
        {todo.map((e)=>{
          return(
            <View style={styles.align}>
            <Text style={styles.todo} key={e.id}>{e.text}</Text><Text onPress={()=>removetodo(e.id)}><Icon name="close" size={36} color="red"/></Text>
            </View>
          )
        })}
      </View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container:{
		padding: 24,
		flex:1,
	backgroundColor:'#61dafb'

	},
	text:{
		fontWeight:"bold",
		fontStyle:"italic",
		fontSize: 30,
		color: '#000',
	},
	input:{
		height:40,
		margin:12,
		borderWidth:1,
		padding:10
	},
  align:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
	button:{
		backgroundColor:'red'
	},
	todo:{
		fontSize:24,
		fontWeight:"bold",
		color:'green',
    padding:10
	},
	separator:{
		marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
	}
	,
	fixToText:{
		flexDirection: 'row',
		justifyContent: 'center',
	}
})

export default App