import React, { useState } from 'react';
import { StyleSheet,ScrollView, View, TextInput, Text } from 'react-native';
import colors from '../colors';

const TagInput = () => {
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState('');

    const handleInput = (text) => {
        setTagInput(text);
    };

    const handleTagSubmit = () => {
        if (tagInput.length > 0) {
            setTags([...tags, tagInput]);
            setTagInput('');
        }
    };

    const handleTagRemove = (index) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Type a Skill and press Enter"
                    value={tagInput}
                    onChangeText={handleInput}
                    onSubmitEditing={handleTagSubmit}
                    blurOnSubmit={false}
                />
                {tags.map((tag, index) => (
                    <View style={styles.tag} key={index}>
                        <Text  style={{color:"#fff"}}>{tag}</Text>
                        <Text style={styles.removeTag} onPress={() => handleTagRemove(index)}>
                            X
                        </Text>
                    </View>
                ))}  
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin:20,
        width: "100%",
    },
    inputContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        height: 'auto',
        width: '85%',
    },
    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        padding: 6,
        backgroundColor:"black",
        borderRadius: 20,  
    },
    removeTag: {
        marginLeft: 8,
        color: colors.lightGray,
        fontWeight: 'bold',
        fontSize:16,
    },
    textInput: {
        height: 40,
        width: '100%',
        marginLeft: 5,
        fontSize: 16,
    },
});

export default TagInput;
