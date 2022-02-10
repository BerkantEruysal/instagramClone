import {View, Text, Image, StyleSheet, TouchableOpacity , ScrollView , Dimensions} from 'react-native';
import React from 'react';
import UserFollowData from '../components/UserFollowData';
import ProfileBio from '../components/ProfileBio';

const storyData = [{id : 0 , image : require("../assets/examplePostImage.png"), name : "story name"},
{id : 1 , image : require("../assets/examplePostImage.png"), name : "tatil"},
{id : 2 , image : require("../assets/examplePostImage.png"), name : "okul"},
{id : 3 , image : require("../assets/examplePostImage.png"), name : "kedim"},
{id : 4 , image : require("../assets/examplePostImage.png"), name : "araba"}]

export default function UserProfile() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.userNameWrapper}>
          <Text style={styles.userName}> UserName</Text>
          <Image
            source={require('../assets/dropIcon.png')}
            style={styles.dropIcon}></Image>
        </TouchableOpacity>

        <View style={styles.headerButtonWrapper}>
          <TouchableOpacity>
            <Image
              style={styles.headerButton}
              source={require('../assets/createContentIcon.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.headerButton}
              source={require('../assets/burgerIcon.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <UserFollowData></UserFollowData>
      <ProfileBio></ProfileBio>
      <View style={styles.editProfileWrapper}>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storySection}>
        {storyData.map((data) => {
          return <TouchableOpacity key={data.id} style={styles.storyWrapper}>
          <View style={styles.storyImageWrapper}>
            <Image style={styles.storyImage} source={data.image}></Image>
          </View>
          <Text>{data.name}</Text>
        </TouchableOpacity>
        })}
      </ScrollView>

    </View>
  );
}

const ScreenWidth = Dimensions.get("screen").width
const vw = (size) => {
  return Dimensions.get("screen").width * size / 100
}

const styles = StyleSheet.create({
  wrapper: {},
  header: {
    flexDirection: 'row',
    marginTop: 10,
  },
  userNameWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  dropIcon: {
    width: 12,
    height: 7,
    alignSelf: 'center',
    marginLeft: 10,
    marginBottom: 3,
    opacity: 0.5,
  },
  userName: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 20,
  },
  headerButton: {
    width: 24,
    height: 24,
    marginHorizontal: 15,
  },
  headerButtonWrapper: {
    flexDirection: 'row',
    padding: 5,
  },
  editProfileButton : {
    borderWidth : 1,
    borderRadius : 3,
    borderColor : "#CBCBCB",
    height : 30,
    alignItems : "center",
    justifyContent : "center",
  },
  editProfileWrapper : {
    paddingHorizontal : 15,
    marginTop : 10
  },
  editProfileText : {
    color : "#000000",
    fontWeight : "bold"
  },
  storySection : {
    marginTop : 10
  },
  storyWrapper : {
    alignItems :"center",
    marginHorizontal : 5 
  },
  storyImageWrapper : {
    width : vw(15) + 8,
    height : vw(15) + 8,
    borderWidth : 0.8,
    borderRadius : (vw(15) + 8) / 2,
    alignItems : "center",
    justifyContent : "center",
    borderColor : "rgba( 0 , 0 , 0 , 0.3)"
  },
  storyImage : {
    width : vw(15),
    height : vw(15),
    borderRadius : vw(15) / 2
  }
});
