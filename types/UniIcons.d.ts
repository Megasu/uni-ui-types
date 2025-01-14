import { Component } from '@uni-helper/uni-app-types';

export type UniIconsType =
  | 'color'
  | 'wallet'
  | 'settings-filled'
  | 'auth-filled'
  | 'shop-filled'
  | 'staff-filled'
  | 'vip-filled'
  | 'plus-filled'
  | 'folder-add-filled'
  | 'color-filled'
  | 'tune-filled'
  | 'calendar-filled'
  | 'notification-filled'
  | 'wallet-filled'
  | 'medal-filled'
  | 'gift-filled'
  | 'fire-filled'
  | 'refreshempty'
  | 'location-filled'
  | 'person-filled'
  | 'personadd-filled'
  | 'back'
  | 'forward'
  | 'arrow-right'
  | 'arrow-left'
  | 'arrow-up'
  | 'arrow-down'
  | 'bottom'
  | 'right'
  | 'top'
  | 'left'
  | 'eye'
  | 'eye-filled'
  | 'eye-slash'
  | 'eye-slash-filled'
  | 'info-filled'
  | 'reload'
  | 'micoff-filled'
  | 'map-pin-ellipse'
  | 'map-pin'
  | 'location'
  | 'starhalf'
  | 'star'
  | 'star-filled'
  | 'calendar'
  | 'fire'
  | 'medal'
  | 'font'
  | 'gift'
  | 'link'
  | 'notification'
  | 'staff'
  | 'vip'
  | 'folder-add'
  | 'tune'
  | 'auth'
  | 'person'
  | 'email-filled'
  | 'phone-filled'
  | 'phone'
  | 'email'
  | 'personadd'
  | 'chatboxes-filled'
  | 'contact'
  | 'chatbubble-filled'
  | 'contact-filled'
  | 'chatboxes'
  | 'chatbubble'
  | 'upload-filled'
  | 'upload'
  | 'weixin'
  | 'compose'
  | 'qq'
  | 'download-filled'
  | 'pyq'
  | 'sound'
  | 'trash-filled'
  | 'sound-filled'
  | 'trash'
  | 'videocam-filled'
  | 'spinner-cycle'
  | 'weibo'
  | 'videocam'
  | 'download'
  | 'help'
  | 'navigate-filled'
  | 'plusempty'
  | 'smallcircle'
  | 'minus-filled'
  | 'micoff'
  | 'closeempty'
  | 'clear'
  | 'navigate'
  | 'minus'
  | 'image'
  | 'mic'
  | 'paperplane'
  | 'close'
  | 'help-filled'
  | 'paperplane-filled'
  | 'plus'
  | 'mic-filled'
  | 'image-filled'
  | 'locked-filled'
  | 'info'
  | 'locked'
  | 'camera-filled'
  | 'chat-filled'
  | 'camera'
  | 'circle'
  | 'checkmarkempty'
  | 'chat'
  | 'circle-filled'
  | 'flag'
  | 'flag-filled'
  | 'gear-filled'
  | 'home'
  | 'home-filled'
  | 'gear'
  | 'smallcircle-filled'
  | 'map-filled'
  | 'map'
  | 'refresh-filled'
  | 'refresh'
  | 'cloud-upload'
  | 'cloud-download-filled'
  | 'cloud-download'
  | 'cloud-upload-filled'
  | 'redo'
  | 'images-filled'
  | 'undo-filled'
  | 'more'
  | 'more-filled'
  | 'undo'
  | 'images'
  | 'paperclip'
  | 'settings'
  | 'search'
  | 'redo-filled'
  | 'list'
  | 'mail-open-filled'
  | 'hand-down-filled'
  | 'hand-down'
  | 'hand-up-filled'
  | 'hand-up'
  | 'heart-filled'
  | 'mail-open'
  | 'heart'
  | 'loop'
  | 'pulldown'
  | 'scan'
  | 'bars'
  | 'cart-filled'
  | 'checkbox'
  | 'checkbox-filled'
  | 'shop'
  | 'headphones'
  | 'cart';

export interface UniIconsProps {
  /**
   * @desc 图标大小
   * @desc 默认为 16
   */
  size: number | string;
  /**
   * @desc 图标图案
   * @desc 默认为 空字符串
   */
  type: UniIconsType;
  /**
   * @desc 图标颜色
   * @desc 默认为 #333333
   */
  color: string;
  /**
   * @desc 自定义图标
   * @desc 默认为 空字符串
   */
  customPrefix: string;
}

/**
 * @desc 图标
 */
export type UniIcons = Component<Partial<UniIconsProps>>;
