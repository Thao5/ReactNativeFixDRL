import {  useEffect, useState } from "react";
import {
  ActivityIndicator,
  Avatar,
  Card,
  MD2Colors,
  Text,
} from "react-native-paper";
// import userContext from "../../Context/userContext/userContext";
import { StyleSheet, View } from "react-native";
import Api, { endpoints } from "../../ApisService/Api";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const StackNavigate = createNativeStackNavigator();

export default NguoiDungSVDetail = ({ route }) => {
  const [usersv, setUsersv] = useState(null);

  const { nguoidungID } = route.params;

  useEffect(() => {
    const load = async () => {
      const res = await Api.get(endpoints['usersvs_detail'](JSON.stringify(nguoidungID)))
      setUsersv(res.data)
      // console.warn(res.data)
    };
    load();
  }, []);

  return (
    <>
      <View>
        {usersv === null ? (
          <ActivityIndicator animating={true} color={MD2Colors.red800} />
        ) : (
          <>
            <Avatar.Image
              style={{ alignSelf: "center" }}
              size={150}
              source={{ uri: usersv.avatar_path }}
            />
            <Card>
              <Card.Content>
                <Text style={{ alignSelf: "center" }} variant="titleLarge">
                  {usersv.mssv}
                </Text>
                <View style={style.row}>
                  <Text variant="titleMedium">Họ và Tên: </Text>
                  <Text style={style.end} variant="titleMedium">
                    {" "}
                    {usersv.last_name} {usersv.first_name}
                  </Text>
                </View>
                <View style={style.row}>
                  <Text variant="titleMedium">Email: </Text>
                  <Text style={style.end} variant="titleMedium">
                    {usersv.email}
                  </Text>
                </View>
                <View style={style.row}>
                  <Text variant="titleMedium">Phone: </Text>
                  <Text style={style.end} variant="titleMedium">
                    {usersv.phone}
                  </Text>
                </View>
                <View style={style.row}>
                  <Text variant="titleMedium">username: </Text>
                  <Text style={style.end} variant="titleMedium">
                    {usersv.username}
                  </Text>
                </View>
                <View style={style.row}>
                  <Text variant="titleMedium">Ngày Sinh: </Text>
                  <Text style={style.end} variant="titleMedium">
                    {usersv.ngay_sinh}
                  </Text>
                </View>
                <View style={style.row}>
                  <Text variant="titleMedium">Ngày Nhập Học: </Text>
                  <Text style={style.end} variant="titleMedium">
                    {usersv.ngay_nhap_hoc}
                  </Text>
                </View>
              </Card.Content>
            </Card>
          </>
        )}
      </View>
    </>
  );
};

const style = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  end: {
    textAlign: "right",
    right: 0,
    position: "absolute",
  },
});
