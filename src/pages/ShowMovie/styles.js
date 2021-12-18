import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background: #191a30;

`;

export const Header = styled.View`
    width: 100%;
    z-index: 99;
    position: absolute;
    top: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const HeaderButton = styled.TouchableOpacity`
    width: 46px;
    height: 46px;
    background: rgba(25,26,48, 0.8);
    border-radius: 23px;
    justify-content: center;
    align-items: center;
`;


export const Banner = styled.Image`
    width: 100%;
    height: 350px;
    border-bottom-left-radius: 70px;
    border-bottom-right-radius: 70px;
`;

export const ButtonLink = styled.TouchableOpacity`
    background: #E72f49;
    width: 63px;
    height: 73px;
    border-radius: 35px;
    position: absolute;
    top: 300px;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    padding: 8px 14px;
    margin-top: 4px;
`;

export const ContentArea = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0 14px;
    justify-content: space-between;
`;

export const Rate =  styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;

export const ListGenres = styled.FlatList`
    padding-left: 14px;
    margin: 8px 0;
    max-height: 35px;
    min-height: 35px;
`;

export const Description = styled.Text`
    padding: 0 14px 30px 14px;
    color: #FFF;
    line-height: 20px;
`;