import React from 'react';
import { LayoutChangeEvent, ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
// stores
import { RootState } from '../../stores';
// components
import Balloon from './Balloon';

const BalloonList = () => {
  const { data } = useSelector((state: RootState) => state.balloonReducer);

  const [viewHeight, setViewHeight] = React.useState(0);

  const scrollViewRef = React.useRef<ScrollView>(null);

  const getWidth = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setViewHeight(height);
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.container}
      onLayout={getWidth}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      onContentSizeChange={() => {
        scrollViewRef.current?.scrollToEnd();
      }}>
      {data.map((each, idx) => (
        <Balloon key={each.bot + idx} {...each} viewHeight={viewHeight} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BalloonList;
