import * as React from 'react'

import cs from 'classnames'

import * as config from '@/lib/config'

import styles from './PageSocial.module.css'

interface SocialLink {
  name: string
  title: string
  icon: React.ReactNode
  href?: string
}

const socialLinks: SocialLink[] = [
  config.twitter && {
    name: 'twitter',
    href: `https://www.travellings.cn/go.html`,
    title: `Twitter @${config.twitter}`,
    icon: (
      <svg width="40" height="40" data-name="图层 1" version="1.1" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <defs> <style>.cls-1.cls-1,.cls-3.cls-2,.cls-3.cls-3</style> </defs>
        <title>travelling</title><g stroke="#000" strokeWidth=".5">
          <path className="cls-2" d="m13.201 9.0684a3.6596 3.6596 0 0 0-3.6758 3.668v3.8594 0.24805a4.322 4.322 0 0 1 0.44727-0.25586 0.37259 0.37259 0 0 0 0.22266-0.39844v-3.0723a5.1169 5.1169 0 0 1 0.042969-0.87695 2.9559 2.9559 0 0 1 3.0215-2.4844h13.023a2.8979 2.8979 0 0 1 0.53906 0 3.0304 3.0304 0 0 1 2.5664 3.1875v3.3125a0.24011 0.24011 0 0 0 0.066406 0.17383c0.18215 0.12419 0.37168 0.22299 0.60352 0.35547v-2.6816h1.7559a13.488 13.488 0 0 1 3.1543 0.33984 3.5106 3.5106 0 0 1 1.5078 0.70312 0.82797 0.82797 0 0 1 0.27344 1.1016 4.2227 4.2227 0 0 1-0.58789 0.95117 9.1491 9.1491 0 0 1-2.0547 1.7715 33.566 33.566 0 0 1-6.7148 3.3789 0.35603 0.35603 0 0 1-0.27344 0 2.1362 2.1362 0 0 0-2.9805 1.0273 0.43883 0.43883 0 0 1-0.28906 0.24805c-1.8823 0.59614-3.7865 1.1016-5.7129 1.5156-0.96873 0.20699-1.947 0.3809-2.9902 0.58789a2.2769 2.2769 0 0 0 0.53125-1.7559 2.1113 2.1113 0 0 0-0.93555-1.5078 2.1776 2.1776 0 0 0-2.7578 0.2832 2.1196 2.1196 0 0 0-0.62109 1.4238 2.2273 2.2273 0 0 0 0.96875 1.9121l-2.0781 0.14844v-0.16602-2.3594c0-0.099357-0.015791-0.23938-0.082031-0.28906a4.9678 4.9678 0 0 0-0.59766-0.36524v3.1797h-1.3574a13.099 13.099 0 0 1-2.9473-0.34766 3.7756 3.7756 0 0 1-1.7051-0.77734 0.91077 0.91077 0 0 1-0.24805-1.0527 3.5354 3.5354 0 0 1 0.88477-1.2832 11.981 11.981 0 0 1 2.7988-2.1016c1.1923-0.6541 2.4186-1.2521 3.6191-1.873 0.091077-0.049679 0.24023-0.10712 0.24023-0.18164a5.6716 5.6716 0 0 0 0-0.6543l-0.16602 0.058593c-0.5713 0.24839-1.1181 0.48896-1.6562 0.75391a21.527 21.527 0 0 0-4.9688 3.1289 5.1252 5.1252 0 0 0-1.3652 1.7227 1.6559 1.6559 0 0 0 0.63672 2.2344 5.2411 5.2411 0 0 0 1.6562 0.67969 17.305 17.305 0 0 0 4.4707 0.39844c0.17387 0 0.24822 0.033156 0.31445 0.20703a3.6431 3.6431 0 0 0 3.4531 2.3516h0.82812l-0.62891 0.65234-0.10742 0.125c-0.19044 0.21527-0.21638 0.41346-0.050781 0.5625 0.16559 0.14903 0.36425 0.10785 0.55469-0.10742 0.33119-0.38087 0.6542-0.76069 1.002-1.125a0.56302 0.56302 0 0 1 0.34766-0.1582h9.0586a0.44711 0.44711 0 0 1 0.38086 0.16602c0.33947 0.40571 0.68694 0.79492 1.043 1.1758a0.33119 0.33119 0 0 0 0.50586 0.048829 0.35603 0.35603 0 0 0 0-0.49609l-0.62891-0.71289-0.14062-0.18164a1.9871 1.9871 0 0 0 0.22266 0 10.333 10.333 0 0 0 1.6055-0.10742 3.5851 3.5851 0 0 0 2.7754-3.3125v-2.7559a1.7056 1.7056 0 0 0 0-0.17383c-0.15732 0.082797-0.28307 0.17251-0.42383 0.23047a0.35603 0.35603 0 0 0-0.23047 0.39062c0 0.82797 0.06624 1.6544 0 2.4824a2.9227 2.9227 0 0 1-2.7988 2.5918h-2.3105-10.846a3.0552 3.0552 0 0 1-2.1777-0.78711 2.9062 2.9062 0 0 1-0.76953-1.125 57.072 57.072 0 0 0 13.486-2.5918 2.161 2.161 0 0 0 1.6562 2.0449 1.954 1.954 0 0 0 2.0859-0.63672 2.1196 2.1196 0 0 0 0.14062-2.666l0.1582-0.074219c0.88593-0.37259 1.713-0.72218 2.541-1.1113a22.637 22.637 0 0 0 5.2578-3.2031 5.5723 5.5723 0 0 0 1.5234-1.8457 1.6559 1.6559 0 0 0-0.5625-2.1953 4.8685 4.8685 0 0 0-1.7559-0.75391 18.157 18.157 0 0 0-4.5859-0.38086h-0.33203c-0.03312-0.50506-0.023604-0.90148-0.089844-1.332a3.6348 3.6348 0 0 0-3.5859-3.0645h-13.182zm0.32227 13.547a1.6768 1.6768 0 0 1 1.6895 1.6602v0.017578a1.6768 1.6768 0 0 1-1.6738 1.6758 1.6768 1.6768 0 0 1-1.6797-1.668 1.6768 1.6768 0 0 1 1.6641-1.6855zm12.576 0a1.6768 1.6768 0 0 1 1.6895 1.6602v0.015625a1.6768 1.6768 0 0 1-1.6738 1.6777 1.6768 1.6768 0 0 1-1.6797-1.668 1.6768 1.6768 0 0 1 1.6641-1.6855z"/>
          <path className="cls-2" d="m17.844 11.898a0.82797 0.82797 0 0 0-0.10547 0.001953h-3.0137-2.4844a0.87765 0.87765 0 0 0-0.95898 0.93555v6.666a0.82797 0.82797 0 0 0 0.91016 0.89453h5.5469a0.89421 0.89421 0 0 0 0.92774-0.93555v-2.3359-1.168l1.6152-0.4375c0.057955-0.01656 0.14844-0.07532 0.14844-0.125v-0.60352l-1.7969 0.44726v-2.4277a0.82797 0.82797 0 0 0-0.78906-0.91211zm-5.209 0.62891c0.027451-4.38e-4 0.05396-8.67e-4 0.082031 0.001953h2.0645 2.5039c0.43016-0.03806 0.78694 0.33795 0.74219 0.78125 0.01834 4.5826 0.027344 1.3644 0.027344 5.7012 0.020459 0.44873-0.3347 0.81987-0.76953 0.80273h-4.6094c-0.42941 0.0462-0.79272-0.32155-0.75586-0.76562v-5.7168c-0.029925-0.43566 0.30307-0.79812 0.71484-0.80469z"/>
          <path className="cls-2" d="m27.428 11.902a0.82797 0.82797 0 0 0-0.10938 0.015625h-5.4062a0.82797 0.82797 0 0 0-0.97656 0.98438v6.623a0.82797 0.82797 0 0 0 0.82812 0.82812h5.6621a0.98529 0.98529 0 0 0 0.45508-0.12305 0.91077 0.91077 0 0 0 0.40625-0.89453v-5.1582l0.58008-0.074218v-0.62109h-0.58789a6.4748 6.4748 0 0 0 0.025391-0.66211 0.82797 0.82797 0 0 0-0.87695-0.91797zm-5.1602 0.61719c0.027452-4.38e-4 0.055913 0.001087 0.083984 0.003907h2.0625 2.5039c0.43016-0.03806 0.78694 0.33795 0.74219 0.78125 0.01834 4.5826 0.029297 1.3644 0.029297 5.7012 0.02046 0.44874-0.33665 0.81987-0.77148 0.80274h-4.6074c-0.42941 0.0462-0.79272-0.3235-0.75586-0.76758v-5.7148c-0.029925-0.43566 0.30112-0.80007 0.71289-0.80664z"/>
          </g></svg>
    )
  },

  config.github && {
    name: 'github',
    href: `https://www.travellings.cn/go.html`,
    title: `GitHub @${config.github}`,
    icon: (
      <svg width="40" height="40" data-name="图层 1" version="1.1" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <defs> <style>.cls-1.cls-1,.cls-3.cls-2,.cls-3.cls-3</style> </defs>
        <title>travelling</title><g stroke="#000" strokeWidth=".5">
          <path className="cls-2" d="m13.201 9.0684a3.6596 3.6596 0 0 0-3.6758 3.668v3.8594 0.24805a4.322 4.322 0 0 1 0.44727-0.25586 0.37259 0.37259 0 0 0 0.22266-0.39844v-3.0723a5.1169 5.1169 0 0 1 0.042969-0.87695 2.9559 2.9559 0 0 1 3.0215-2.4844h13.023a2.8979 2.8979 0 0 1 0.53906 0 3.0304 3.0304 0 0 1 2.5664 3.1875v3.3125a0.24011 0.24011 0 0 0 0.066406 0.17383c0.18215 0.12419 0.37168 0.22299 0.60352 0.35547v-2.6816h1.7559a13.488 13.488 0 0 1 3.1543 0.33984 3.5106 3.5106 0 0 1 1.5078 0.70312 0.82797 0.82797 0 0 1 0.27344 1.1016 4.2227 4.2227 0 0 1-0.58789 0.95117 9.1491 9.1491 0 0 1-2.0547 1.7715 33.566 33.566 0 0 1-6.7148 3.3789 0.35603 0.35603 0 0 1-0.27344 0 2.1362 2.1362 0 0 0-2.9805 1.0273 0.43883 0.43883 0 0 1-0.28906 0.24805c-1.8823 0.59614-3.7865 1.1016-5.7129 1.5156-0.96873 0.20699-1.947 0.3809-2.9902 0.58789a2.2769 2.2769 0 0 0 0.53125-1.7559 2.1113 2.1113 0 0 0-0.93555-1.5078 2.1776 2.1776 0 0 0-2.7578 0.2832 2.1196 2.1196 0 0 0-0.62109 1.4238 2.2273 2.2273 0 0 0 0.96875 1.9121l-2.0781 0.14844v-0.16602-2.3594c0-0.099357-0.015791-0.23938-0.082031-0.28906a4.9678 4.9678 0 0 0-0.59766-0.36524v3.1797h-1.3574a13.099 13.099 0 0 1-2.9473-0.34766 3.7756 3.7756 0 0 1-1.7051-0.77734 0.91077 0.91077 0 0 1-0.24805-1.0527 3.5354 3.5354 0 0 1 0.88477-1.2832 11.981 11.981 0 0 1 2.7988-2.1016c1.1923-0.6541 2.4186-1.2521 3.6191-1.873 0.091077-0.049679 0.24023-0.10712 0.24023-0.18164a5.6716 5.6716 0 0 0 0-0.6543l-0.16602 0.058593c-0.5713 0.24839-1.1181 0.48896-1.6562 0.75391a21.527 21.527 0 0 0-4.9688 3.1289 5.1252 5.1252 0 0 0-1.3652 1.7227 1.6559 1.6559 0 0 0 0.63672 2.2344 5.2411 5.2411 0 0 0 1.6562 0.67969 17.305 17.305 0 0 0 4.4707 0.39844c0.17387 0 0.24822 0.033156 0.31445 0.20703a3.6431 3.6431 0 0 0 3.4531 2.3516h0.82812l-0.62891 0.65234-0.10742 0.125c-0.19044 0.21527-0.21638 0.41346-0.050781 0.5625 0.16559 0.14903 0.36425 0.10785 0.55469-0.10742 0.33119-0.38087 0.6542-0.76069 1.002-1.125a0.56302 0.56302 0 0 1 0.34766-0.1582h9.0586a0.44711 0.44711 0 0 1 0.38086 0.16602c0.33947 0.40571 0.68694 0.79492 1.043 1.1758a0.33119 0.33119 0 0 0 0.50586 0.048829 0.35603 0.35603 0 0 0 0-0.49609l-0.62891-0.71289-0.14062-0.18164a1.9871 1.9871 0 0 0 0.22266 0 10.333 10.333 0 0 0 1.6055-0.10742 3.5851 3.5851 0 0 0 2.7754-3.3125v-2.7559a1.7056 1.7056 0 0 0 0-0.17383c-0.15732 0.082797-0.28307 0.17251-0.42383 0.23047a0.35603 0.35603 0 0 0-0.23047 0.39062c0 0.82797 0.06624 1.6544 0 2.4824a2.9227 2.9227 0 0 1-2.7988 2.5918h-2.3105-10.846a3.0552 3.0552 0 0 1-2.1777-0.78711 2.9062 2.9062 0 0 1-0.76953-1.125 57.072 57.072 0 0 0 13.486-2.5918 2.161 2.161 0 0 0 1.6562 2.0449 1.954 1.954 0 0 0 2.0859-0.63672 2.1196 2.1196 0 0 0 0.14062-2.666l0.1582-0.074219c0.88593-0.37259 1.713-0.72218 2.541-1.1113a22.637 22.637 0 0 0 5.2578-3.2031 5.5723 5.5723 0 0 0 1.5234-1.8457 1.6559 1.6559 0 0 0-0.5625-2.1953 4.8685 4.8685 0 0 0-1.7559-0.75391 18.157 18.157 0 0 0-4.5859-0.38086h-0.33203c-0.03312-0.50506-0.023604-0.90148-0.089844-1.332a3.6348 3.6348 0 0 0-3.5859-3.0645h-13.182zm0.32227 13.547a1.6768 1.6768 0 0 1 1.6895 1.6602v0.017578a1.6768 1.6768 0 0 1-1.6738 1.6758 1.6768 1.6768 0 0 1-1.6797-1.668 1.6768 1.6768 0 0 1 1.6641-1.6855zm12.576 0a1.6768 1.6768 0 0 1 1.6895 1.6602v0.015625a1.6768 1.6768 0 0 1-1.6738 1.6777 1.6768 1.6768 0 0 1-1.6797-1.668 1.6768 1.6768 0 0 1 1.6641-1.6855z"/>
          <path className="cls-2" d="m17.844 11.898a0.82797 0.82797 0 0 0-0.10547 0.001953h-3.0137-2.4844a0.87765 0.87765 0 0 0-0.95898 0.93555v6.666a0.82797 0.82797 0 0 0 0.91016 0.89453h5.5469a0.89421 0.89421 0 0 0 0.92774-0.93555v-2.3359-1.168l1.6152-0.4375c0.057955-0.01656 0.14844-0.07532 0.14844-0.125v-0.60352l-1.7969 0.44726v-2.4277a0.82797 0.82797 0 0 0-0.78906-0.91211zm-5.209 0.62891c0.027451-4.38e-4 0.05396-8.67e-4 0.082031 0.001953h2.0645 2.5039c0.43016-0.03806 0.78694 0.33795 0.74219 0.78125 0.01834 4.5826 0.027344 1.3644 0.027344 5.7012 0.020459 0.44873-0.3347 0.81987-0.76953 0.80273h-4.6094c-0.42941 0.0462-0.79272-0.32155-0.75586-0.76562v-5.7168c-0.029925-0.43566 0.30307-0.79812 0.71484-0.80469z"/>
          <path className="cls-2" d="m27.428 11.902a0.82797 0.82797 0 0 0-0.10938 0.015625h-5.4062a0.82797 0.82797 0 0 0-0.97656 0.98438v6.623a0.82797 0.82797 0 0 0 0.82812 0.82812h5.6621a0.98529 0.98529 0 0 0 0.45508-0.12305 0.91077 0.91077 0 0 0 0.40625-0.89453v-5.1582l0.58008-0.074218v-0.62109h-0.58789a6.4748 6.4748 0 0 0 0.025391-0.66211 0.82797 0.82797 0 0 0-0.87695-0.91797zm-5.1602 0.61719c0.027452-4.38e-4 0.055913 0.001087 0.083984 0.003907h2.0625 2.5039c0.43016-0.03806 0.78694 0.33795 0.74219 0.78125 0.01834 4.5826 0.029297 1.3644 0.029297 5.7012 0.02046 0.44874-0.33665 0.81987-0.77148 0.80274h-4.6074c-0.42941 0.0462-0.79272-0.3235-0.75586-0.76758v-5.7148c-0.029925-0.43566 0.30112-0.80007 0.71289-0.80664z"/>
          </g></svg>
    )
  },

  config.linkedin && {
    name: 'linkedin',
    href: `https://www.linkedin.com/in/${config.linkedin}`,
    title: `LinkedIn ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z' />
      </svg>
    )
  },

  config.newsletter && {
    name: 'newsletter',
    href: `${config.newsletter}`,
    title: `Newsletter ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M12 .64L8.23 3H5V5L2.97 6.29C2.39 6.64 2 7.27 2 8V18C2 19.11 2.9 20 4 20H20C21.11 20 22 19.11 22 18V8C22 7.27 21.61 6.64 21.03 6.29L19 5V3H15.77M7 5H17V9.88L12 13L7 9.88M8 6V7.5H16V6M5 7.38V8.63L4 8M19 7.38L20 8L19 8.63M8 8.5V10H16V8.5Z' />
      </svg>
    )
  },

  config.youtube && {
    name: 'youtube',
    href: `https://www.youtube.com/${config.youtube}`,
    title: `YouTube ${config.youtube}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z' />
      </svg>
    )
  }
].filter(Boolean)

export const PageSocial: React.FC = () => {
  return (
    <div className={styles.pageSocial}>
      {socialLinks.map((action) => (
        <a
          className={cs(styles.action, styles[action.name])}
          href={action.href}
          key={action.name}
          title={action.title}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={styles.actionBg}>
            <div className={styles.actionBgPane} />
          </div>

          <div className={styles.actionBg}>{action.icon}</div>
        </a>
      ))}
    </div>
  )
}
