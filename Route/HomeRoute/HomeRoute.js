import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../components/Home/Home";
import HoatDongDetail from "../../components/ActivityDetail/ActivityDetail";
import userDetail from "../../components/userDetail/userDetail";
import userSVDetail from "../../components/userDetail/userSVDetail";
import ActivityAttended from "../../components/ActivityDetail/ActivityAttended";
import MinhChung from "../../components/MinhChungHoatDong/MinhChung";

const Stack = createNativeStackNavigator();

const HomeRoute = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="UserDetail" component={userDetail} />
            <Stack.Screen name="Activity Detail" component={HoatDongDetail} />
            <Stack.Screen name="UserSV Detail" component={userSVDetail} />
            <Stack.Screen name="Activity Attended" component={ActivityAttended} />
            <Stack.Screen name="MinhChung HoatDong" component={MinhChung} />
        </Stack.Navigator>
    )
}

export default HomeRoute;