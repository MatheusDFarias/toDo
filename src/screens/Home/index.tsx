import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity,FlatList, Alert } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {styles} from './styles'
export function Home(){
    const [tasks,setTasks] = useState([]);
    const [countChecked,setcountChecked] = useState(0);
    const [taskDescription, setTaskDescription] = useState('');
    const [isFocused, setFocused] = useState(false);
    const [isExists, setExists] = useState(false);
    function handleAddTask(){
        let validade = false;
        if(taskDescription == ""){
            return Alert.alert("Atenção","Escreva uma descrição para a tarefa!");
        }else{

            tasks.map((item) =>{
                if(item.task == taskDescription){
                    validade = true;
                    Alert.alert("Atenção","Tarefa com esta descrição já existe!");  
                }
            })
            if(validade == false){
                setTasks([...tasks, {id: taskDescription , task: taskDescription, check: false}]);
                setTaskDescription('');
            }
            validade = false;
        }
       }
    
    function handleUpdateTaskStatus(id:number, checked:boolean){
        setTasks(prevState => {
                return prevState.map((item) =>{
                    if(checked == true){
                        setcountChecked(countChecked+1);
                    }else{
                        setcountChecked(countChecked-1);
                    }
                    return item.id === id ? {...item, check : checked} : item
                })
        })
    }

    function handleRemoveTask(id:number){
        const updateListTask = tasks.filter((item) => {
            if(item.id == id && item.check == true){
               setcountChecked(countChecked-1);
            }
            return item.id !== id
        })
        setTasks(updateListTask)
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerAdd }> 
                <TextInput 
                    placeholder="Adicione um nova tarefa aqui"  
                    placeholderTextColor="#808080"
                    style={isFocused == false ? styles.input : styles.inputFocus}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChangeText={e => {setTaskDescription(e)}}
                    value={taskDescription}>
                </TextInput>
                <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                    <Icon name="plus-circle-outline" size={26} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.infoTextCreate}>
                    Criadas  <Text style={{backgroundColor:'#262626', padding:30, borderRadius:30,color:'#fff'}}>{tasks.length}</Text>
                </Text>
                <Text style={styles.infoTextClear}>
                    Concluídas  <Text style={{backgroundColor:'#262626', padding:30, borderRadius:30,color:'#fff'}}>{countChecked}</Text>
                </Text>
            </View>
                <FlatList 
                data={tasks}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                
                renderItem={({item}) =>
                    <View style={item.check == false ? styles.containerTask : styles.containerTaskChecked}>
                         <BouncyCheckbox
                          size={24}
                          fillColor={item.check == false ? "#4EA8DE" : "#5E60CE"}
                          text={item.task}
                          key={item.id}
                          innerIconStyle={{ borderWidth: 2 }}
                          textStyle={item.check == false ? styles.listText : styles.listTextChecked}
                          style={styles.checkBox}
                          onPress={(isChecked: boolean) => { handleUpdateTaskStatus(item.id,isChecked) }}
                            />
                    <TouchableOpacity onPress={() => {handleRemoveTask(item.id)}}>
                        <Icon name="trash-can-outline" size={26} color="#808080" />
                    </TouchableOpacity>                            
                    </View>
                } 
                ListEmptyComponent={() => (
                    <View style={{paddingTop:'38%'}}>
                    <Icon style={styles.listEmptyIcon} name="file-document-multiple-outline" size={56} color="#808080" />
                    <Text style={styles.listEmptyTitle}>Você ainda não tem tarefas cadastradas</Text>
                    <Text style={styles.listEmptyText}>Crie tarefas e organize seus itens a fazer</Text>
                    
                    </View>
                )}    
                    />
        </View>
    )
}