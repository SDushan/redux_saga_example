import React, { useEffect } from 'react';
import { Text, View, Image, StatusBar, StyleSheet, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions'

const ProductsScreen = ({ onFetchProducts, products, isFetchingProducts }) => {

  useEffect(() => {
    onFetchProducts();
  }, [])

  const renderProducts = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.titleStyle}>{item.title}</Text>
      <View style={styles.wrapperStyle}>
        <Image style={styles.imgStyle} source={{ uri: item.image }} />
        <View style={{ paddingLeft: 10 }}>
          <Text>{`$ ${item.price}`}</Text>
          <Text>{`⭐️ ${item.rating.rate} / 5 (${item.rating.count})`}</Text>
          <Text>{item.category}</Text>
        </View>
      </View>
      <Text>{item.description}</Text>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      {
        products.length > 0 ?
          <FlatList
            data={products}
            renderItem={renderProducts}
            keyExtractor={item => item.id}
          /> : isFetchingProducts ?
            <View style={styles.subContainer}>
              <Text style={styles.textStyle}>Fetching... Please wait 😃</Text>
              <ActivityIndicator size="large" color="#00ff00" />
            </View> :
            <View style={styles.subContainer}>
              <Text style={styles.textStyle}>Error while Fetching... 😢</Text>
            </View>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  subContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    padding: 20,
    fontSize: 18,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  productContainer: {
    backgroundColor: "#F7F7FA",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    minHeight: 60,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'gray'
  },
  wrapperStyle: {
    flexDirection: 'row',
    paddingVertical: 10
  },
  imgStyle: {
    width: 60,
    height: 60,
    borderRadius: 5
  }
});

const mapStateToProps = ({ products }) => ({
  products: products.products,
  isFetchingProducts: products.isFetchingProducts
})

const mapDispatchToProps = (dispatch) => {
  return ({
    onFetchProducts: () => {
      dispatch(fetchProducts());
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);
