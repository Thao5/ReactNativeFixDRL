import * as React from "react";
import { FAB, Portal, PaperProvider } from "react-native-paper";
import userContext from "../../Context/userContext/userContext";
import { useNavigation } from "@react-navigation/native";


export default MyFAB = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const [user, dispatch] = React.useContext(userContext);

  const navigation = useNavigation();

  const logout = () => {
    console.info("Log Out");
    dispatch({
      type: "logout",
    });
  };

  const gotouserDetail = () => {
    navigation.navigate("userDetail")
  }

  return (
      <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? "settings-helper" : "account-settings"}
          actions={[
            { icon: "logout", label: 'Log Out', onPress: () => logout() },
            { icon: "book-open-page-variant-outline", label: 'Các hoạt động đã tham gia', onPress: () => navigation.navigate('Activity Attended') },
            { icon: "check-decagram", label: 'Minh Chứng Hoạt Động', onPress: () => navigation.navigate('MinhChung HoatDong') },
            {
              icon: 'account',
              label: user.userdata.first_name + " " + user.userdata.last_name,
              onPress: () => navigation.navigate('UserDetail'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
  );
};
