import { useEffect, useState } from "react";
import { authApi, endpoints } from "../../ApisService/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, Button, Card, MD2Colors, Modal, Portal, Text } from "react-native-paper";
import { Alert, Linking, StyleSheet, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
// import Pdf from "react-native-pdf";
// import Pdf from "react-native-pdf";

const ThongKe = () => {
    const [thongke, setThongKe] = useState(null);
    const [tkData, setTKData] = useState(null);
    const [visible, setVisible] = useState(false);
    const [mssv, setMSSV] = useState(null);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };


    useEffect(() => {
        const loadThongKe = async () => {
            let token = await AsyncStorage.getItem("token-access");
            const res = await authApi(token).get(endpoints['thanhtichs_thongketlsv'])
            setThongKe(res.data)
            // console.warn(res.data)
            let array = [];
            res.data.map((tk) => {
                array.push({
                    value: tk.diem,
                    label: tk.mssv
                })
            })
            setTKData(array)
            // console.warn(array)
        }

        loadThongKe();
    }, [])

    const thongkePDF = async () => {
        let token = await AsyncStorage.getItem("token-access");
        const res = await authApi(token).get(endpoints['thanhtichs_statpdftlsv'])
        console.warn(res.data)

        const supported = await Linking.canOpenURL("http://10.0.2.2:8000/thanhtichs/statspdftlsv/");

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL("http://10.0.2.2:8000/thanhtichs/statspdftlsv/");
        } else {
            Alert.alert(`Don't know how to open this URL`);
        }
    }

    const thongkeCSV = async () => {
        let token = await AsyncStorage.getItem("token-access");
        const res = await authApi(token).get(endpoints['thanhtichs_statcsvtlsv'])
        console.warn(res.data)

        const supported = await Linking.canOpenURL("http://10.0.2.2:8000/thanhtichs/statscsvtlsv/");

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL("http://10.0.2.2:8000/thanhtichs/statscsvtlsv/");
        } else {
            Alert.alert(`Don't know how to open this URL`);
        }
    }

    return (

        <View style={{ alignItems: "center", alignSelf: "center", justifyContent: "center", alignContent: "center", marginTop: 180 }}>
            {thongke === null ? <ActivityIndicator animating={true} color={MD2Colors.red800} /> :
                <><View>
                    <BarChart

                        barWidth={22}
                        barBorderRadius={4}
                        frontColor="#177AD5"
                        data={tkData}
                        yAxisThickness={0}
                        xAxisThickness={0}
                        onPress={(item, index) => {
                            showModal();
                            setMSSV(item.label);
                        }} />
                    {thongke.map((tk) => (
                        <Portal>
                            <Modal visible={visible && mssv === tk.mssv} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                {mssv === tk.mssv ? <Card>
                                    <Card.Title title={"Họ và Tên: " + tk.last_name + " " + tk.first_name} subtitle={"MSSV: " + tk.mssv} />
                                    <Card.Content>
                                        <Text variant="bodyMedium"> <Text variant="titleSmall">Điểm: </Text> {tk.diem}</Text>

                                    </Card.Content>
                                    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                                    {/* <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions> */}
                                </Card> : <></>}

                            </Modal>
                        </Portal>
                    ))}
                    <Button buttonColor="red" dark={true} style={{ marginTop: 10 }} icon="file-pdf-box" mode="contained" onPress={() => thongkePDF()}>
                        In PDF
                    </Button>
                    <Button buttonColor="green" dark={true} style={{ marginTop: 10 }} icon="file-excel" mode="elevated" onPress={() => thongkeCSV()}>
                        In CSV
                    </Button>

                    {/* <Pdf style={styles.pdf} source={{uri: "http://127.0.0.1:8000/thanhtichs/statspdftlsv/"}}/> */}
                </View>
                </>
            }

        </View>
    )
}

export default ThongKe;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         marginTop: 25,
//     },
//     pdf: {
//         flex: 1,
//         width: Dimensions.get('window').width,
//         height: Dimensions.get('window').height,
//     }
// });