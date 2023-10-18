import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignupScreen from "../screens/SignupScreen";
import SignIn from "../screens/signIn";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DoctorListsScreen from "../screens/DoctorListsScreen";
import DoctorDetailsScreen from "../screens/DoctorDetailsScreen";
import AppointmentBookingScreen from "../screens/AppointmentBookingScreen";
import ViewAppointmentsScreen from "../screens/ViewAppointmentsScreen";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Doctor Lists" component={DoctorListsScreen} />
      <Tab.Screen name="Doctor Details" component={DoctorDetailsScreen} />
      <Tab.Screen
        name="Appointment Booking"
        component={AppointmentBookingScreen}
      />
      <Tab.Screen name="View Appointments" component={ViewAppointmentsScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigation;
