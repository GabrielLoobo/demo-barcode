import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { BookItem } from '../components/BookItem/BookItem';
import { TextField } from '../components/TextFields/TextFields';

import { getBookInfo } from '../services/axiosServices';

export const HomeScreen = () => {
    const [showScanner, setShowScanner] = useState(false);
    const [isbn, setIsbn] = useState("");

    const [bookCoverLink, setCoverLink] = useState("invalid");
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    
    const updateBookInfo = async (Isbn) => {
        if(Isbn){
            const bookInfo = await getBookInfo(Isbn);
            setBookTitle(bookInfo?.title);
            setBookAuthor(bookInfo?.author);
        }
    }

    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
      })();
    }, []);


    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);
        await setIsbn(data);
        setShowScanner(false);
        setScanned(false);
      };
      

    useEffect(()=>{
        setCoverLink(`http://covers.openlibrary.org/b/isbn/${isbn}.jpg`);
        updateBookInfo(isbn)
    }, [isbn])
    return (
        <View style={{display:'flex',flexDirection:'column', justifyContent:'space-around',alignItems:'center',flex:1, backgroundColor:'blue' }}>
            
            <BookItem onPress={updateBookInfo} uri={bookCoverLink}/>
            
            <TextField textValue={isbn} fieldTitle={"ISBN"}/>
            <TextField textValue={bookTitle} fieldTitle={"Título"}/>
            {/* <TextField textValue={bookAuthor} fieldTitle={"Autor"}/>s */}

            
                 


            <TouchableOpacity
                onPress={() => {
                    setShowScanner(!showScanner)
                }}
                style={{backgroundColor:'white', padding:20, margin:10}}>
                    <Text style={{color:"blue"}}>Scanear</Text>
            </TouchableOpacity>



            <Modal visible={showScanner}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{width:'100%',height:'100%'}}
                />
            </Modal>
        </View>
    )
}