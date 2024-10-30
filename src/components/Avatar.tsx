import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps<T extends HTMLImageElement> extends ImgHTMLAttributes<T> {
  hasBorder?: boolean
}

export function Avatar<T extends HTMLImageElement>({ hasBorder = true, ...props }: AvatarProps<T>) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  )
}