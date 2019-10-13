import * as React from 'react'
import { scanCode, cloud } from 'remax/wechat'
import { View, Text, Image, showModal } from 'remax/wechat'
import styles from './index.module.css'

const { useEffect } = React

export default () => {
  const handleClick = () => {
    scanCode().then(res => {
      showModal({})
    })
  }

  useEffect(() => {
    // cloud.callFunction({
    //   name: 'login'
    // })
  }, [])

  return (
    <View className={styles.app}>
      <View onClick={handleClick} className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
          alt="logo"
        />
        <View className={styles.text}>
          编辑{' '}
          <Text className={styles.path}>src/pages/index/index.js</Text>
          开始
        </View>
      </View>
    </View>
  )
}
