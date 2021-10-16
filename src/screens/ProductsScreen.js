import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions'

const ProductsScreen = ({ onFetchProducts }) => {
  useEffect(() => {
    onFetchProducts();
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ProductsScreen</Text>
    </View>
  );
}

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = (dispatch) => {
  return ({
    onFetchProducts: () => {
      dispatch(fetchProducts());
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);
