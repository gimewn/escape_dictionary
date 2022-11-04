import React from 'react'
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function SearchThemeList({
  themeId,
  themeName,
  storeName,
  themeImg,
  likeCount,
  star,
}) {
  const navigation = useNavigation()
  
  return (
    <TouchableOpacity onPress={() => {navigation.navigate('ThemeDetailScreen')}}>
      <Container>
        {/* themeImg 넣기 */}
        <CafeImage />
        <TextContainer>
          <Title>{themeName}</Title>
          <SubTitle>{storeName}</SubTitle>
          <IconWrapper>
            <IconContainer>
              <Ionicons name="star" size={17} color="black" />
              <IconStyle>{star}</IconStyle>
            </IconContainer>
            <IconContainer>
              <Ionicons name="heart" size={17} color="red" />
              <IconStyle>{likeCount}</IconStyle>
            </IconContainer>
          </IconWrapper>
        </TextContainer>
        {/* store LikeButton 추가 */}
      </Container>
    </TouchableOpacity>
  )
}

const Container = styled.View`
  position: relative;
  margin: 0px 10px 20px 10px;
  justify-content: flex-end;
`

const TextContainer = styled.View`
  position: absolute;
  background-color: #fff;
  width: 100%;
  padding: 10px;
  padding-top: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
const IconWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

// 추후 이미지 태그로 대체
const CafeImage = styled.View`
  width: 150px;
  height: 240px;
  border-radius: 10px;
  background-color: gray;
`
const Title = styled.Text`
  font-family: "SUIT-Bold";
  font-size: ${({ theme }) => theme.fontSizes.title3};
  color: #000;
  margin-bottom: 8px;
`
const SubTitle = styled.Text`
  font-family: "SUIT-Regular";
  font-size: ${({ theme }) => theme.fontSizes.caption1};
  line-height: ${({ theme }) => theme.fontHeight.caption1};
  color: #000;
`

const IconStyle = styled.Text`
  font-family: "SUIT-Bold";
  font-size: ${({ theme }) => theme.fontSizes.caption1};
  line-height: ${({ theme }) => theme.fontHeight.caption1};
  vertical-align: middle;
  color: #000;
  margin-left: 4px;
`