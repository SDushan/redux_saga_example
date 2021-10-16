import React, { useEffect } from 'react';
import { Text, View, StatusBar, StyleSheet, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions'

const ProductsScreen = ({ onFetchProducts, products, isFetchingProducts }) => {

  useEffect(() => {
    onFetchProducts();
  }, [])

  const renderProducts = ({ item }) => (
    <View style={styles.productContainer}>
      <Text>{item.title}</Text>
      <Text>{item.price}</Text>
      <Text>{item.category}</Text>
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
  productContainer: {
    backgroundColor: "#F7F7FA",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    minHeight: 60,
    borderWidth: 0.5
  },
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
